import Plugin from '@jbrowse/core/Plugin';
// locals
import { version } from '../package.json';
import ProteinViewF from './ProteinView';
import LaunchProteinViewF from './LaunchProteinView';
import AddHighlightModelF from './AddHighlightModel';
import AlphaFoldConfidenceAdapterF from './AlphaFoldConfidenceAdapter';
import UniProtVariationAdapterF from './UniProtVariationAdapter';
import AlphaMissensePathogenicityAdapterF from './AlphaMissensePathogenicityAdapter';
export default class ProteinViewer extends Plugin {
    name = 'ProteinViewer';
    version = version;
    install(pluginManager) {
        ProteinViewF(pluginManager);
        LaunchProteinViewF(pluginManager);
        AddHighlightModelF(pluginManager);
        AlphaFoldConfidenceAdapterF(pluginManager);
        AlphaMissensePathogenicityAdapterF(pluginManager);
        UniProtVariationAdapterF(pluginManager);
    }
    configure(_pluginManager) { }
}
//# sourceMappingURL=index.js.map