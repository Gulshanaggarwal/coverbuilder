import { createApi } from "unsplash-js";
import { useState, useEffect } from "react";
import { Grid } from "@mui/material";
import BgPhoto from "../bgPhoto";
import Error from "../Error/error";
import CircularLoader from "../../resources/Loaders/loader";
import Button from '@mui/material/Button';


const api = createApi({
    accessKey: process.env.NEXT_PUBLIC_UNSPLASH_ACCESS_KEY
});

export default function FetchImages({ searchQuery }) {


    const [data, setData] = useState(null);
    const [error, setError] = useState(false);
    const [page, setPage] = useState(1);
    const [ismoreData, setMoreData] = useState(true);
    const [isLoadingMore, setIsLoadingMore] = useState(false);


    useEffect(() => {
        if (page !== 1) {
            setPage(1);
        }
        if (data) {
            setData(null);
        }
        if (!ismoreData) {
            setMoreData(true);
        }
        if (error) {
            setError(false);
        }
    }, [searchQuery])



    useEffect(() => {
        if (error) {
            setError(false);
        }
        if (page > 1) {
            setIsLoadingMore(true);
        }
        api.search
            .getPhotos({ query: searchQuery, page, perPage: 10, orientation: "landscape" })
            .then(result => {
                setIsLoadingMore(false);
                if (page === 1) {
                    setData(result.response.results);
                }
                else {
                    setData((data) => data ? [...data, ...result.response.results] : result.response.results)
                }

            })
            .catch(() => {
                setIsLoadingMore(false);
                if (page === 1) {
                    setError(true);
                }
                else {
                    setMoreData(false);
                }
            });
    }, [searchQuery, page]);

    if (data === null) {
        return <CircularLoader />
    }
    else if (data.length === 0) {
        return <Error error="Sorry! no results found, try searching again 😞" />
    }
    else if (error) {
        return <Error error="Error occurred try again 😔" />
    }


    return (
        <>
            <Grid container spacing={1} sx={{ padding: '1rem 0' }}>
                {
                    // map over images
                    data.map((photo) => (
                        <BgPhoto key={photo.id} photo={{ id: photo.id, url: photo.urls.regular, alt_description: photo.alt_description }} />
                    ))
                }

            </Grid>
            {
                !error && ismoreData && <Button sx={{ width: '100%', margin: '1rem 0 0 0' }} variant="contained" onClick={() => setPage((page) => page + 1)}>
                    {
                        isLoadingMore ? 'Loading...' : 'Load more'
                    }
                </Button>
            }
            {
                !ismoreData && <Button color="info" variant="contained">Sorry no more images 😞</Button>
            }
        </>

    )
}