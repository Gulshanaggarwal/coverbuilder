import { Box, Grid } from "@mui/material";
import Leftbar from "../components/leftbar";
import MiddleLayer from "../components/middleLayer";
import Surface from "../components/surface";


export default function Create() {
    return (
        <Grid container sx={{ flex: '1 1 auto' }}>
            <Grid item xs={1} sx={{ backgroundColor: 'grey.900' }}>
                <Leftbar />
            </Grid>
            <Grid item xs={4}>
                <MiddleLayer />
            </Grid>
            <Grid item xs={7}>
                <Surface />
            </Grid>
        </Grid>
    )
}