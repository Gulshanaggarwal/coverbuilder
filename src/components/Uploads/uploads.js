import { Box } from "@mui/system"
import { SearchContext } from "../../contexts/searchContext";
import { useContext, useEffect } from "react";
import { handleChange } from "../Search/search";
import { Button } from "@mui/material";
import PhotoCamera from '@mui/icons-material/PhotoCamera';
import { styled } from '@mui/material/styles';

const supportedTypes = [".jpg", ".jpeg", ".png"];
const MAX_SIZE = 10485760 // 10bytes

export default function Uploads() {

    const [state, dispatch] = useContext(SearchContext);

    useEffect(() => {
        //make empty searchBar
        handleChange("", dispatch);

    }, [])

    const Input = styled('input')({
        display: 'none',
    });


    const handleFileChange = (e) => {

        const selected = e.target.files[0];

        if (selected && supportedTypes.includes(selected.type)) {
            // upload file


        }

    }

    return (
        <Box>
            <label htmlFor="contained-button-file">
                <Input onChange={handleFileChange} accept=".jpg,.jpeg,.png" id="contained-button-file" type="file" />
                <Button sx={{ width: '100%', margin: '1rem 0' }} variant="contained" component="span" endIcon={<PhotoCamera />}>
                    Upload
                </Button>
            </label>
        </Box>
    )
}