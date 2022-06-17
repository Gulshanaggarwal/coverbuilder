import { useContext } from "react";
import { FocusContext } from "../contexts/focusContext";




export default function useDeleteSurfaceItem() {

    const { deleteItem, focusDispatch } = useContext(FocusContext);

    const handleDeletePrompt = (e, surfaceItem, type) => {
        e.preventDefault();
        const { id } = surfaceItem ? surfaceItem : { id: null };

        if (id && (e.which === 3 || e.button === 2)) {

            focusDispatch({
                type: 'SET_DELETE_ITEM',
                payload: { id, type, anchorEl: e.currentTarget, open: Boolean(e.currentTarget) }
            })
        }



    }

    const closeDeletePrompt = () => {
        focusDispatch({
            type: 'SET_DELETE_ITEM',
            payload: null
        })
    }
    return { handleDeletePrompt, closeDeletePrompt }
}