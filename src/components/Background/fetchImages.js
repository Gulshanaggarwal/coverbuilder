import { createApi } from "unsplash-js";
import { useState, useEffect } from "react";
import { CircularProgress } from "@mui/material";
import { ImageList } from "@mui/material";
import Typography from "@mui/material/Typography";
import BgPhoto from "../bgPhoto";
import { Box } from "@mui/system";


const api = createApi({
    accessKey: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY
});

export default function FetchImages({ searchQuery }) {


    const [data, setData] = useState(null);
    const [error, setError] = useState(false);


    useEffect(() => {
        setError(false);
        api.search
            .getPhotos({ query: searchQuery, page: 1, perPage: 10, orientation: "landscape" })
            .then(result => {
                setData(result);

            })
            .catch(() => {
                setError(true);
            });
    }, [searchQuery]);

    if (data === null) {
        return <Box sx={{ display: 'flex', justifyContent: 'center', padding: '2rem 0' }}><CircularProgress sx={{ color: 'common.white' }} /></Box>
    }
    else if (error) {
        return <Typography sx={{ textAlign: 'center', padding: '1rem' }} variant="p" component="p">Error occurred!</Typography>
    }


    return (
        <ImageList sx={{ overflowY: 'scroll', overflowX: 'hidden' }} cols={2}>
            {
                // map over images
                data.response.results.map((photo) => (
                    <BgPhoto key={photo.id} photo={{ id: photo.id, url: photo.urls.regular, alt_description: photo.alt_description }} />
                ))
            }
        </ImageList>

    )
}