export default function useLocalStructureFileSequence({ file, }: {
    file?: File;
}): {
    error: unknown;
    isLoading: boolean;
    sequences: string[] | undefined;
};
