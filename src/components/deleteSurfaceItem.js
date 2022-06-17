import { Menu, MenuItem } from "@mui/material";
import DeleteIcon from '@mui/icons-material/Delete';
import { useContext } from "react";
import { FocusContext } from "../contexts/focusContext";
import useDeleteSurfaceItem from "../hooks/useDeleteSurfaceItem";


export default function DeleteSurfaceItem() {

    const { deleteItem, focusDispatch } = useContext(FocusContext);
    const { closeDeletePrompt } = useDeleteSurfaceItem();

    const handleDeleteItem = () => {
        const { id, type } = deleteItem;
        if (type === "TEXT") {
            focusDispatch({
                type: 'DELETE_TEXT_FROM_SURFACE',
                payload: { id }
            })
        }
        else if (type === "EMOJI") {
            focusDispatch({
                type: 'DELETE_EMOJI_FROM_SURFACE',
                payload: { id }
            })
        }
        //hide delete prompt
        closeDeletePrompt();


    }

    return deleteItem && (
        <Menu
            id="delete-menu"
            open={deleteItem.open}
            anchorEl={deleteItem.anchorEl}
            onClose={closeDeletePrompt}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}>
            <MenuItem onClick={handleDeleteItem} sx={{ gap: '0.5rem', }}>
                Delete
                <DeleteIcon fontSize="small" />
            </MenuItem>
        </Menu>
    )
}