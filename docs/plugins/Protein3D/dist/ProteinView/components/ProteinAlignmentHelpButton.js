import React, { lazy } from 'react';
import { IconButton } from '@mui/material';
import { getSession } from '@jbrowse/core/util';
// icons
import Help from '@mui/icons-material/Help';
const ProteinAlignmentHelpDialog = lazy(() => import('./ProteinAlignmentHelpDialog'));
export default function ProteinAlignmentHelpButton({ model, }) {
    return (React.createElement(IconButton, { style: { float: 'right' }, onClick: () => {
            getSession(model).queueDialog(handleClose => [
                ProteinAlignmentHelpDialog,
                { handleClose },
            ]);
        } },
        React.createElement(Help, null)));
}
//# sourceMappingURL=ProteinAlignmentHelpButton.js.map