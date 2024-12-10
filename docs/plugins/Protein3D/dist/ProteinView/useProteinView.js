import { useState, useEffect, useRef } from 'react';
import { createPluginUI } from 'molstar/lib/mol-plugin-ui';
import { renderReact18 } from 'molstar/lib/mol-plugin-ui/react18';
import { DefaultPluginUISpec } from 'molstar/lib/mol-plugin-ui/spec';
export default function useProteinView({ showControls, }) {
    const parentRef = useRef(null);
    const [plugin, setPlugin] = useState();
    const [error, setError] = useState();
    useEffect(() => {
        let p;
        (async () => {
            try {
                if (!parentRef.current) {
                    return;
                }
                const d = document.createElement('div');
                parentRef.current.append(d);
                p = await createPluginUI({
                    target: d,
                    render: renderReact18,
                    spec: {
                        ...DefaultPluginUISpec(),
                        layout: {
                            initial: {
                                controlsDisplay: 'reactive',
                                showControls,
                            },
                        },
                    },
                });
                await p.initialized;
                setPlugin(p);
            }
            catch (e) {
                console.error(e);
                setError(e);
            }
        })();
        return () => {
            p?.unmount();
        };
    }, [showControls]);
    return { parentRef, error, plugin };
}
//# sourceMappingURL=useProteinView.js.map