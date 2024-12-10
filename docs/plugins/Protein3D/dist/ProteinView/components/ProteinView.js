import React, { useEffect } from 'react';
import { observer } from 'mobx-react';
import { ErrorMessage, ResizeHandle } from '@jbrowse/core/ui';
import ProteinViewHeader from './ProteinViewHeader';
// hooks
import useProteinView from '../useProteinView';
// css
import css from '../css/molstar';
const style = document.createElement('style');
style.append(css);
document.head.append(style);
const ProteinView = observer(function ({ model, }) {
    const { showControls } = model;
    const { plugin, parentRef, error } = useProteinView({
        showControls,
    });
    useEffect(() => {
        model.setMolstarPluginContext(plugin);
    }, [plugin, model]);
    return error ? (React.createElement(ErrorMessage, { error: error })) : (React.createElement(ProteinViewContainer, { model: model, parentRef: parentRef }));
});
const ProteinViewContainer = observer(function ({ model, parentRef, }) {
    const { width, height, error } = model;
    return (React.createElement("div", { style: { background: '#ccc' } },
        error ? React.createElement(ErrorMessage, { error: error }) : null,
        React.createElement(ProteinViewHeader, { model: model }),
        React.createElement("div", { ref: parentRef, style: {
                position: 'relative',
                width,
                height,
            } }),
        React.createElement(ResizeHandle, { style: { height: 4, background: 'grey' }, onDrag: delta => {
                return model.setHeight(model.height + delta);
            } })));
});
export default ProteinView;
//# sourceMappingURL=ProteinView.js.map