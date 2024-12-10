export default function useRemoteStructureFileSequence({ url, }: {
    url?: string;
}): {
    error: unknown;
    isLoading: boolean;
    sequences: string[] | undefined;
};
