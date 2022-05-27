import { Box, Grid } from "@mui/material";
import React from "react";
import Leftbar from "../../components/leftbar";
import Background from "../../components/background";
import { useRouter } from "next/router";
import Uploads from "../../components/uploads";
import RightLayer from "../../components/rightLayer";


export default function Create() {

    const router = useRouter();
    return (
        <>
            <Leftbar />
            <Box sx={{ padding: '1rem', backgroundColor: 'grey.800', overflowY: 'scroll' }}>
                {router.query.endpoint === 'background' && <Background />}
                {router.query.endpoint === 'uploads' && <Uploads />}
            </Box>
            <RightLayer />
        </>
    )
}