import { Box } from "@mui/system";
import { Stack, Button } from "@mui/material";
import KeyboardArrowDownOutlinedIcon from '@mui/icons-material/KeyboardArrowDownOutlined';
import FormatColorTextOutlinedIcon from '@mui/icons-material/FormatColorTextOutlined';
import FormatBoldOutlinedIcon from '@mui/icons-material/FormatBoldOutlined';
import FormatItalicOutlinedIcon from '@mui/icons-material/FormatItalicOutlined';


export default function StyleBar() {
    return (
        <Box sx={{ backgroundColor: 'common.white', boxShadow: 6, padding: '4px 0.5rem', display: 'flex', justifyContent: 'center', }}>
            <Stack direction="row">
                <Button endIcon={<KeyboardArrowDownOutlinedIcon />}>
                    Fonts
                </Button>
                <Button endIcon={<KeyboardArrowDownOutlinedIcon />}>
                    Font Size
                </Button>
                <Button>
                    <FormatColorTextOutlinedIcon />
                </Button>
                <Button>
                    <FormatBoldOutlinedIcon />
                </Button>
                <Button>
                    <FormatItalicOutlinedIcon />
                </Button>
            </Stack>
        </Box>
    )
}