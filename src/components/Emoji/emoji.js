import { Grid, Typography, Box } from "@mui/material";
import { useEffect, useState } from "react"
import { SearchContext } from "../../contexts/searchContext";
import CircularLoader from "../../resources/Loaders/loader";
import Error from "../Error/error";
import { useContext } from "react";
import { handleChange } from "../Search/search";
import EmojiTemplate from "./emojiTemplate";






export default function Emoji() {

    const [data, setData] = useState(null);
    const [error, setError] = useState(null);
    const [state, dispatch] = useContext(SearchContext);
    const { searchQuery } = state;


    useEffect(() => {
        //make empty searchBar
        handleChange("", dispatch);

    }, [dispatch])



    useEffect(() => {

        const fetchEmoji = async () => {
            let url = "";

            if (searchQuery === "") {
                url = `https://emoji-api.com/emojis?access_key=${process.env.NEXT_PUBLIC_EMOJIAPI_ACCESS_KEY}`
            }
            else {
                url = `https://emoji-api.com/emojis?search=${searchQuery}&access_key=${process.env.NEXT_PUBLIC_EMOJIAPI_ACCESS_KEY}`
            }
            console.log(url);
            try {
                const jsonResponse = await fetch(url);
                const data = await jsonResponse.json();
                if (data === null) {
                    setError("Couldn't find try something different!");
                }
                else {
                    setData(data);
                    if (error) {
                        setError(null);
                    }
                }

            } catch (error) {
                setError("Couldn't fetch try again!");
            }

        }
        fetchEmoji();

    }, [searchQuery, error])

    if (data === null) {
        return <CircularLoader />
    }
    else if (error) {
        <Error error={error} />
    }

    console.log(data);
    return (
        <Box>
            {
                searchQuery === "" && data.length > 0 && <Box sx={{ padding: '1rem 0' }}>
                    <Typography component="p" variant="h6" sx={{ padding: '1rem 0 ', color: 'common.white' }}>Simleys and Hearts</Typography>
                    <Grid container spacing={2}>
                        {
                            data.map((emoji, index) => emoji.group === 'smileys-emotion' && <EmojiTemplate key={index} emoji={emoji} />)
                        }
                    </Grid>
                </Box>
            }
            {
                searchQuery === "" && data.length > 0 && <Box sx={{ padding: '1rem 0' }}>
                    <Typography component="p" variant="h6" sx={{ padding: '1rem 0 ', color: 'common.white' }}>People</Typography>
                    <Grid container spacing={2}>
                        {
                            data.map((emoji, index) => emoji.group === 'people-body' && <EmojiTemplate key={index} emoji={emoji} />)
                        }
                    </Grid>
                </Box>
            }
            {
                searchQuery && data.length > 0 && <Grid sx={{ padding: '1rem 0', width: '100%' }} container spacing={2}>
                    {
                        data.map((emoji, index) => <EmojiTemplate key={index} emoji={emoji} />)
                    }
                </Grid>
            }

        </Box>
    )
}