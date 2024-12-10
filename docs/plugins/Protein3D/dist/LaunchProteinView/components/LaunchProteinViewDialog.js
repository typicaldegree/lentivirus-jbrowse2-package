import React, { useState } from 'react';
import { Dialog } from '@jbrowse/core/ui';
import { Tab, Tabs } from '@mui/material';
// locals
import AlphaFoldDBSearch from './AlphaFoldDBSearch';
import UserProvidedStructure from './UserProvidedStructure';
import ManualUniProtIDEntry from './ManualUniProtIDEntry';
import TabPanel from './TabPanel';
export default function LaunchProteinViewDialog({ handleClose, feature, model, }) {
    const [choice, setChoice] = useState(0);
    return (React.createElement(Dialog, { maxWidth: "xl", title: "Launch protein view", open: true, onClose: () => {
            handleClose();
        } },
        React.createElement(Tabs, { value: choice, onChange: (_, val) => {
                setChoice(val);
            } },
            React.createElement(Tab, { value: 0, label: "Automatic UniProt lookup" }),
            React.createElement(Tab, { value: 1, label: "Manual UniProt entry" }),
            React.createElement(Tab, { value: 2, label: "Open file manually" })),
        React.createElement(TabPanel, { value: choice, index: 0 },
            React.createElement(AlphaFoldDBSearch, { model: model, feature: feature, handleClose: handleClose })),
        React.createElement(TabPanel, { value: choice, index: 1 },
            React.createElement(ManualUniProtIDEntry, { model: model, feature: feature, handleClose: handleClose })),
        React.createElement(TabPanel, { value: choice, index: 2 },
            React.createElement(UserProvidedStructure, { model: model, feature: feature, handleClose: handleClose }))));
}
//# sourceMappingURL=LaunchProteinViewDialog.js.map