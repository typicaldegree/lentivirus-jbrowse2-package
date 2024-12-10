import React, { useState } from 'react';
import { Checkbox, FormControlLabel, TextField } from '@mui/material';
import { max } from '@jbrowse/core/util';
import { makeStyles } from 'tss-react/mui';
// locals
import { getTranscriptDisplayName } from './util';
const useStyles = makeStyles()({
    textAreaFont: {
        fontFamily: 'Courier New',
        whiteSpace: 'pre',
    },
    margin: {
        marginLeft: 20,
    },
});
export default function MSATable({ structureName, structureSequence, isoformSequences, }) {
    const { classes } = useStyles();
    const [showInFastaFormat, setShowInFastaFormat] = useState(false);
    const removedStars = Object.fromEntries(Object.entries(isoformSequences).map(([key, val]) => [
        key,
        { ...val, seq: val.seq.replaceAll('*', '') },
    ]));
    const exactMatchIsoformAndStructureSeq = Object.entries(removedStars).find(([_, val]) => structureSequence === val.seq);
    const sname = `${structureName || ''} (structure residues)`;
    const maxKeyLen = max([
        sname.length,
        ...Object.entries(removedStars).map(([_, val]) => getTranscriptDisplayName(val.feature).length),
    ]);
    const l1 = [
        `${sname.padEnd(maxKeyLen)}${exactMatchIsoformAndStructureSeq ? '*' : ' '} ${structureSequence}`,
        exactMatchIsoformAndStructureSeq
            ? `${getTranscriptDisplayName(exactMatchIsoformAndStructureSeq[1].feature).padEnd(maxKeyLen)}* ${exactMatchIsoformAndStructureSeq[1].seq}`
            : undefined,
        ...Object.entries(removedStars)
            .map(([_, val]) => `${getTranscriptDisplayName(val.feature).padEnd(maxKeyLen)}  ${val.seq}`)
            .filter(([k]) => k !== exactMatchIsoformAndStructureSeq?.[0]),
    ]
        .filter(f => !!f)
        .join('\n');
    const l2 = [
        `>${sname}\n${structureSequence}`,
        ...Object.values(removedStars).map(({ feature, seq }) => `>${getTranscriptDisplayName(feature)}\n${seq}`),
    ].join('\n');
    return (React.createElement(React.Fragment, null,
        React.createElement(FormControlLabel, { className: classes.margin, control: React.createElement(Checkbox, { onChange: event => {
                    setShowInFastaFormat(event.target.checked);
                }, checked: showInFastaFormat }), label: "Show in FASTA format?" }),
        React.createElement(TextField, { variant: "outlined", multiline: true, minRows: 5, maxRows: 10, fullWidth: true, value: showInFastaFormat ? l2 : l1, InputProps: {
                readOnly: true,
                classes: {
                    input: classes.textAreaFont,
                },
            } })));
}
//# sourceMappingURL=MSATable.js.map