import { Button, Typography } from '@mui/material';
import Popover from '@mui/material/Popover';
import OutlinedInput from '@mui/material/OutlinedInput';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { useState } from 'react';
import { Box } from '@mui/system';
import { MenuProps } from '../SurfaceTextStyle/styleBar';
import { FocusContext } from "../../contexts/focusContext";
import domtoimage from 'dom-to-image';
import { useContext } from 'react';

const fileTypes = [
    'PNG',
];



export default function DownloadMenu({ open, anchorEl, handleClose }) {

    const [currentType, setCurrentType] = useState("PNG");
    const { currentText, currentEmoji, focusDispatch } = useContext(FocusContext);

    const handleChange = (e) => {
        setCurrentType(e.target.value);
    };

    const DownloadCover = async () => {
        const node = document.getElementsByClassName("surface");  // get the surface node
        console.log(node[0]);

        if (currentText || currentEmoji) {
            focusDispatch({
                type: 'FOCUS_SET_TO_NONE',
                payload: { currentText: null, currentEmoji: null }
            })
        }
        if (currentType === "PNG") {
            const blob = await domtoimage.toBlob(node[0]);
            window.saveAs(blob, "cover-builder.png");
        }



    }

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
                <Button onClick={DownloadCover} sx={{ margin: '1rem 0' }} variant='contained'>Download</Button>
            </Box>
        </Popover>
    )
}