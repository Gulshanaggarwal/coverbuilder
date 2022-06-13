import { MenuProps } from "../SurfaceTextStyle/styleBar";
import { availSize } from "../../resources/fontSize";
import { useState } from "react";
import { Box } from "@mui/system";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';



export default function EmojiStyleBar({ currentEmoji, focusDispatch }) {


    const [emojiSize, setEmojiSize] = useState(currentEmoji.size);


    const handleEmojiSizeChange = (size) => {
        setEmojiSize(size);

        // dispatch

        focusDispatch({
            type: 'CHANGE_EMOJI_SIZE',
            payload: { id: currentEmoji.id, size }
        })


    }

    return (
        <Box sx={{ backgroundColor: 'common.white', boxShadow: 6, padding: '8px 0.5rem', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: 1 }}>
            <Box>
                <FormControl>
                    <InputLabel id="demo-simple-select-label"></InputLabel>
                    <Select
                        labelId="demo-simple-select-label"
                        id="demo-simple-select"
                        value={emojiSize}
                        sx={{ height: '30px' }}
                        MenuProps={MenuProps}
                    >
                        {
                            // list all font sizes

                            availSize.map((size) => (
                                <MenuItem onClick={() => handleEmojiSizeChange(size)} key={size} value={size}>{size}</MenuItem>
                            ))
                        }
                    </Select>

                </FormControl>
            </Box>
        </Box>
    )
}