import { Box } from "@mui/system"
import Surface from "./surface"
import StyleBar from "./SurfaceTextStyle/styleBar"



export default function RightLayer() {
    return (
        <Box sx={{ backgroundColor: 'grey.200', overflow: 'hidden' }}>
            <StyleBar />
            <Surface />
        </Box>
    )
}