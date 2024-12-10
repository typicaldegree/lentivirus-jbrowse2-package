// see similar function in msaview plugin
export function genomeToTranscriptMapping(feature) {
    const strand = feature.get('strand');
    const refName = feature.get('refName');
    const subs = feature.children() ?? [];
    const cds = subs
        .filter(f => f.get('type') === 'CDS')
        .sort((a, b) => strand * (a.get('start') - b.get('start')));
    const g2p = {};
    const p2g = {};
    let proteinCounter = 0;
    if (strand === -1) {
        for (const f of cds) {
            for (let genomePos = f.get('end'); genomePos > f.get('start'); genomePos--) {
                const proteinPos = Math.floor(proteinCounter++ / 3);
                g2p[genomePos] = proteinPos;
                if (!p2g[proteinPos]) {
                    p2g[proteinPos] = genomePos;
                }
            }
        }
    }
    else {
        for (const f of cds) {
            for (let genomePos = f.get('start'); genomePos < f.get('end'); genomePos++) {
                const proteinPos = Math.floor(proteinCounter++ / 3);
                g2p[genomePos] = proteinPos;
                if (!p2g[proteinPos]) {
                    p2g[proteinPos] = genomePos;
                }
            }
        }
    }
    return { g2p, p2g, refName, strand };
}
//# sourceMappingURL=genomeToTranscriptMapping.js.map