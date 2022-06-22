import { Box } from '@mui/system';
import Chip from '@mui/material/Chip';
import FetchImages from './fetchImages';
import { SearchContext } from '../../contexts/searchContext';
import { handleChange } from '../Search/search';
import { useContext, useEffect } from 'react';




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

    const [state, dispatch] = useContext(SearchContext);
    const { searchQuery } = state;

    useEffect(() => {
        //make empty searchBar
        handleChange("web", dispatch);

    }, [dispatch])





    return (
        <>
            <Box sx={{ backgroundColor: 'grey.800', display: 'flex', flexWrap: 'wrap', padding: '1rem 0', gap: '0.5rem', position: 'sticky', top: '70px', zIndex: '101' }}>
                {
                    // chips 
                    chipArray.map((ele) => (
                        <Chip onClick={() => handleChange(ele.label, dispatch)} label={ele.label} key={ele.label} sx={{
                            color: 'grey.50', backgroundColor: 'grey.700', '&:hover': {
                                backgroundColor: 'grey.500',
                                cursor: 'pointer'
                            }
                        }} />
                    ))
                }
            </Box>
            <FetchImages searchQuery={searchQuery} />
        </>

    )
}