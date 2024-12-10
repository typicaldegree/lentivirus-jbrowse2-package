import React from 'react';
import { observer } from 'mobx-react';
import { LoadingEllipses } from '@jbrowse/core/ui';
import CascadingMenuButton from '@jbrowse/core/ui/CascadingMenuButton';
// icons
import MenuIcon from '@mui/icons-material/Menu';
import Visibility from '@mui/icons-material/Visibility';
import ProteinAlignment from './ProteinAlignment';
const ProteinViewHeader = observer(function ({ model, }) {
    const { structures, showAlignment } = model;
    return (React.createElement("div", null,
        React.createElement(InformativeHeaderArea, { model: model }),
        showAlignment
            ? structures.map((structure, idx) => {
                const { pairwiseAlignment } = structure;
                return (React.createElement("div", { key: idx }, pairwiseAlignment ? (React.createElement(ProteinAlignment, { key: idx, model: structure })) : (React.createElement(LoadingEllipses, { message: "Loading pairwise alignment" }))));
            })
            : null));
});
const StructureInfoHeaderArea = observer(function ({ model, }) {
    return model.structures.map((s, id) => {
        const { clickString, hoverString } = s;
        return (React.createElement("span", { key: id }, [
            clickString ? `Click: ${clickString}` : '',
            hoverString ? `Hover: ${hoverString}` : '',
        ].join(' ')));
    });
});
const InformativeHeaderArea = observer(function ({ model, }) {
    const { showAlignment, showHighlight, zoomToBaseLevel } = model;
    return (React.createElement("div", { style: { display: 'flex' } },
        React.createElement(StructureInfoHeaderArea, { model: model }),
        React.createElement("span", { style: { flexGrow: 1 } }),
        React.createElement(CascadingMenuButton, { menuItems: [
                {
                    label: 'Show pairwise alignment area',
                    type: 'checkbox',
                    checked: showAlignment,
                    icon: Visibility,
                    onClick: () => {
                        model.setShowAlignment(!showAlignment);
                    },
                },
                {
                    label: 'Show pairwise alignment as highlight',
                    type: 'checkbox',
                    checked: showHighlight,
                    icon: Visibility,
                    onClick: () => {
                        model.setShowHighlight(!showHighlight);
                    },
                },
                {
                    label: 'Zoom to base level on click',
                    type: 'checkbox',
                    checked: zoomToBaseLevel,
                    icon: Visibility,
                    onClick: () => {
                        model.setZoomToBaseLevel(!zoomToBaseLevel);
                    },
                },
            ] },
            React.createElement(MenuIcon, null))));
});
export default ProteinViewHeader;
//# sourceMappingURL=ProteinViewHeader.js.map