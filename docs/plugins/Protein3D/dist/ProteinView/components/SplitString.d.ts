import React from 'react';
export default function SplitString({ str, gapSet, hoveredPosition, showHighlight, onMouseOver, onClick, }: {
    str: string;
    gapSet?: Set<number>;
    hoveredPosition?: number;
    showHighlight: boolean;
    onMouseOver?: (arg: number) => void;
    onClick?: (arg: number) => void;
}): React.JSX.Element[];
