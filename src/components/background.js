import { Box } from '@mui/system';
import TextField from '@mui/material/TextField';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Chip from '@mui/material/Chip';
import { createApi } from "unsplash-js";
import { useState, useEffect } from 'react';


const chipArray = [
    {
        label: "Coding"
    },
    {
        label: "Web"
    },
    {
        label: "Computer"
    },
    {
        label: "Summer"
    },
    {
        label: "Development"
    },
    {
        label: "Book"
    }
]

const api = createApi({
    accessKey: ""
});

export default function Background() {

    const [searchQuery, setSearchQuery] = useState("coding");
    const [data, setPhotosResponse] = useState(null);
    const [isLoading, setIsLoading] = useState(null);
    const [error, setError] = useState(null);


    useEffect(() => {
        api.search
            .getPhotos({ query: searchQuery, page: 1, perPage: 10, orientation: "landscape" })
            .then(result => {
                setPhotosResponse(result);

            })
            .catch(() => {
                console.log("something went wrong!");
            });
    }, [searchQuery]);


    return (
        <Box sx={{ width: '90%', margin: 'auto' }}>
            <Box sx={{ display: 'flex', }}>
                <Box sx={{ backgroundColor: 'common.white', display: 'flex', justifyContent: 'center', padding: '1rem', borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px', borderColor: 'none' }}>
                    <SearchOutlinedIcon />
                </Box>
                <input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} style={{ outline: 'none', width: '100%', border: 'none', borderTopRightRadius: '5px', borderBottomRightRadius: '5px' }} type="text" placeholder='search' />
            </Box>
            <Box sx={{ display: 'flex', flexWrap: 'wrap', padding: '1rem 0', gap: '0.5rem' }}>
                {
                    // chips 
                    chipArray.map((ele) => (
                        <Chip onClick={() => setSearchQuery(ele.label)} label={ele.label} key={ele.label} sx={{
                            color: 'grey.50', backgroundColor: 'grey.700', '&:hover': {
                                backgroundColor: 'grey.500',
                                cursor: 'pointer'
                            }
                        }} />
                    ))
                }
            </Box>
        </Box>
    )
}