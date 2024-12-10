import React from 'react';
import { observer } from 'mobx-react';
// locals
import ProteinToGenomeClickHighlight from './ProteinToGenomeClickHighlight';
import ProteinToGenomeHoverHighlight from './ProteinToGenomeHoverHighlight';
import GenomeMouseoverHighlight from './GenomeMouseoverHighlight';
const HighlightComponents = observer(function Highlight({ model, }) {
    return (React.createElement(React.Fragment, null,
        React.createElement(ProteinToGenomeClickHighlight, { model: model }),
        React.createElement(ProteinToGenomeHoverHighlight, { model: model }),
        React.createElement(GenomeMouseoverHighlight, { model: model })));
});
export default HighlightComponents;
//# sourceMappingURL=HighlightComponents.js.map