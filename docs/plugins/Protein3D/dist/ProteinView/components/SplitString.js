import React from 'react';
export default function SplitString({ str, gapSet, hoveredPosition, showHighlight, onMouseOver, onClick, }) {
    return str.split('').map((d, i) => (React.createElement("span", { key: `${d}-${i}`, onMouseOver: () => onMouseOver?.(i), onClick: () => onClick?.(i), style: {
            background: hoveredPosition !== undefined && i === hoveredPosition
                ? '#f698'
                : gapSet?.has(i) && showHighlight
                    ? '#33ff19'
                    : undefined,
        } }, d === ' ' ? React.createElement(React.Fragment, null, "\u00A0") : d)));
}
//# sourceMappingURL=SplitString.js.map