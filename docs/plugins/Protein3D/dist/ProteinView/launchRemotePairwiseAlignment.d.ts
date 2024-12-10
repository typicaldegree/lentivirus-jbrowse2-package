export declare function launchPairwiseAlignment({ algorithm, seq1, seq2, onProgress, }: {
    algorithm: string;
    seq1: string;
    seq2: string;
    onProgress: (arg: string) => void;
}): Promise<{
    pairwiseAlignment: {
        consensus: string;
        alns: [import("clustal-js").Row, import("clustal-js").Row];
    };
}>;
