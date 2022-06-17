import { Button, Typography } from '@mui/material';
import Popover from '@mui/material/Popover';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import { Box } from '@mui/system';
import { MenuProps } from '../SurfaceTextStyle/styleBar';

const fileTypes = [
    'PNG',
    'JPEG'
];



export default function DownloadMenu({ open, anchorEl, handleClose }) {

    const [currentType, setCurrentType] = useState("PNG");

    const handleChange = (e) => {
        setCurrentType(e.target.value);
    };

    return (
        <Popover
            id="download-menu"
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
            }}
        >
            <Box sx={{ padding: '1rem 3rem 1rem 1rem' }}>
                <Typography sx={{ fontWeight: 'fontWeightBold', padding: '0.5rem 0' }}>File type</Typography>
                <FormControl sx={{ minWidth: 120, }} fullWidth size="small">
                    <Select
                        value={currentType}
                        onChange={handleChange}
                        input={<OutlinedInput />}
                        MenuProps={MenuProps}
                        inputProps={{ 'aria-label': 'Without label' }}
                    >
                        {fileTypes.map((file) => (
                            <MenuItem
                                key={file}
                                value={file}
                            >
                                {file}
                            </MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <Button sx={{ margin: '1rem 0' }} variant='contained'>Download</Button>
            </Box>
        </Popover>
    )
}