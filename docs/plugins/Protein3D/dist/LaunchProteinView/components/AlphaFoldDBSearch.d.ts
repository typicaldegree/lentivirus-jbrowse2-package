import React from 'react';
import { AbstractTrackModel, Feature } from '@jbrowse/core/util';
declare const AlphaFoldDBSearch: ({ feature, model, handleClose, }: {
    feature: Feature;
    model: AbstractTrackModel;
    handleClose: () => void;
}) => React.JSX.Element;
export default AlphaFoldDBSearch;
