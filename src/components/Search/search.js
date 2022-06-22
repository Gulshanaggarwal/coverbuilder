import { Box } from "@mui/system"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { SearchContext } from "../../contexts/searchContext";
import { useContext, useState } from "react";

export const handleChange = (val, dispatch) => {

    const value = val.trim();

    //dispatch Action
    dispatch({
        type: 'SET_SEARCH_QUERY',
        payload: value
    })

}

export default function Search() {

    const [state, dispatch] = useContext(SearchContext);
    const { searchQuery } = state;
    const [borderColor, setBorderColor] = useState('common.white');


    return (
        <Box sx={{ width: '100%', padding: '1rem 0', position: 'sticky', top: '0', zIndex: '101', backgroundColor: 'grey.800' }}>
            <Box onFocus={() => setBorderColor("primary.main")} onBlur={() => setBorderColor('common.white')} sx={{ display: 'flex', width: '100%', border: 2, borderColor, borderRadius: '5px', outline: 'none', }}>
                <Box sx={{ backgroundColor: 'common.white', display: 'flex', justifyContent: 'center', padding: '0.5rem', borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px', border: 0 }}>
                    <SearchOutlinedIcon />
                </Box>
                <input value={searchQuery} onChange={(e) => handleChange(e.target.value, dispatch)} style={{ outline: 'none', width: '100%', border: 0, borderTopRightRadius: '5px', borderBottomRightRadius: '5px', padding: '0 3px' }} type="text" placeholder='search' />
            </Box>
        </Box>
    )
}