import { JBrowsePluginProteinStructureModel } from './model';
export declare function proteinToGenomeMapping({ model, structureSeqPos, }: {
    structureSeqPos: number;
    model: JBrowsePluginProteinStructureModel;
}): readonly [number, number] | undefined;
export declare function clickProteinToGenome({ model, structureSeqPos, }: {
    structureSeqPos: number;
    model: JBrowsePluginProteinStructureModel;
}): Promise<undefined>;
export declare function hoverProteinToGenome({ model, structureSeqPos, }: {
    structureSeqPos?: number;
    model: JBrowsePluginProteinStructureModel;
}): void;
