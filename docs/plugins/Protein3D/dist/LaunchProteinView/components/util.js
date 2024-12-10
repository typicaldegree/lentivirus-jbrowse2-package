export function getTranscriptFeatures(feature) {
    // check if we are looking at a 'two-level' or 'three-level' feature by
    // finding exon/CDS subfeatures. we want to select from transcript names
    const subfeatures = feature.get('subfeatures') ?? [];
    return subfeatures.some(f => f.get('type') === 'CDS' || f.get('type') === 'exon')
        ? [feature]
        : subfeatures;
}
export function stripTrailingVersion(s) {
    return s?.replace(/\.[^./]+$/, '');
}
export function z(n) {
    return n.toLocaleString('en-US');
}
export function getDisplayName(f) {
    return f.get('name') || f.get('id');
}
export function getId(val) {
    return val === undefined ? '' : val.id();
}
export function getTranscriptDisplayName(val) {
    return val === undefined
        ? ''
        : [val.get('name') || val.get('id')].filter(f => !!f).join(' ');
}
export function getGeneDisplayName(val) {
    return val === undefined
        ? ''
        : [val.get('gene_name') || val.get('name') || val.get('id')]
            .filter(f => !!f)
            .join(' ');
}
//# sourceMappingURL=util.js.map