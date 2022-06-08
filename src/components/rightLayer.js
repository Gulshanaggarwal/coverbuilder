import { Box } from "@mui/system"
import { FocusContext } from "../contexts/focusContext";
import Surface from "./surface"
import StyleBar from "./SurfaceTextStyle/styleBar"
import { useContext } from "react";



export default function RightLayer() {

    const [currentText, , focusDispatch] = useContext(FocusContext);
    return (
        <Box sx={{ backgroundColor: 'grey.200', overflow: 'hidden' }}>
            {currentText && <StyleBar currentText={currentText} focusDispatch={focusDispatch} />}
            <Surface />
        </Box>
    )
}