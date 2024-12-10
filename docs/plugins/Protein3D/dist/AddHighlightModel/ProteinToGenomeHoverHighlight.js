import React from 'react';
import { observer } from 'mobx-react';
import { getSession } from '@jbrowse/core/util';
import Highlight from './Highlight';
const ProteinToGenomeHoverHighlight = observer(function ({ model, }) {
    const { assemblyManager, views } = getSession(model);
    const { assemblyNames } = model;
    const proteinView = views.find(f => f.type === 'ProteinView');
    const assemblyName = assemblyNames[0];
    const assembly = assemblyManager.get(assemblyName);
    return assembly ? (React.createElement(React.Fragment, null, proteinView?.structures.map(structure => structure.hoverGenomeHighlights.map((r, idx) => (React.createElement(Highlight, { key: `${JSON.stringify(r)}-${idx}`, start: r.start, end: r.end, refName: r.refName, assemblyName: assemblyName, model: model })))))) : null;
});
export default ProteinToGenomeHoverHighlight;
//# sourceMappingURL=ProteinToGenomeHoverHighlight.js.map