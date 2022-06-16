import { Rnd } from "react-rnd";
import { Box } from "@mui/system";
import { useContext } from "react";
import { FocusContext } from "../contexts/focusContext";


export default function SurfaceText({ text }) {

    const { currentText, focusDispatch } = useContext(FocusContext);
    console.log(currentText);

    const handleFocus = () => {
        focusDispatch({
            type: 'SET_FOCUS_TO_TEXT',
            payload: text
        })
    }

    return (
        <Rnd onDragStart={handleFocus} bounds="parent" enableResizing={{
            bottomRight: true
        }} style={{ border: currentText && currentText.id === text.id ? '2px solid blue' : 'none' }}>
            <Box onClick={handleFocus} sx={{ width: '100%', height: '100%', fontSize: text.size, fontFamily: `"${text.font}",${text.family}`, color: text.color }}>
                {text.text}
            </Box>
        </Rnd>
    )
}