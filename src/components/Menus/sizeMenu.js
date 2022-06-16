import Menu from '@mui/material/Menu';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { Typography, Button, Stack } from '@mui/material';
import { useState, useContext } from 'react';
import { MenuProps } from '../SurfaceTextStyle/styleBar';
import { SizeContext } from '../../contexts/sizeContext';
import { useRouter } from "next/router";

const Options = [
    "DEV.to",
    "Hashnode",
    "Medium",
    "Custom"
]

const handleSizeDispatch = (coverStyle, width, height, dispatch) => {

    dispatch({
        type: 'SET_COVER',
        payload: { coverStyle, width, height }
    })


}

const sendTo = (router) => {
    router.push("/create/background");
}

export default function SizeMenu({ anchorEl, open, handleClose }) {

    const [coverStyle, setCoverStyle] = useState("");
    const [customWidth, setCustomWidth] = useState('');
    const [customHeight, setCustomHeight] = useState('');
    const [, sizeDispatch] = useContext(SizeContext);
    const [error, setError] = useState(null);
    const router = useRouter();

    const handleChange = (e) => {
        const coverStyle = e.target.value;

        if (coverStyle === "DEV.to") {
            handleSizeDispatch(coverStyle, '1000', '420', sizeDispatch);
            handleClose();
            sendTo(router);
        }
        else if (coverStyle === "Hashnode") {
            handleSizeDispatch(coverStyle, '1200', '630', sizeDispatch);
            handleClose();
            sendTo(router);
        }
        else if (coverStyle === "Medium") {
            handleSizeDispatch(coverStyle, '3000', '3000', sizeDispatch);
            handleClose();
            sendTo(router);
        }
        setCoverStyle(e.target.value);
    }


    const handleCreate = () => {
        const widthInInteger = Number(customWidth);
        const heightInInteger = Number(customHeight);

        if ((widthInInteger >= 100 && widthInInteger <= 4000) && (heightInInteger >= 100 && heightInInteger <= 4000)) {
            handleSizeDispatch(coverStyle, customWidth, customHeight, sizeDispatch);
            handleClose();
            sendTo(router);
            return;
        }
        setError("Dimensions should be at least 100px & not more than 4000px");



    }



    return (
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
                'aria-labelledby': 'basic-button',
            }}
        >
            <Box sx={{ padding: '1rem 5rem 3rem 1rem', width: '250px' }}>
                <Typography sx={{ padding: '0.5rem 0' }}>Select Size</Typography>
                <FormControl sx={{ minWidth: 120, }} fullWidth size="small">
                    <Select
                        labelId="demo-select-small"
                        id="demo-select-small"
                        value={coverStyle}
                        label="Size"
                        onChange={handleChange}
                        MenuProps={MenuProps}
                    >
                        {
                            Options.map((ele) => (
                                <MenuItem key={ele} value={ele}>{ele}</MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>
                {
                    coverStyle === "Custom" && <Box sx={{ padding: '2rem 0' }}>
                        <Box
                            component='form'
                            autoComplete='off'
                        >
                            <Stack direction="row" spacing={2}>
                                <TextField size="small" onChange={(e) => setCustomWidth(e.target.value.trim())} value={customWidth} id="outlined-basic" label="Width in px" variant="outlined" />
                                <TextField size="small" onChange={(e) => setCustomHeight(e.target.value.trim())} value={customHeight} id="outlined-basic" label="Height in px" variant="outlined" />
                            </Stack>
                            {error && <Typography sx={{ color: 'red', padding: '1rem 0' }} variant='p' component='p'>{error}</Typography>}
                            <Button onClick={handleCreate} sx={{ margin: '1rem 0', width: '100%' }} variant="contained">Create Design</Button>
                        </Box>
                    </Box>
                }
            </Box>
        </Menu>
    )
}