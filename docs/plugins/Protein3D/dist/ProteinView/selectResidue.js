import { StructureSelection } from 'molstar/lib/mol-model/structure';
import { getMolstarStructureSelection } from './util';
export default function selectResidue({ structure, selectedResidue, plugin, }) {
    const sel = getMolstarStructureSelection({ structure, selectedResidue });
    const loci = StructureSelection.toLociWithSourceUnits(sel);
    plugin.managers.interactivity.lociSelects.select({
        loci,
    });
}
//# sourceMappingURL=selectResidue.js.map