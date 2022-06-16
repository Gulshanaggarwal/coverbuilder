import { Rnd } from "react-rnd";
import { Box } from "@mui/system";
import { FocusContext } from "../contexts/focusContext";
import { useContext } from "react";


export default function SurfaceEmoji({ emoji }) {

    const { currentEmoji, currentText, focusDispatch } = useContext(FocusContext);


    const handleFocus = () => {

        // set focus to emoji

        focusDispatch({
            type: "SET_FOCUS_TO_EMOJI",
            payload: emoji
        })

    }
    console.log(currentEmoji);
    return (
        <Rnd onDragStart={handleFocus} bounds="parent" enableResizing={false} style={{ border: currentEmoji && currentEmoji.id === emoji.id ? '2px solid blue' : 'none', }} onResize={(e, direction, ref) => {
        }}>
            <Box sx={{ width: '100%', height: '100%', fontSize: emoji.size }} onClick={handleFocus}>
                {emoji.character}
            </Box>
        </Rnd>
    )
}