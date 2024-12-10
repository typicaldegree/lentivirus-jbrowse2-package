import { getSession } from '@jbrowse/core/util';
export function proteinToGenomeMapping({ model, structureSeqPos, }) {
    const { genomeToTranscriptSeqMapping, pairwiseAlignment, structureSeqToTranscriptSeqPosition, } = model;
    if (!genomeToTranscriptSeqMapping || !pairwiseAlignment) {
        return undefined;
    }
    const { p2g, strand } = genomeToTranscriptSeqMapping;
    const r1 = structureSeqToTranscriptSeqPosition?.[structureSeqPos];
    if (r1 === undefined) {
        return undefined;
    }
    const s0 = p2g[r1];
    if (s0 === undefined) {
        return undefined;
    }
    const start = s0;
    const end = start + 3 * strand;
    return [Math.min(start, end), Math.max(start, end)];
}
export async function clickProteinToGenome({ model, structureSeqPos, }) {
    const session = getSession(model);
    const result = proteinToGenomeMapping({ structureSeqPos, model });
    const { connectedView, genomeToTranscriptSeqMapping, zoomToBaseLevel } = model;
    const { assemblyManager } = session;
    if (!genomeToTranscriptSeqMapping || result === undefined) {
        return undefined;
    }
    const [s1, s2] = result;
    const { strand, refName } = genomeToTranscriptSeqMapping;
    model.setClickGenomeHighlights([
        {
            assemblyName: 'hg38',
            refName,
            start: s1,
            end: s2,
        },
    ]);
    if (connectedView) {
        if (zoomToBaseLevel) {
            await connectedView.navToLocString(`${refName}:${s1}-${s2}${strand === -1 ? '[rev]' : ''}`);
        }
        else {
            const assembly = assemblyManager.get(connectedView.assemblyNames[0]);
            connectedView.centerAt(s1, assembly?.getCanonicalRefName(refName) ?? refName);
        }
    }
}
export function hoverProteinToGenome({ model, structureSeqPos, }) {
    if (structureSeqPos === undefined) {
        model.setHoverGenomeHighlights([]);
    }
    else {
        const mappedGenomeCoordinate = proteinToGenomeMapping({
            structureSeqPos,
            model,
        });
        const { genomeToTranscriptSeqMapping } = model;
        if (genomeToTranscriptSeqMapping && mappedGenomeCoordinate) {
            model.setHoverGenomeHighlights([
                {
                    assemblyName: 'hg38',
                    refName: genomeToTranscriptSeqMapping.refName,
                    start: mappedGenomeCoordinate[0],
                    end: mappedGenomeCoordinate[1],
                },
            ]);
        }
    }
}
//# sourceMappingURL=proteinToGenomeMapping.js.map