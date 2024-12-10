import React, { useState } from 'react';
import { Button, Link, Typography } from '@mui/material';
// locals
import { getDisplayName } from './util';
import MSATable from './MSATable';
function NotFound({ uniprotId }) {
    return (React.createElement(Typography, null,
        "No structure found for this UniProtID in AlphaFoldDB",
        ' ',
        React.createElement(Link, { target: "_blank", href: `https://alphafold.ebi.ac.uk/search/text/${uniprotId}` }, "(search for results)")));
}
export default function AlphaFoldDBSearchStatus({ uniprotId, selectedTranscript, structureSequence, isoformSequences, }) {
    const url = uniprotId
        ? `https://alphafold.ebi.ac.uk/files/AF-${uniprotId}-F1-model_v4.cif`
        : undefined;
    const url2 = uniprotId
        ? `https://www.uniprot.org/uniprotkb/${uniprotId}/entry`
        : undefined;
    const [showAllProteinSequences, setShowAllProteinSequences] = useState(false);
    return uniprotId ? (React.createElement(React.Fragment, null,
        React.createElement(Typography, null,
            "Found Uniprot ID:",
            ' ',
            React.createElement("a", { href: url2, target: "_blank", rel: "noreferrer" }, uniprotId)),
        React.createElement(Typography, null,
            "AlphaFoldDB link:",
            ' ',
            React.createElement("a", { href: url, target: "_blank", rel: "noreferrer" }, url)),
        structureSequence ? (React.createElement("div", { style: { margin: 20 } },
            React.createElement(Button, { variant: "contained", color: "primary", onClick: () => {
                    setShowAllProteinSequences(!showAllProteinSequences);
                } }, showAllProteinSequences
                ? 'Hide all isoform protein sequences'
                : 'Show all isoform protein sequences'),
            showAllProteinSequences ? (React.createElement(MSATable, { structureSequence: structureSequence, structureName: uniprotId, isoformSequences: isoformSequences })) : null)) : (React.createElement(NotFound, { uniprotId: uniprotId })))) : (React.createElement(Typography, null,
        "Searching ",
        getDisplayName(selectedTranscript),
        " for UniProt ID"));
}
//# sourceMappingURL=AlphaFoldDBSearchStatus.js.map