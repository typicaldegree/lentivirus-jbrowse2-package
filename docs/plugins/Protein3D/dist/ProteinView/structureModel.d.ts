import { Region as IRegion } from '@jbrowse/core/util/types';
import { Instance } from 'mobx-state-tree';
import { SimpleFeatureSerialized } from '@jbrowse/core/util';
import { LinearGenomeViewModel } from '@jbrowse/plugin-linear-genome-view';
import { PairwiseAlignment } from '../mappings';
import { PluginContext } from 'molstar/lib/mol-plugin/context';
type LGV = LinearGenomeViewModel;
type MaybeLGV = LGV | undefined;
type MaybePairwiseAlignment = PairwiseAlignment | undefined;
type StructureModel = Awaited<ReturnType<PluginContext['builders']['structure']['createModel']>>;
declare const Structure: import("mobx-state-tree").IModelType<{
    /**
     * #property
     */
    url: import("mobx-state-tree").IMaybe<import("mobx-state-tree").ISimpleType<string>>;
    /**
     * #property
     */
    data: import("mobx-state-tree").IMaybe<import("mobx-state-tree").ISimpleType<string>>;
    /**
     * #property
     */
    connectedViewId: import("mobx-state-tree").IMaybe<import("mobx-state-tree").ISimpleType<string>>;
    /**
     * #property
     */
    pairwiseAlignment: import("mobx-state-tree").IType<MaybePairwiseAlignment, MaybePairwiseAlignment, MaybePairwiseAlignment>;
    /**
     * #property
     */
    feature: import("mobx-state-tree").IType<SimpleFeatureSerialized | undefined, SimpleFeatureSerialized | undefined, SimpleFeatureSerialized | undefined>;
    /**
     * #property
     */
    userProvidedTranscriptSequence: import("mobx-state-tree").ISimpleType<string>;
}, {
    /**
     * #volatile
     */
    model: StructureModel | undefined;
    /**
     * #volatile
     */
    clickGenomeHighlights: IRegion[];
    /**
     * #volatile
     */
    hoverGenomeHighlights: IRegion[];
    /**
     * #volatile
     */
    clickPosition: {
        structureSeqPos: number;
        code: string;
        chain: string;
    } | undefined;
    /**
     * #volatile
     */
    hoverPosition: {
        structureSeqPos?: number;
        code?: string;
        chain?: string;
    } | undefined;
    /**
     * #volatile
     */
    pairwiseAlignmentStatus: string;
    /**
     * #volatile
     */
    structureSequences: string[] | undefined;
} & {
    /**
     * #action
     */
    setModel(model: StructureModel): void;
    setSequences(str?: string[]): void;
} & {
    /**
     * #getter
     */
    readonly connectedView: MaybeLGV;
} & {
    /**
     * #action
     */
    setClickedPosition(arg?: {
        structureSeqPos: number;
        code: string;
        chain: string;
    }): void;
    /**
     * #action
     */
    setClickGenomeHighlights(r: IRegion[]): void;
    /**
     * #action
     */
    clearClickGenomeHighlights(): void;
    /**
     * #action
     */
    setHoverGenomeHighlights(r: IRegion[]): void;
    /**
     * #action
     */
    clearHoverGenomeHighlights(): void;
    /**
     * #action
     */
    setHoveredPosition(arg?: {
        structureSeqPos?: number;
        chain?: string;
        code?: string;
    }): void;
    /**
     * #action
     */
    setAlignment(r?: PairwiseAlignment): void;
    /**
     * #action
     */
    setAlignmentStatus(str: string): void;
} & {
    /**
     * #getter
     */
    readonly structureSeqToTranscriptSeqPosition: Record<string, number> | undefined;
    /**
     * #getter
     */
    readonly transcriptSeqToStructureSeqPosition: Record<string, number> | undefined;
    /**
     * #getter
     */
    readonly structurePositionToAlignmentMap: Record<string, number> | undefined;
    /**
     * #getter
     */
    readonly transcriptPositionToAlignmentMap: Record<string, number> | undefined;
    /**
     * #getter
     */
    readonly pairwiseAlignmentToTranscriptPosition: Record<number, number> | undefined;
    /**
     * #getter
     */
    readonly pairwiseAlignmentToStructurePosition: Record<number, number> | undefined;
    /**
     * #getter
     */
    readonly clickString: string;
    /**
     * #getter
     */
    readonly hoverString: string;
    /**
     * #getter
     */
    readonly genomeToTranscriptSeqMapping: {
        g2p: Record<number, number | undefined>;
        p2g: Record<number, number | undefined>;
        refName: string;
        strand: number;
    } | undefined;
    /**
     * #getter
     */
    readonly structureSeqHoverPos: number | undefined;
    /**
     * #getter
     */
    readonly exactMatch: boolean;
    readonly zoomToBaseLevel: boolean;
    readonly showHighlight: boolean;
    readonly molstarPluginContext: PluginContext | undefined;
} & {
    afterAttach(): void;
}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>;
export default Structure;
export type JBrowsePluginProteinStructureStateModel = typeof Structure;
export type JBrowsePluginProteinStructureModel = Instance<JBrowsePluginProteinStructureStateModel>;
