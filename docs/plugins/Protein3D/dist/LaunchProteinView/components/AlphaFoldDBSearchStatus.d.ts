import React from 'react';
import { Feature } from '@jbrowse/core/util';
export default function AlphaFoldDBSearchStatus({ uniprotId, selectedTranscript, structureSequence, isoformSequences, }: {
    uniprotId?: string;
    selectedTranscript: Feature;
    structureSequence?: string;
    isoformSequences: Record<string, {
        feature: Feature;
        seq: string;
    }>;
}): React.JSX.Element;
