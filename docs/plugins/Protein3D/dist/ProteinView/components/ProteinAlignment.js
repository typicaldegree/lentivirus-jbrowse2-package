import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react';
import { Tooltip, Typography } from '@mui/material';
import ProteinAlignmentHelpButton from './ProteinAlignmentHelpButton';
import { clickProteinToGenome, hoverProteinToGenome, } from '../proteinToGenomeMapping';
import SplitString from './SplitString';
const ProteinAlignment = observer(function ({ model, }) {
    const { pairwiseAlignment, pairwiseAlignmentToStructurePosition, structurePositionToAlignmentMap, structureSeqHoverPos, showHighlight, } = model;
    const [pairwiseAlignmentHoverPos, setPairwiseAlignmentHoverPos] = useState();
    useEffect(() => {
        setPairwiseAlignmentHoverPos(structureSeqHoverPos === undefined
            ? undefined
            : structurePositionToAlignmentMap?.[structureSeqHoverPos]);
    }, [structurePositionToAlignmentMap, structureSeqHoverPos]);
    if (!pairwiseAlignment) {
        return React.createElement("div", null, "No pairwiseAlignment");
    }
    const a0 = pairwiseAlignment.alns[0].seq;
    const a1 = pairwiseAlignment.alns[1].seq;
    const con = pairwiseAlignment.consensus;
    const gapSet = new Set();
    // eslint-disable-next-line unicorn/no-for-loop
    for (let i = 0; i < con.length; i++) {
        const letter = con[i];
        if (letter === '|') {
            gapSet.add(i);
        }
    }
    function onMouseOver(p) {
        setPairwiseAlignmentHoverPos(p);
        if (pairwiseAlignmentToStructurePosition) {
            const structureSeqPos = pairwiseAlignmentToStructurePosition[p];
            model.setHoveredPosition({ structureSeqPos });
            hoverProteinToGenome({ model, structureSeqPos });
        }
    }
    function onClick(pairwiseAlignmentPos) {
        if (pairwiseAlignmentToStructurePosition) {
            const structureSeqPos = pairwiseAlignmentToStructurePosition[pairwiseAlignmentPos];
            clickProteinToGenome({ model, structureSeqPos }).catch((e) => {
                console.error(e);
            });
        }
    }
    return (React.createElement("div", null,
        React.createElement(ProteinAlignmentHelpButton, { model: model }),
        React.createElement(Typography, null, "Alignment of the protein structure file's sequence with the selected transcript's sequence. Green is the aligned portion"),
        React.createElement("div", { style: {
                fontSize: 9,
                fontFamily: 'monospace',
                cursor: 'pointer',
                margin: 8,
                paddingBottom: 8,
                overflow: 'auto',
                whiteSpace: 'nowrap',
            }, onMouseLeave: () => {
                model.setHoveredPosition(undefined);
                model.clearHoverGenomeHighlights();
            } },
            React.createElement("div", null,
                React.createElement(Tooltip, { title: "This is the sequence of the protein from the reference genome transcript" },
                    React.createElement("span", null, "GENOME\u00A0")),
                React.createElement(SplitString, { str: a0, showHighlight: showHighlight, hoveredPosition: pairwiseAlignmentHoverPos, gapSet: gapSet, onMouseOver: onMouseOver, onClick: onClick })),
            React.createElement("div", null,
                React.createElement("span", null, "\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0\u00A0"),
                React.createElement(SplitString, { showHighlight: showHighlight, str: con, hoveredPosition: pairwiseAlignmentHoverPos, gapSet: gapSet, onMouseOver: onMouseOver, onClick: onClick })),
            React.createElement("div", null,
                React.createElement(Tooltip, { title: "This is the sequence of the protein from the structure file" },
                    React.createElement("span", null, "STRUCT\u00A0")),
                React.createElement(SplitString, { str: a1, hoveredPosition: pairwiseAlignmentHoverPos, showHighlight: showHighlight, gapSet: gapSet, onMouseOver: onMouseOver, onClick: onClick })))));
});
export default ProteinAlignment;
//# sourceMappingURL=ProteinAlignment.js.map