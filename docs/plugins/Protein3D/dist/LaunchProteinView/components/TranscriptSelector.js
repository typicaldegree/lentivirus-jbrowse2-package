import React from 'react';
import { MenuItem, TextField } from '@mui/material';
// locals
import { getGeneDisplayName, getTranscriptDisplayName } from './util';
function TextField2({ children, ...rest }) {
    return (React.createElement("div", null,
        React.createElement(TextField, { ...rest }, children)));
}
export default function TranscriptSelector({ val, setVal, isoforms, isoformSequences, structureSequence, feature, }) {
    return (React.createElement(TextField2, { value: val, onChange: event => {
            setVal(event.target.value);
        }, label: "Choose transcript isoform", select: true },
        isoforms
            .filter(f => !!isoformSequences[f.id()])
            .filter(f => isoformSequences[f.id()].seq.replaceAll('*', '') ===
            structureSequence)
            .map(f => (React.createElement(MenuItem, { value: f.id(), key: f.id() },
            getGeneDisplayName(feature),
            " - ",
            getTranscriptDisplayName(f),
            " (",
            isoformSequences[f.id()].seq.length,
            "aa) (matches structure residues)"))),
        isoforms
            .filter(f => !!isoformSequences[f.id()])
            .filter(f => isoformSequences[f.id()].seq.replaceAll('*', '') !==
            structureSequence)
            .sort((a, b) => isoformSequences[b.id()].seq.length -
            isoformSequences[a.id()].seq.length)
            .map(f => (React.createElement(MenuItem, { value: f.id(), key: f.id() },
            getGeneDisplayName(feature),
            " - ",
            getTranscriptDisplayName(f),
            " (",
            isoformSequences[f.id()].seq.length,
            "aa)"))),
        isoforms
            .filter(f => !isoformSequences[f.id()])
            .map(f => (React.createElement(MenuItem, { value: f.id(), key: f.id(), disabled: true },
            getGeneDisplayName(feature),
            " - ",
            getTranscriptDisplayName(f),
            " (no data)")))));
}
//# sourceMappingURL=TranscriptSelector.js.map