import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import { Button, DialogActions, DialogContent, FormControlLabel, FormControl, Link, Radio, RadioGroup, TextField, Typography, } from '@mui/material';
import { makeStyles } from 'tss-react/mui';
import { getContainingView, getSession, } from '@jbrowse/core/util';
import { ErrorMessage, LoadingEllipses } from '@jbrowse/core/ui';
// locals
import { getGeneDisplayName, getId, getTranscriptDisplayName, getTranscriptFeatures, } from './util';
// components
import TranscriptSelector from './TranscriptSelector';
import MSATable from './MSATable';
import HelpButton from './HelpButton';
// hooks
import useIsoformProteinSequences from './useIsoformProteinSequences';
import useLocalStructureFileSequence from './useLocalStructureFileSequence';
import useRemoteStructureFileSequence from './useRemoteStructureFileSequence';
const useStyles = makeStyles()(theme => ({
    dialogContent: {
        marginTop: theme.spacing(6),
        width: '80em',
    },
    textAreaFont: {
        fontFamily: 'Courier New',
    },
}));
function HelpText() {
    return (React.createElement("div", { style: { marginBottom: 20 } },
        "Manually supply a protein structure (PDB, mmCIF, etc) for a given transcript. You can open the file from the result of running, for example,",
        ' ',
        React.createElement(Link, { target: "_blank", href: "https://github.com/sokrypton/ColabFold" }, "ColabFold"),
        ". This plugin will align the protein sequence calculated from the genome to the protein sequence embedded in the structure file which allows for slight differences in these two representations."));
}
const UserProvidedStructure = observer(function ({ feature, model, handleClose, }) {
    const { classes } = useStyles();
    const session = getSession(model);
    const [file, setFile] = useState();
    const [pdbId, setPdbId] = useState('');
    const [choice, setChoice] = useState('file');
    const [error2, setError] = useState();
    const [structureURL, setStructureURL] = useState('');
    const [userSelection, setUserSelection] = useState();
    const [showAllProteinSequences, setShowAllProteinSequences] = useState(false);
    // check if we are looking at a 'two-level' or 'three-level' feature by
    // finding exon/CDS subfeatures. we want to select from transcript names
    const options = getTranscriptFeatures(feature);
    const view = getContainingView(model);
    const selectedTranscript = options.find(val => getId(val) === userSelection);
    const { isoformSequences, error } = useIsoformProteinSequences({
        feature,
        view,
    });
    const protein = isoformSequences?.[userSelection ?? ''];
    const { sequences: structureSequences1, error: error3 } = useLocalStructureFileSequence({ file });
    const { sequences: structureSequences2, error: error4 } = useRemoteStructureFileSequence({ url: structureURL });
    const structureName = file?.name ?? structureURL.slice(structureURL.lastIndexOf('/') + 1);
    const structureSequences = structureSequences1 ?? structureSequences2;
    const structureSequence = structureSequences?.[0];
    useEffect(() => {
        if (isoformSequences !== undefined) {
            const ret = options.find(f => isoformSequences[f.id()]?.seq.replaceAll('*', '') ==
                structureSequence) ?? options.find(f => !!isoformSequences[f.id()]);
            setUserSelection(ret?.id());
        }
    }, [options, structureSequence, isoformSequences]);
    const e = error || error2 || error3 || error4;
    return (React.createElement(React.Fragment, null,
        React.createElement(DialogContent, { className: classes.dialogContent },
            e ? React.createElement(ErrorMessage, { error: e }) : null,
            React.createElement(HelpText, null),
            React.createElement("div", { style: { display: 'flex', margin: 30 } },
                React.createElement(Typography, null,
                    "Open your structure file ",
                    React.createElement(HelpButton, null)),
                React.createElement(FormControl, { component: "fieldset" },
                    React.createElement(RadioGroup, { value: choice, onChange: event => {
                            setChoice(event.target.value);
                        } },
                        React.createElement(FormControlLabel, { value: "url", control: React.createElement(Radio, null), label: "URL" }),
                        React.createElement(FormControlLabel, { value: "file", control: React.createElement(Radio, null), label: "File" }),
                        React.createElement(FormControlLabel, { value: "pdb", control: React.createElement(Radio, null), label: "PDB ID" }))),
                choice === 'url' ? (React.createElement("div", null,
                    React.createElement(Typography, null, "Open a PDB/mmCIF/etc. file from remote URL"),
                    React.createElement(TextField, { label: "URL", value: structureURL, onChange: event => {
                            setStructureURL(event.target.value);
                        } }))) : null,
                choice === 'file' ? (React.createElement("div", { style: { paddingTop: 20 } },
                    React.createElement(Typography, null, "Open a PDB/mmCIF/etc. file from your local drive"),
                    React.createElement(Button, { variant: "outlined", component: "label" },
                        "Choose File",
                        React.createElement("input", { type: "file", hidden: true, onChange: ({ target }) => {
                                const file = target.files?.[0];
                                if (file) {
                                    setFile(file);
                                }
                            } })))) : null,
                choice === 'pdb' ? (React.createElement(TextField, { value: pdbId, onChange: event => {
                        const s = event.target.value;
                        setPdbId(s);
                        setStructureURL(`https://files.rcsb.org/download/${s}.cif`);
                    }, label: "PDB ID" })) : null),
            React.createElement("div", { style: { margin: 20 } }, isoformSequences ? (structureSequence ? (React.createElement(React.Fragment, null,
                React.createElement(TranscriptSelector, { val: userSelection ?? '', setVal: setUserSelection, structureSequence: structureSequence, isoforms: options, feature: feature, isoformSequences: isoformSequences }),
                React.createElement("div", { style: { margin: 10 } },
                    React.createElement(Button, { variant: "contained", color: "primary", onClick: () => {
                            setShowAllProteinSequences(!showAllProteinSequences);
                        } }, showAllProteinSequences
                        ? 'Hide all isoform protein sequences'
                        : 'Show all isoform protein sequences'),
                    showAllProteinSequences ? (React.createElement(MSATable, { structureSequence: structureSequence, structureName: structureName, isoformSequences: isoformSequences })) : null))) : null) : (React.createElement(LoadingEllipses, { title: "Loading protein sequences", variant: "h6" })))),
        React.createElement(DialogActions, null,
            React.createElement(Button, { variant: "contained", color: "secondary", onClick: () => {
                    handleClose();
                } }, "Cancel"),
            React.createElement(Button, { variant: "contained", color: "primary", disabled: !(structureURL || file) || !protein || !selectedTranscript, onClick: () => {
                    // eslint-disable-next-line @typescript-eslint/no-floating-promises
                    ;
                    (async () => {
                        try {
                            session.addView('ProteinView', {
                                type: 'ProteinView',
                                seq2: protein,
                                feature: selectedTranscript?.toJSON(),
                                connectedViewId: view.id,
                                displayName: `Protein view ${getGeneDisplayName(feature)} - ${getTranscriptDisplayName(selectedTranscript)}`,
                                ...(file ? { data: await file.text() } : {}),
                                ...(structureURL ? { url: structureURL } : {}),
                            });
                            handleClose();
                        }
                        catch (e) {
                            console.error(e);
                            setError(e);
                        }
                    })();
                } }, "Launch 3-D protein structure view"))));
});
export default UserProvidedStructure;
//# sourceMappingURL=UserProvidedStructure.js.map