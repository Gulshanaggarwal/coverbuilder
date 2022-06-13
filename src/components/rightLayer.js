import { Box } from "@mui/system"
import { FocusContext } from "../contexts/focusContext";
import Surface from "./surface"
import StyleBar from "./SurfaceTextStyle/styleBar"
import { useContext } from "react";
import EmojiStyleBar from "./surfaceEmojiStyle/emojiStyleBar";



export default function RightLayer() {

    const { currentText, focusDispatch, currentEmoji } = useContext(FocusContext);
    return (
        <Box sx={{ backgroundColor: 'grey.200', overflow: 'hidden' }}>
            {currentText && <StyleBar currentText={currentText} focusDispatch={focusDispatch} />}
            {currentEmoji && <EmojiStyleBar currentEmoji={currentEmoji} focusDispatch={focusDispatch} />}
            <Surface />
        </Box>
    )
}