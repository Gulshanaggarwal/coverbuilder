import { Box, Grid } from "@mui/material";
import React from "react";
import Leftbar from "../../components/leftbar";
import Background from "../../components/Background/background";
import { useRouter } from "next/router";
import Uploads from "../../components/Uploads/uploads";
import RightLayer from "../../components/rightLayer";
import Search from "../../components/Search/search";
import Text from "../../components/Text/text";
import Emoji from "../../components/Emoji/emoji";
import SearchContextProvider from "../../contexts/searchContext";


export default function Create() {

    const router = useRouter();
    return (
        <>
            <Leftbar />
            {
                // Middle Layer
                <SearchContextProvider>
                    <Box sx={{ padding: '1rem', backgroundColor: 'grey.800', overflow: 'hidden' }}>
                        <Box sx={{ width: '90%', margin: 'auto', }}>
                            <Search />
                            {router.query.endpoint === 'background' && <Background />}
                            {router.query.endpoint === 'uploads' && <Uploads />}
                            {router.query.endpoint === 'text' && <Text />}
                            {router.query.endpoint === 'emoji' && <Emoji />}
                        </Box>
                    </Box>
                </SearchContextProvider>
            }
            <RightLayer />
        </>
    )
}