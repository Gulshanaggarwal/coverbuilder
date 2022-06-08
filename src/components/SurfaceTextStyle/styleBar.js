import { Box } from "@mui/system";
import { Stack } from "@mui/material";
import { useState, useEffect } from "react";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import FormatColorTextOutlinedIcon from '@mui/icons-material/FormatColorTextOutlined';
import { availFonts } from "../../resources/availFonts";
import { availSize } from "../../resources/fontSize";
import { ChromePicker } from "react-color";
import Popover from '@mui/material/Popover';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};


export default function StyleBar({ currentText, focusDispatch }) {


    const [font, setFont] = useState(currentText.font);
    const [fontSize, setFontSize] = useState(currentText.size);
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);


    useEffect(() => {
        setFont(currentText.font);
        setFontSize(currentText.size);

    }, [currentText])

    const handleFontChange = (ele) => {
        setFont(ele.font);
        // handle surface text font change

        focusDispatch({
            type: "FONT_CHANGE",
            payload: { id: currentText.id, font: ele.font, family: ele.family }
        })
    };

    const handleFontSizeChange = (size) => {
        setFontSize(size);

        // handle surface text size change

        focusDispatch({
            type: "FONT_SIZE_CHANGE",
            payload: { id: currentText.id, size }
        })

    }

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Box sx={{ backgroundColor: 'common.white', boxShadow: 6, padding: '8px 0.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
            { /* font family */}
            <Box sx={{ minWidth: 120 }}>
                <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label"></InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={font}
                        sx={{ height: '30px' }}
                        MenuProps={MenuProps}
                    >
                        {
                            // List all available fonts
                            availFonts.map((ele) => (
                                <MenuItem onClick={() => handleFontChange(ele)} key={ele.font} value={ele.font}>{ele.font}</MenuItem>
                            ))
                        }
                    </Select>
                </FormControl>
            </Box>

            { /* font size */}
            <Box>
                <FormControl>
                    <InputLabel id="demo-simple-select-label"></InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={fontSize}
                        sx={{ height: '30px' }}
                        MenuProps={MenuProps}
                    >
                        {
                            // list all font sizes

                            availSize.map((size) => (
                                <MenuItem onClick={() => handleFontSizeChange(size)} key={size} value={size}>{size}</MenuItem>
                            ))
                        }
                    </Select>

                </FormControl>
            </Box>
            {/* Text Color Handle */}
            <Box>
                <Box onClick={handleClick} sx={{
                    '&:hover': {
                        backgroundColor: 'common.white',
                        boxShadow: 4,
                    },
                    borderRadius: 2,
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    padding: '0.5rem',
                    cursor: 'pointer',
                    position: 'relative'
                }}>
                    <FormatColorTextOutlinedIcon />
                </Box>
                <Popover
                    id="simple-popover"
                    open={open}
                    anchorEl={anchorEl}
                    onClose={handleClose}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'left',
                    }}>
                    <ChromePicker />
                </Popover>
            </Box>
        </Box>
    )
}