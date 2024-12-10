export default function useMyGeneInfo({ id }: {
    id: string;
}): {
    isLoading: boolean;
    uniprotId: string | undefined;
    error: unknown;
};
