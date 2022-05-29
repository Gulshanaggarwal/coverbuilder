import { Box } from "@mui/system"
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { SearchContext } from "../../contexts/searchContext";
import { useContext } from "react";

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


    return (
        <Box sx={{ display: 'flex', position: 'sticky' }}>
            <Box sx={{ backgroundColor: 'common.white', display: 'flex', justifyContent: 'center', padding: '1rem', borderTopLeftRadius: '5px', borderBottomLeftRadius: '5px', borderColor: 'none' }}>
                <SearchOutlinedIcon />
            </Box>
            <input value={searchQuery} onChange={(e) => handleChange(e.target.value, dispatch)} style={{ outline: 'none', width: '100%', border: 'none', borderTopRightRadius: '5px', borderBottomRightRadius: '5px' }} type="text" placeholder='search' />
        </Box>
    )
}