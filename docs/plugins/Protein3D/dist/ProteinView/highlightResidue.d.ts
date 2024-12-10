import { PluginContext } from 'molstar/lib/mol-plugin/context';
import { Structure } from 'molstar/lib/mol-model/structure';
export default function highlightResidue({ structure, selectedResidue, plugin, }: {
    structure: Structure;
    selectedResidue: number;
    plugin: PluginContext;
}): void;
