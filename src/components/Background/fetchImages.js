import { createApi } from "unsplash-js";
import { useState, useEffect } from "react";
import { ImageList } from "@mui/material";
import BgPhoto from "../bgPhoto";
import Error from "../Error/error";
import CircularLoader from "../../resources/Loaders/loader";


const api = createApi({
    accessKey: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY
});

export default function FetchImages({ searchQuery }) {


    const [data, setData] = useState(null);
    const [error, setError] = useState(false);

    console.log("data", data, searchQuery);


    useEffect(() => {
        setError(false);
        api.search
            .getPhotos({ query: searchQuery, page: 1, perPage: 10, orientation: "landscape" })
            .then(result => {
                setData(result.response.results);

            })
            .catch(() => {
                setError(true);
            });
    }, [searchQuery]);

    if (data === null) {
        return <CircularLoader />
    }
    else if (data.length === 0) {
        return <Error error="Sorry! no results found, try searching again 😞" />
    }
    else if (error) {
        return <Error error="Error occurred!" />
    }


    return (
        <ImageList sx={{ overflowX: 'hidden', }} cols={2} gap={6}>
            {
                // map over images
                data.map((photo) => (
                    <BgPhoto key={photo.id} photo={{ id: photo.id, url: photo.urls.regular, alt_description: photo.alt_description }} />
                ))
            }
        </ImageList>

    )
}