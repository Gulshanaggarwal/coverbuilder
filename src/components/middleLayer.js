import { Box } from "@mui/system"
import Background from "./background"



export default function MiddleLayer() {
    return (
        <Box sx={{ padding: '1rem', backgroundColor: 'grey.800', overflowY: 'scroll' }}>
            <Background />
        </Box>
    )
}