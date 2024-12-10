import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import { Button, DialogActions, DialogContent, Typography } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { getContainingView, getSession, isSessionWithAddTracks, } from '@jbrowse/core/util';
import { ErrorMessage, LoadingEllipses } from '@jbrowse/core/ui';
// locals
import { getDisplayName, getGeneDisplayName, getId, getTranscriptDisplayName, getTranscriptFeatures, } from './util';
// components
import TranscriptSelector from './TranscriptSelector';
import HelpButton from './HelpButton';
import AlphaFoldDBSearchStatus from './AlphaFoldDBSearchStatus';
// hooks
import useMyGeneInfoUniprotIdLookup from './useMyGeneInfoUniprotIdLookup';
import useRemoteStructureFileSequence from './useRemoteStructureFileSequence';
import useIsoformProteinSequences from './useIsoformProteinSequences';
const useStyles = makeStyles()(theme => ({
    dialogContent: {
        marginTop: theme.spacing(6),
        width: '80em',
    },
}));
const AlphaFoldDBSearch = observer(function ({ feature, model, handleClose, }) {
    const { classes } = useStyles();
    const session = getSession(model);
    // check if we are looking at a 'two-level' or 'three-level' feature by
    // finding exon/CDS subfeatures. we want to select from transcript names
    const options = getTranscriptFeatures(feature);
    const [userSelection, setUserSelection] = useState();
    const view = getContainingView(model);
    const selectedTranscript = options.find(val => getId(val) === userSelection);
    const { isoformSequences, isLoading: isIsoformProteinSequencesLoading, error: isoformProteinSequencesError, } = useIsoformProteinSequences({
        feature,
        view,
    });
    const userSelectedProteinSequence = isoformSequences?.[userSelection ?? ''];
    const { uniprotId, isLoading: isMyGeneLoading, error: myGeneError, } = useMyGeneInfoUniprotIdLookup({
        id: selectedTranscript
            ? getDisplayName(selectedTranscript)
            : getDisplayName(feature),
    });
    const url = uniprotId
        ? `https://alphafold.ebi.ac.uk/files/AF-${uniprotId}-F1-model_v4.cif`
        : undefined;
    const { sequences: structureSequences, isLoading: isRemoteStructureSequenceLoading, error: remoteStructureSequenceError, } = useRemoteStructureFileSequence({ url });
    const e = myGeneError || isoformProteinSequencesError || remoteStructureSequenceError;
    const structureSequence = structureSequences?.[0];
    useEffect(() => {
        if (isoformSequences !== undefined) {
            const ret = options.find(f => isoformSequences[f.id()]?.seq.replaceAll('*', '') ==
                structureSequence) ?? options.find(f => !!isoformSequences[f.id()]);
            setUserSelection(ret?.id());
        }
    }, [options, structureSequence, isoformSequences]);
    return (React.createElement(React.Fragment, null,
        React.createElement(DialogContent, { className: classes.dialogContent },
            e ? React.createElement(ErrorMessage, { error: e }) : null,
            React.createElement(Typography, null,
                "Automatically find AlphaFoldDB entry for given transcript via gene ID lookup ",
                React.createElement(HelpButton, null)),
            isRemoteStructureSequenceLoading ? (React.createElement(LoadingEllipses, { variant: "h6", message: "Loading sequence from remote structure file" })) : null,
            isMyGeneLoading ? (React.createElement(LoadingEllipses, { variant: "h6", message: "Looking up UniProt ID from mygene.info" })) : uniprotId ? null : (React.createElement("div", null,
                "UniProt ID not found. Search sequence on AlphaFoldDB",
                ' ',
                React.createElement("a", { href: `https://alphafold.ebi.ac.uk/search/sequence/${userSelectedProteinSequence?.seq.replaceAll('*', '')}`, target: "_blank", rel: "noreferrer" }, "here"),
                ' ',
                React.createElement("br", null),
                "After visiting the above link, then paste the structure URL into the Manual tab")),
            isIsoformProteinSequencesLoading ? (React.createElement(LoadingEllipses, { variant: "h6", message: "Loading protein sequences from transcript isoforms" })) : null,
            isoformSequences && structureSequence && selectedTranscript ? (React.createElement(React.Fragment, null,
                React.createElement(TranscriptSelector, { val: userSelection ?? '', setVal: setUserSelection, structureSequence: structureSequence, feature: feature, isoforms: options, isoformSequences: isoformSequences }),
                React.createElement(AlphaFoldDBSearchStatus, { uniprotId: uniprotId, selectedTranscript: selectedTranscript, structureSequence: structureSequence, isoformSequences: isoformSequences }))) : null),
        React.createElement(DialogActions, null,
            React.createElement(Button, { variant: "contained", color: "secondary", onClick: () => {
                    handleClose();
                } }, "Cancel"),
            React.createElement(Button, { variant: "contained", color: "primary", disabled: !uniprotId || !userSelectedProteinSequence || !selectedTranscript, onClick: () => {
                    session.addView('ProteinView', {
                        type: 'ProteinView',
                        isFloating: true,
                        structures: [
                            {
                                url,
                                userProvidedTranscriptSequence: userSelectedProteinSequence?.seq,
                                feature: selectedTranscript?.toJSON(),
                                connectedViewId: view.id,
                            },
                        ],
                        displayName: [
                            'Protein view',
                            uniprotId,
                            getGeneDisplayName(feature),
                            getTranscriptDisplayName(selectedTranscript),
                        ].join(' - '),
                    });
                    handleClose();
                } }, "Launch 3-D protein structure view"),
            React.createElement(Button, { variant: "contained", disabled: !uniprotId || !userSelectedProteinSequence || !selectedTranscript, onClick: () => {
                    if (uniprotId && isSessionWithAddTracks(session)) {
                        // eslint-disable-next-line @typescript-eslint/no-floating-promises
                        ;
                        (async () => {
                            try {
                                session.addTemporaryAssembly?.({
                                    name: uniprotId,
                                    sequence: {
                                        type: 'ReferenceSequenceTrack',
                                        trackId: `${uniprotId}-ReferenceSequenceTrack`,
                                        sequenceType: 'pep',
                                        adapter: {
                                            type: 'UnindexedFastaAdapter',
                                            rewriteRefNames: "jexl:split(refName,'|')[1]",
                                            fastaLocation: {
                                                uri: `https://rest.uniprot.org/uniprotkb/${uniprotId}.fasta`,
                                            },
                                        },
                                    },
                                });
                                const url = `https://rest.uniprot.org/uniprotkb/${uniprotId}.gff`;
                                const res = await fetch(url);
                                if (!res.ok) {
                                    throw new Error(`HTTP ${res.status} fetching ${url}`);
                                }
                                const data = await res.text();
                                const types = [
                                    ...new Set(data
                                        .split('\n')
                                        .filter(f => !f.startsWith('#'))
                                        .map(f => f.trim())
                                        .filter(f => !!f)
                                        .map(f => f.split('\t')[2])),
                                ];
                                types.forEach(type => {
                                    const s = `${uniprotId}-${type}`;
                                    session.addTrackConf({
                                        type: 'FeatureTrack',
                                        trackId: s,
                                        name: type,
                                        adapter: {
                                            type: 'Gff3Adapter',
                                            gffLocation: {
                                                uri: `https://rest.uniprot.org/uniprotkb/${uniprotId}.gff`,
                                            },
                                        },
                                        assemblyNames: [uniprotId],
                                        displays: [
                                            {
                                                displayId: `${s}-LinearBasicDisplay`,
                                                type: 'LinearBasicDisplay',
                                                jexlFilters: [`get(feature,'type')=='${type}'`],
                                            },
                                        ],
                                    });
                                });
                                session.addTrackConf({
                                    type: 'FeatureTrack',
                                    trackId: `${uniprotId}-Antigen`,
                                    name: 'Antigen',
                                    adapter: {
                                        type: 'Gff3Adapter',
                                        gffLocation: {
                                            uri: `https://www.ebi.ac.uk/proteins/api/antigen/${uniprotId}?format=gff`,
                                        },
                                    },
                                    assemblyNames: [uniprotId],
                                });
                                session.addTrackConf({
                                    type: 'FeatureTrack',
                                    trackId: `${uniprotId}-Variation`,
                                    name: 'Variation',
                                    adapter: {
                                        type: 'UniProtVariationAdapter',
                                        location: {
                                            uri: `https://www.ebi.ac.uk/proteins/api/variation/${uniprotId}.json`,
                                        },
                                    },
                                    assemblyNames: [uniprotId],
                                });
                                session.addTrackConf({
                                    type: 'QuantitativeTrack',
                                    trackId: `${uniprotId}-AlphaFold-confidence`,
                                    name: 'AlphaFold confidence',
                                    adapter: {
                                        type: 'AlphaFoldConfidenceAdapter',
                                        location: {
                                            uri: `https://alphafold.ebi.ac.uk/files/AF-${uniprotId}-F1-confidence_v4.json`,
                                        },
                                    },
                                    assemblyNames: [uniprotId],
                                });
                                session.addTrackConf({
                                    type: 'MultiQuantitativeTrack',
                                    trackId: `${uniprotId}-AlphaMissense-scores`,
                                    name: 'AlphaMissense scores',
                                    assemblyNames: [uniprotId],
                                    adapter: {
                                        type: 'AlphaMissensePathogenicityAdapter',
                                        location: {
                                            uri: `https://alphafold.ebi.ac.uk/files/AF-${uniprotId}-F1-aa-substitutions.csv`,
                                        },
                                    },
                                    displays: [
                                        {
                                            type: 'MultiLinearWiggleDisplay',
                                            displayId: `${uniprotId}-AlphaMissense-scores-MultiLinearWiggleDisplay`,
                                            defaultRendering: 'multirowdensity',
                                            renderers: {
                                                MultiDensityRenderer: {
                                                    type: 'MultiDensityRenderer',
                                                    bicolorPivotValue: 0.5,
                                                },
                                            },
                                        },
                                    ],
                                });
                                const view = session.addView('LinearGenomeView', {
                                    type: 'LinearGenomeView',
                                    displayName: [
                                        'Protein view',
                                        uniprotId,
                                        getGeneDisplayName(feature),
                                        getTranscriptDisplayName(selectedTranscript),
                                    ].join(' - '),
                                });
                                await view.navToLocString(uniprotId, uniprotId);
                            }
                            catch (e) {
                                console.error(e);
                                session.notifyError(`${e}`, e);
                            }
                        })();
                    }
                    handleClose();
                } }, "Launch linear protein annotation view"))));
});
export default AlphaFoldDBSearch;
//# sourceMappingURL=AlphaFoldDBSearch.js.map