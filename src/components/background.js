import { Box } from '@mui/system';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import Chip from '@mui/material/Chip';
import FetchImages from './fetchImages';
import { useState } from 'react';



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



export default function Background() {

    const [searchQuery, setSearchQuery] = useState("coding");



    return (
        <Box sx={{ width: '90%', margin: 'auto', overflowY: 'scroll' }}>
            <Box sx={{ display: 'flex', position: 'sticky' }}>
                <Box sx={{ backgroundColor: 'common.white', display: 'flex', justifyContent: 'center', padding: '1rem', borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px', borderColor: 'none' }}>
                    <SearchOutlinedIcon />
                </Box>
                <input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} style={{ outline: 'none', width: '100%', border: 'none', borderTopRightRadius: '5px', borderBottomRightRadius: '5px' }} type="text" placeholder='search' />
            </Box>
            <Box>
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
                <FetchImages searchQuery={searchQuery} />
            </Box>

        </Box>
    )
}