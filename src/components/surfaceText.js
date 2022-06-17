import { Rnd } from "react-rnd";
import { Box } from "@mui/system";
import { useContext } from "react";
import { FocusContext } from "../contexts/focusContext";
import useDeleteSurfaceItem from "../hooks/useDeleteSurfaceItem";


export default function SurfaceText({ text }) {

    const { currentText, focusDispatch } = useContext(FocusContext);
    const { handleDeletePrompt } = useDeleteSurfaceItem();

    const handleFocus = () => {
        focusDispatch({
            type: 'SET_FOCUS_TO_TEXT',
            payload: text
        })
    }

    return (
        <Rnd onContextMenu={(e) => handleDeletePrompt(e, currentText, "TEXT")} onClick={handleFocus} onDragStart={handleFocus} bounds="parent" enableResizing={{
            bottomRight: true
        }} style={{ border: currentText && currentText.id === text.id ? '2px dashed blue' : 'none' }}>
            <Box contentEditable={true} suppressContentEditableWarning={true} sx={{ outline: 'none', width: '100%', height: '100%', fontSize: text.size, fontFamily: `"${text.font}",${text.family}`, color: text.color }}>
                {text.text}
            </Box>
        </Rnd>
    )
}