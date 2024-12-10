import { StructureSelection } from 'molstar/lib/mol-model/structure';
import { getMolstarStructureSelection } from './util';
export default function highlightResidue({ structure, selectedResidue, plugin, }) {
    const sel = getMolstarStructureSelection({
        structure,
        selectedResidue: selectedResidue + 1,
    });
    const loci = StructureSelection.toLociWithSourceUnits(sel);
    plugin.managers.interactivity.lociHighlights.clearHighlights();
    plugin.managers.interactivity.lociHighlights.highlight({
        loci,
    });
}
//# sourceMappingURL=highlightResidue.js.map