import { Box } from "@mui/system";
import { CircularProgress } from "@mui/material";



export default function CircularLoader() {
    return (
        <Box sx={{ display: 'flex', justifyContent: 'center', padding: '2rem 0' }}><CircularProgress sx={{ color: 'common.white' }} /></Box>
    )

}