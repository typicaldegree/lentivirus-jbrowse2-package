import { getSession } from '@jbrowse/core/util';
import { checkHovered } from './util';
export function genomeToProtein({ model, }) {
    const { hovered } = getSession(model);
    const { genomeToTranscriptSeqMapping, connectedView } = model;
    return !connectedView?.initialized ||
        !genomeToTranscriptSeqMapping ||
        !checkHovered(hovered)
        ? undefined
        : genomeToTranscriptSeqMapping.g2p[hovered.hoverPosition.coord];
}
//# sourceMappingURL=genomeToProtein.js.map