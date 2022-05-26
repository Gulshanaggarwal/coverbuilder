import { Box, Grid } from "@mui/material";
import React from "react";
import Leftbar from "../components/leftbar";
import MiddleLayer from "../components/middleLayer";
import Surface from "../components/surface";


export default function Create() {
    return (
        <>
            <Leftbar />
            <MiddleLayer />
            <Surface />
        </>
    )
}