import { getSession, getContainingTrack } from '@jbrowse/core/util';
// icons
import AddIcon from '@mui/icons-material/Add';
// locals
import LaunchProteinViewDialog from './components/LaunchProteinViewDialog';
function isDisplay(elt) {
    return elt.name === 'LinearBasicDisplay';
}
function extendStateModel(stateModel) {
    return stateModel.views((self) => {
        const superContextMenuItems = self.contextMenuItems;
        return {
            contextMenuItems() {
                const feature = self.contextMenuFeature;
                const track = getContainingTrack(self);
                return [
                    ...superContextMenuItems(),
                    ...(feature
                        ? [
                            {
                                label: 'Launch protein view',
                                icon: AddIcon,
                                onClick: () => {
                                    getSession(track).queueDialog(handleClose => [
                                        LaunchProteinViewDialog,
                                        {
                                            model: track,
                                            handleClose,
                                            feature,
                                        },
                                    ]);
                                },
                            },
                        ]
                        : []),
                ];
            },
        };
    });
}
export default function LaunchProteinViewF(pluginManager) {
    pluginManager.addToExtensionPoint('Core-extendPluggableElement', (elt) => {
        if (isDisplay(elt)) {
            elt.stateModel = extendStateModel(elt.stateModel);
        }
        return elt;
    });
}
//# sourceMappingURL=index.js.map