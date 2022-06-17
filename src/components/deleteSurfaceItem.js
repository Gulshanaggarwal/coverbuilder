import { Menu, MenuItem } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { useContext } from "react";
import { FocusContext } from "../contexts/focusContext";


export default function DeleteSurfaceItem() {

    const { currentText, surfaceTextList, currentEmoji, surfaceEmojiList, focusDispatch } = useContext(FocusContext);

    return (
        <Menu id="delete-menu"
            anchorEl={ }
            open={ }
            onClose={handleClose}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}>
            <MenuItem onClick={() => handleDeleteItem(deletee)} sx={{ gap: '0.5rem' }}>
                <DeleteIcon />
                Delete
            </MenuItem>
        </Menu>
    )
}