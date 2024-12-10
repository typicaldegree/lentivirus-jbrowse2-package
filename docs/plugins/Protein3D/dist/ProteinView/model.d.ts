import { Instance } from 'mobx-state-tree';
import { PluginContext } from 'molstar/lib/mol-plugin/context';
import Structure from './structureModel';
/**
 * #stateModel Protein3dViewPlugin
 * extends
 * - BaseViewModel
 */
declare function stateModelFactory(): import("mobx-state-tree").IModelType<{
    id: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
    displayName: import("mobx-state-tree").IMaybe<import("mobx-state-tree").ISimpleType<string>>;
    minimized: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
} & {
    id: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
    type: import("mobx-state-tree").ISimpleType<"ProteinView">;
    structures: import("mobx-state-tree").IArrayType<import("mobx-state-tree").IModelType<{
        url: import("mobx-state-tree").IMaybe<import("mobx-state-tree").ISimpleType<string>>;
        data: import("mobx-state-tree").IMaybe<import("mobx-state-tree").ISimpleType<string>>;
        connectedViewId: import("mobx-state-tree").IMaybe<import("mobx-state-tree").ISimpleType<string>>;
        pairwiseAlignment: import("mobx-state-tree").IType<import("../mappings").PairwiseAlignment | undefined, import("../mappings").PairwiseAlignment | undefined, import("../mappings").PairwiseAlignment | undefined>;
        feature: import("mobx-state-tree").IType<import("@jbrowse/core/util").SimpleFeatureSerialized | undefined, import("@jbrowse/core/util").SimpleFeatureSerialized | undefined, import("@jbrowse/core/util").SimpleFeatureSerialized | undefined>;
        userProvidedTranscriptSequence: import("mobx-state-tree").ISimpleType<string>;
    }, {
        model: import("molstar/lib/mol-state").StateObjectSelector<import("molstar/lib/mol-plugin-state/objects").PluginStateObject.Molecule.Model, import("molstar/lib/mol-state").StateTransformer<import("molstar/lib/mol-state").StateObject<any, import("molstar/lib/mol-state").StateObject.Type<any>>, import("molstar/lib/mol-state").StateObject<any, import("molstar/lib/mol-state").StateObject.Type<any>>, any>> | undefined;
        clickGenomeHighlights: import("@jbrowse/core/util").Region[];
        hoverGenomeHighlights: import("@jbrowse/core/util").Region[];
        clickPosition: {
            structureSeqPos: number;
            code: string;
            chain: string;
        } | undefined;
        hoverPosition: {
            structureSeqPos?: number;
            code?: string;
            chain?: string;
        } | undefined;
        pairwiseAlignmentStatus: string;
        structureSequences: string[] | undefined;
    } & {
        setModel(model: import("molstar/lib/mol-state").StateObjectSelector<import("molstar/lib/mol-plugin-state/objects").PluginStateObject.Molecule.Model, import("molstar/lib/mol-state").StateTransformer<import("molstar/lib/mol-state").StateObject<any, import("molstar/lib/mol-state").StateObject.Type<any>>, import("molstar/lib/mol-state").StateObject<any, import("molstar/lib/mol-state").StateObject.Type<any>>, any>>): void;
        setSequences(str?: string[]): void;
    } & {
        readonly connectedView: ({
            id: string;
            displayName: string | undefined;
            minimized: boolean;
            type: string;
            offsetPx: number;
            bpPerPx: number;
            displayedRegions: import("@jbrowse/core/util").Region[] & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IType<import("@jbrowse/core/util").Region[], import("@jbrowse/core/util").Region[], import("@jbrowse/core/util").Region[]>, [undefined]>>;
            tracks: import("mobx-state-tree").IMSTArray<import("mobx-state-tree").IAnyType> & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IArrayType<import("mobx-state-tree").IAnyType>>;
            hideHeader: boolean;
            hideHeaderOverview: boolean;
            hideNoTracksActive: boolean;
            trackSelectorType: string;
            showCenterLine: boolean;
            showCytobandsSetting: boolean;
            trackLabels: string;
            showGridlines: boolean;
            highlight: import("mobx-state-tree").IMSTArray<import("mobx-state-tree").IType<import("@jbrowse/plugin-linear-genome-view/dist/LinearGenomeView").HighlightType, import("@jbrowse/plugin-linear-genome-view/dist/LinearGenomeView").HighlightType, import("@jbrowse/plugin-linear-genome-view/dist/LinearGenomeView").HighlightType>> & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IArrayType<import("mobx-state-tree").IType<import("@jbrowse/plugin-linear-genome-view/dist/LinearGenomeView").HighlightType, import("@jbrowse/plugin-linear-genome-view/dist/LinearGenomeView").HighlightType, import("@jbrowse/plugin-linear-genome-view/dist/LinearGenomeView").HighlightType>>, [undefined]>>;
            colorByCDS: boolean;
            showTrackOutlines: boolean;
        } & import("mobx-state-tree/dist/internal").NonEmptyObject & {
            width: number;
        } & {
            menuItems(): import("@jbrowse/core/ui").MenuItem[];
        } & {
            setDisplayName(name: string): void;
            setWidth(newWidth: number): void;
            setMinimized(flag: boolean): void;
        } & {
            volatileWidth: number | undefined;
            minimumBlockWidth: number;
            draggingTrackId: undefined | string;
            volatileError: unknown;
            afterDisplayedRegionsSetCallbacks: (() => void)[];
            scaleFactor: number;
            trackRefs: Record<string, HTMLDivElement>;
            coarseDynamicBlocks: import("@jbrowse/core/util/blockTypes").BaseBlock[];
            coarseTotalBp: number;
            leftOffset: undefined | import("@jbrowse/plugin-linear-genome-view/dist/LinearGenomeView").BpOffset;
            rightOffset: undefined | import("@jbrowse/plugin-linear-genome-view/dist/LinearGenomeView").BpOffset;
        } & {
            readonly trackLabelsSetting: any;
            readonly width: number;
            readonly interRegionPaddingWidth: number;
            readonly assemblyNames: string[];
        } & {
            scaleBarDisplayPrefix(): string | undefined;
            MiniControlsComponent(): React.FC<any>;
            HeaderComponent(): React.FC<any>;
            readonly assemblyErrors: string;
            readonly assembliesInitialized: boolean;
            readonly initialized: boolean;
            readonly hasDisplayedRegions: boolean;
            readonly scaleBarHeight: number;
            readonly headerHeight: number;
            readonly trackHeights: number;
            readonly trackHeightsWithResizeHandles: number;
            readonly height: number;
            readonly totalBp: number;
            readonly maxBpPerPx: number;
            readonly minBpPerPx: number;
            readonly error: unknown;
            readonly maxOffset: number;
            readonly minOffset: number;
            readonly displayedRegionsTotalPx: number;
            renderProps(): any;
            searchScope(assemblyName: string): {
                assemblyName: string;
                includeAggregateIndexes: boolean;
                tracks: import("mobx-state-tree").IMSTArray<import("mobx-state-tree").IAnyType> & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IArrayType<import("mobx-state-tree").IAnyType>>;
            };
            getTrack(id: string): any;
            rankSearchResults(results: import("@jbrowse/core/TextSearch/BaseResults").default[]): import("@jbrowse/core/TextSearch/BaseResults").default[];
            rewriteOnClicks(trackType: string, viewMenuActions: import("@jbrowse/core/ui").MenuItem[]): void;
            readonly trackTypeActions: Map<string, import("@jbrowse/core/ui").MenuItem[]>;
        } & {
            setShowTrackOutlines(arg: boolean): void;
            setColorByCDS(flag: boolean): void;
            setShowCytobands(flag: boolean): void;
            setWidth(newWidth: number): void;
            setError(error: unknown): void;
            setHideHeader(b: boolean): void;
            setHideHeaderOverview(b: boolean): void;
            setHideNoTracksActive(b: boolean): void;
            setShowGridlines(b: boolean): void;
            addToHighlights(highlight: import("@jbrowse/plugin-linear-genome-view/dist/LinearGenomeView").HighlightType): void;
            setHighlight(highlight?: import("@jbrowse/plugin-linear-genome-view/dist/LinearGenomeView").HighlightType[]): void;
            removeHighlight(highlight: import("@jbrowse/plugin-linear-genome-view/dist/LinearGenomeView").HighlightType): void;
            scrollTo(offsetPx: number): number;
            zoomTo(bpPerPx: number, offset?: number, centerAtOffset?: boolean): number;
            setOffsets(left?: import("@jbrowse/plugin-linear-genome-view/dist/LinearGenomeView").BpOffset, right?: import("@jbrowse/plugin-linear-genome-view/dist/LinearGenomeView").BpOffset): void;
            setSearchResults(searchResults: import("@jbrowse/core/TextSearch/BaseResults").default[], searchQuery: string, assemblyName?: string): void;
            setNewView(bpPerPx: number, offsetPx: number): void;
            horizontallyFlip(): void;
            showTrack(trackId: string, initialSnapshot?: {}, displayInitialSnapshot?: {}): any;
            hideTrack(trackId: string): number;
        } & {
            moveTrackDown(id: string): void;
            moveTrackUp(id: string): void;
            moveTrackToTop(id: string): void;
            moveTrackToBottom(id: string): void;
            moveTrack(movingId: string, targetId: string): void;
            toggleTrack(trackId: string): boolean;
            setTrackLabels(setting: "overlapping" | "offset" | "hidden"): void;
            setShowCenterLine(b: boolean): void;
            setDisplayedRegions(regions: import("@jbrowse/core/util").Region[]): void;
            activateTrackSelector(): import("@jbrowse/core/util").Widget;
            getSelectedRegions(leftOffset?: import("@jbrowse/plugin-linear-genome-view/dist/LinearGenomeView").BpOffset, rightOffset?: import("@jbrowse/plugin-linear-genome-view/dist/LinearGenomeView").BpOffset): {
                start: number;
                end: number;
                type: string;
                regionNumber?: number;
                reversed?: boolean;
                refName: string;
                assemblyName: string;
                key: string;
                offsetPx: number;
                widthPx: number;
                variant?: string;
                isLeftEndOfDisplayedRegion?: boolean;
            }[];
            afterDisplayedRegionsSet(cb: () => void): void;
            horizontalScroll(distance: number): number;
            center(): void;
            showAllRegions(): void;
            showAllRegionsInAssembly(assemblyName?: string): void;
            setDraggingTrackId(idx?: string): void;
            setScaleFactor(factor: number): void;
            clearView(): void;
            exportSvg(opts?: import("@jbrowse/plugin-linear-genome-view/dist/LinearGenomeView").ExportSvgOptions): Promise<void>;
        } & {
            slide: (viewWidths: number) => void;
        } & {
            zoom: (targetBpPerPx: number) => void;
        } & {
            readonly canShowCytobands: boolean;
            readonly showCytobands: boolean;
            readonly anyCytobandsExist: boolean;
            readonly cytobandOffset: number;
        } & {
            menuItems(): import("@jbrowse/core/ui").MenuItem[];
        } & {
            readonly staticBlocks: import("@jbrowse/core/util/blockTypes").BlockSet;
            readonly dynamicBlocks: import("@jbrowse/core/util/blockTypes").BlockSet;
            readonly roundedDynamicBlocks: import("@jbrowse/core/util/blockTypes").BaseBlock[];
            readonly visibleLocStrings: string;
            readonly coarseVisibleLocStrings: string;
        } & {
            setCoarseDynamicBlocks(blocks: import("@jbrowse/core/util/blockTypes").BlockSet): void;
            afterAttach(): void;
        } & {
            moveTo(start?: import("@jbrowse/plugin-linear-genome-view/dist/LinearGenomeView").BpOffset, end?: import("@jbrowse/plugin-linear-genome-view/dist/LinearGenomeView").BpOffset): void;
            navToLocString(input: string, optAssemblyName?: string): Promise<void>;
            navToSearchString({ input, assembly, }: {
                input: string;
                assembly: import("@jbrowse/core/assemblyManager/assembly").Assembly;
            }): Promise<void>;
            navToLocations(parsedLocStrings: import("@jbrowse/core/util").ParsedLocString[], assemblyName?: string): Promise<void>;
            navTo(query: import("@jbrowse/plugin-linear-genome-view/dist/LinearGenomeView").NavLocation): void;
            navToMultiple(locations: import("@jbrowse/plugin-linear-genome-view/dist/LinearGenomeView").NavLocation[]): void;
        } & {
            rubberBandMenuItems(): import("@jbrowse/core/ui").MenuItem[];
            bpToPx({ refName, coord, regionNumber, }: {
                refName: string;
                coord: number;
                regionNumber?: number;
            }): {
                index: number;
                offsetPx: number;
            } | undefined;
            centerAt(coord: number, refName: string, regionNumber?: number): void;
            pxToBp(px: number): {
                coord: number;
                index: number;
                refName: string;
                oob: boolean;
                assemblyName: string;
                offset: number;
                start: number;
                end: number;
                reversed?: boolean;
            };
            readonly centerLineInfo: {
                coord: number;
                index: number;
                refName: string;
                oob: boolean;
                assemblyName: string;
                offset: number;
                start: number;
                end: number;
                reversed?: boolean;
            } | undefined;
        } & {
            afterCreate(): void;
        } & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IModelType<{
            id: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            displayName: import("mobx-state-tree").IMaybe<import("mobx-state-tree").ISimpleType<string>>;
            minimized: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
        } & {
            id: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            type: import("mobx-state-tree").IType<string | undefined, string, string>;
            offsetPx: import("mobx-state-tree").IType<number | undefined, number, number>;
            bpPerPx: import("mobx-state-tree").IType<number | undefined, number, number>;
            displayedRegions: import("mobx-state-tree" /**
             * #action
             */).IOptionalIType<import("mobx-state-tree").IType<import("@jbrowse/core/util").Region[], import("@jbrowse/core/util").Region[], import("@jbrowse/core/util").Region[]>, [undefined]>;
            tracks: import("mobx-state-tree").IArrayType<import("mobx-state-tree").IAnyType>;
            hideHeader: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
            hideHeaderOverview: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
            hideNoTracksActive: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
            trackSelectorType: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            showCenterLine: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
            showCytobandsSetting: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
            trackLabels: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            showGridlines: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
            highlight: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IArrayType<import("mobx-state-tree").IType<import("@jbrowse/plugin-linear-genome-view/dist/LinearGenomeView").HighlightType, import("@jbrowse/plugin-linear-genome-view/dist/LinearGenomeView").HighlightType, import("@jbrowse/plugin-linear-genome-view/dist/LinearGenomeView").HighlightType>>, [undefined]>;
            colorByCDS: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
            showTrackOutlines: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
        }, {
            width: number;
        } & {
            menuItems(): import("@jbrowse/core/ui").MenuItem[];
        } & {
            setDisplayName(name: string): void;
            setWidth(newWidth: number): void;
            setMinimized(flag: boolean): void;
        } & {
            volatileWidth: number | undefined;
            minimumBlockWidth: number;
            draggingTrackId: undefined | string;
            volatileError: unknown;
            afterDisplayedRegionsSetCallbacks: (() => void)[];
            scaleFactor: number;
            trackRefs: Record<string, HTMLDivElement>;
            coarseDynamicBlocks: import("@jbrowse/core/util/blockTypes").BaseBlock[];
            coarseTotalBp: number;
            leftOffset: undefined | import("@jbrowse/plugin-linear-genome-view/dist/LinearGenomeView").BpOffset;
            rightOffset: undefined | import("@jbrowse/plugin-linear-genome-view/dist/LinearGenomeView").BpOffset;
        } & {
            readonly trackLabelsSetting: any;
            readonly width: number;
            readonly interRegionPaddingWidth: number;
            readonly assemblyNames: string[];
        } & {
            scaleBarDisplayPrefix(): string | undefined;
            MiniControlsComponent(): React.FC<any>;
            HeaderComponent(): React.FC<any>;
            readonly assemblyErrors: string;
            readonly assembliesInitialized: boolean;
            readonly initialized: boolean;
            readonly hasDisplayedRegions: boolean;
            readonly scaleBarHeight: number;
            readonly headerHeight: number;
            readonly trackHeights: number;
            readonly trackHeightsWithResizeHandles: number;
            readonly height: number;
            readonly totalBp: number;
            readonly maxBpPerPx: number;
            readonly minBpPerPx: number;
            readonly error: unknown;
            readonly maxOffset: number;
            readonly minOffset: number;
            readonly displayedRegionsTotalPx: number;
            renderProps(): any;
            searchScope(assemblyName: string): {
                assemblyName: string;
                includeAggregateIndexes: boolean;
                tracks: import("mobx-state-tree").IMSTArray<import("mobx-state-tree").IAnyType> & import("mobx-state-tree").IStateTreeNode<import("mobx-state-tree").IArrayType<import("mobx-state-tree").IAnyType>>;
            };
            getTrack(id: string): any;
            rankSearchResults(results: import("@jbrowse/core/TextSearch/BaseResults").default[]): import("@jbrowse/core/TextSearch/BaseResults").default[];
            rewriteOnClicks(trackType: string, viewMenuActions: import("@jbrowse/core/ui").MenuItem[]): void;
            readonly trackTypeActions: Map<string, import("@jbrowse/core/ui").MenuItem[]>;
        } & {
            setShowTrackOutlines(arg: boolean): void;
            setColorByCDS(flag: boolean): void;
            setShowCytobands(flag: boolean): void;
            setWidth(newWidth: number): void;
            setError(error: unknown): void;
            setHideHeader(b: boolean): void;
            setHideHeaderOverview(b: boolean): void;
            setHideNoTracksActive(b: boolean): void;
            setShowGridlines(b: boolean): void;
            addToHighlights(highlight: import("@jbrowse/plugin-linear-genome-view/dist/LinearGenomeView").HighlightType): void;
            setHighlight(highlight?: import("@jbrowse/plugin-linear-genome-view/dist/LinearGenomeView").HighlightType[]): void;
            removeHighlight(highlight: import("@jbrowse/plugin-linear-genome-view/dist/LinearGenomeView").HighlightType): void;
            scrollTo(offsetPx: number): number;
            zoomTo(bpPerPx: number, offset?: number, centerAtOffset?: boolean): number;
            setOffsets(left?: import("@jbrowse/plugin-linear-genome-view/dist/LinearGenomeView").BpOffset, right?: import("@jbrowse/plugin-linear-genome-view/dist/LinearGenomeView").BpOffset): void;
            setSearchResults(searchResults: import("@jbrowse/core/TextSearch/BaseResults").default[], searchQuery: string, assemblyName?: string): void;
            setNewView(bpPerPx: number, offsetPx: number): void;
            horizontallyFlip(): void;
            showTrack(trackId: string, initialSnapshot?: {}, displayInitialSnapshot?: {}): any;
            hideTrack(trackId: string): number;
        } & {
            moveTrackDown(id: string): void;
            moveTrackUp(id: string): void;
            moveTrackToTop(id: string): void;
            moveTrackToBottom(id: string): void;
            moveTrack(movingId: string, targetId: string): void;
            toggleTrack(trackId: string): boolean;
            setTrackLabels(setting: "overlapping" | "offset" | "hidden"): void;
            setShowCenterLine(b: boolean): void;
            setDisplayedRegions(regions: import("@jbrowse/core/util").Region[]): void;
            activateTrackSelector(): import("@jbrowse/core/util").Widget;
            getSelectedRegions(leftOffset?: import("@jbrowse/plugin-linear-genome-view/dist/LinearGenomeView").BpOffset, rightOffset?: import("@jbrowse/plugin-linear-genome-view/dist/LinearGenomeView").BpOffset): {
                start: number;
                end: number;
                type: string;
                regionNumber?: number;
                reversed?: boolean;
                refName: string;
                assemblyName: string;
                key: string;
                offsetPx: number;
                widthPx: number;
                variant?: string;
                isLeftEndOfDisplayedRegion?: boolean;
            }[];
            afterDisplayedRegionsSet(cb: () => void): void;
            horizontalScroll(distance: number): number;
            center(): void;
            showAllRegions(): void;
            showAllRegionsInAssembly(assemblyName?: string): void;
            setDraggingTrackId(idx?: string): void;
            setScaleFactor(factor: number): void;
            clearView(): void;
            exportSvg(opts?: import("@jbrowse/plugin-linear-genome-view/dist/LinearGenomeView").ExportSvgOptions): Promise<void>;
        } & {
            slide: (viewWidths: number) => void;
        } & {
            zoom: (targetBpPerPx: number) => void;
        } & {
            readonly canShowCytobands: boolean;
            readonly showCytobands: boolean;
            readonly anyCytobandsExist: boolean;
            readonly cytobandOffset: number;
        } & {
            menuItems(): import("@jbrowse/core/ui").MenuItem[];
        } & {
            readonly staticBlocks: import("@jbrowse/core/util/blockTypes").BlockSet;
            readonly dynamicBlocks: import("@jbrowse/core/util/blockTypes").BlockSet;
            readonly roundedDynamicBlocks: import("@jbrowse/core/util/blockTypes").BaseBlock[];
            readonly visibleLocStrings: string;
            readonly coarseVisibleLocStrings: string;
        } & {
            setCoarseDynamicBlocks(blocks: import("@jbrowse/core/util/blockTypes").BlockSet): void;
            afterAttach(): void;
        } & {
            moveTo(start?: import("@jbrowse/plugin-linear-genome-view/dist/LinearGenomeView").BpOffset, end?: import("@jbrowse/plugin-linear-genome-view/dist/LinearGenomeView").BpOffset): void;
            navToLocString(input: string, optAssemblyName?: string): Promise<void>;
            navToSearchString({ input, assembly, }: {
                input: string;
                assembly: import("@jbrowse/core/assemblyManager/assembly").Assembly;
            }): Promise<void>;
            navToLocations(parsedLocStrings: import("@jbrowse/core/util").ParsedLocString[], assemblyName?: string): Promise<void>;
            navTo(query: import("@jbrowse/plugin-linear-genome-view/dist/LinearGenomeView").NavLocation): void;
            navToMultiple(locations: import("@jbrowse/plugin-linear-genome-view/dist/LinearGenomeView").NavLocation[]): void;
        } & {
            rubberBandMenuItems(): import("@jbrowse/core/ui").MenuItem[];
            bpToPx({ refName, coord, regionNumber, }: {
                refName: string;
                coord: number;
                regionNumber?: number;
            }): {
                index: number;
                offsetPx: number;
            } | undefined;
            centerAt(coord: number, refName: string, regionNumber?: number): void;
            pxToBp(px: number): {
                coord: number;
                index: number;
                refName: string;
                oob: boolean;
                assemblyName: string;
                offset: number;
                start: number;
                end: number;
                reversed?: boolean;
            };
            readonly centerLineInfo: {
                coord: number;
                index: number;
                refName: string;
                oob: boolean;
                assemblyName: string;
                offset: number;
                start: number;
                end: number;
                reversed?: boolean;
            } | undefined;
        } & {
            afterCreate(): void;
        }, import("mobx-state-tree").ModelCreationType<import("mobx-state-tree/dist/internal").ExtractCFromProps<{
            id: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            displayName: import("mobx-state-tree").IMaybe<import("mobx-state-tree").ISimpleType<string>>;
            minimized: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
        } & {
            id: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            type: import("mobx-state-tree").IType<string | undefined, string, string>;
            offsetPx: import("mobx-state-tree").IType<number | undefined, number, number>;
            bpPerPx: import("mobx-state-tree").IType<number | undefined, number, number>;
            displayedRegions: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IType<import("@jbrowse/core/util").Region[], import("@jbrowse/core/util").Region[], import("@jbrowse/core/util").Region[]>, [undefined]>;
            tracks: import("mobx-state-tree").IArrayType<import("mobx-state-tree").IAnyType>;
            hideHeader: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
            hideHeaderOverview: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
            hideNoTracksActive: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
            trackSelectorType: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            showCenterLine: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
            showCytobandsSetting: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
            trackLabels: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<string>, [undefined]>;
            showGridlines: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
            highlight: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").IArrayType<import("mobx-state-tree").IType<import("@jbrowse/plugin-linear-genome-view/dist/LinearGenomeView").HighlightType, import("@jbrowse/plugin-linear-genome-view/dist/LinearGenomeView").HighlightType, import("@jbrowse/plugin-linear-genome-view/dist/LinearGenomeView").HighlightType>>, [undefined]>;
            colorByCDS: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
            showTrackOutlines: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<boolean>, [undefined]>;
        }>>, import("mobx-state-tree")._NotCustomized>>) | undefined;
    } & {
        setClickedPosition(arg?: {
            structureSeqPos: number;
            code: string;
            chain: string;
        }): void;
        setClickGenomeHighlights(r: import("@jbrowse/core/util").Region[]): void;
        clearClickGenomeHighlights(): void;
        setHoverGenomeHighlights(r: import("@jbrowse/core/util").Region[]): void;
        clearHoverGenomeHighlights(): void;
        setHoveredPosition(arg?: {
            structureSeqPos?: number;
            chain?: string;
            code?: string;
        }): void;
        setAlignment(r?: import("../mappings").PairwiseAlignment): void;
        setAlignmentStatus(str: string): void;
    } & {
        readonly structureSeqToTranscriptSeqPosition: Record<string, number> | undefined;
        readonly transcriptSeqToStructureSeqPosition: Record<string, number> | undefined;
        readonly structurePositionToAlignmentMap: Record<string, number> | undefined;
        readonly transcriptPositionToAlignmentMap: Record<string, number> | undefined;
        readonly pairwiseAlignmentToTranscriptPosition: Record<number, number> | undefined;
        readonly pairwiseAlignmentToStructurePosition: Record<number, number> | undefined;
        readonly clickString: string;
        readonly hoverString: string;
        readonly genomeToTranscriptSeqMapping: {
            g2p: Record<number, number | undefined>;
            p2g: Record<number, number | undefined>;
            refName: string;
            strand: number;
        } | undefined;
        readonly structureSeqHoverPos: number | undefined;
        readonly exactMatch: boolean;
        readonly zoomToBaseLevel: boolean;
        readonly showHighlight: boolean;
        readonly molstarPluginContext: PluginContext | undefined;
    } & {
        afterAttach(): void;
    }, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>>;
    showControls: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
    height: import("mobx-state-tree").IOptionalIType<import("mobx-state-tree").ISimpleType<number>, [undefined]>;
    showHighlight: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
    zoomToBaseLevel: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
    showAlignment: import("mobx-state-tree").IType<boolean | undefined, boolean, boolean>;
}, {
    width: number;
} & {
    menuItems(): import("@jbrowse/core/ui").MenuItem[];
} & {
    setDisplayName(name: string): void;
    setWidth(newWidth: number): void;
    setMinimized(flag: boolean): void;
} & {
    /**
     * #volatile
     */
    progress: string;
    /**
     * #volatile
     */
    error: unknown;
    /**
     * #volatile
     */
    molstarPluginContext: PluginContext | undefined;
} & {
    /**
     * #action
     */
    setHeight(n: number): number;
    /**
     * #action
     */
    setShowAlignment(f: boolean): void;
    /**
     * #action
     */
    setShowControls(arg: boolean): void;
    /**
     * #action
     */
    setError(e: unknown): void;
    /**
     * #action
     */
    setShowHighlight(arg: boolean): void;
    /**
     * #action
     */
    setZoomToBaseLevel(arg: boolean): void;
    /**
     * #action
     */
    setMolstarPluginContext(p?: PluginContext): void;
} & {
    afterAttach(): void;
}, import("mobx-state-tree")._NotCustomized, import("mobx-state-tree")._NotCustomized>;
export default stateModelFactory;
export type JBrowsePluginProteinViewStateModel = ReturnType<typeof stateModelFactory>;
export type JBrowsePluginProteinViewModel = Instance<JBrowsePluginProteinViewStateModel>;
export type JBrowsePluginProteinStructureStateModel = typeof Structure;
export type JBrowsePluginProteinStructureModel = Instance<JBrowsePluginProteinStructureStateModel>;
