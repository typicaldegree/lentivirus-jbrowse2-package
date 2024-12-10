import { PluginContext } from 'molstar/lib/mol-plugin/context';
export default function useProteinView({ showControls, }: {
    showControls: boolean;
}): {
    parentRef: import("react").RefObject<HTMLDivElement>;
    error: unknown;
    plugin: PluginContext | undefined;
};
