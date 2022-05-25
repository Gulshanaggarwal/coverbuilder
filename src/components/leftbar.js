import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import WallpaperIcon from '@mui/icons-material/Wallpaper';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';


export default function Leftbar() {
    return (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: '3.5rem', padding: '3rem 0', textAlign: 'center', color: 'grey.400' }}>
            <Box sx={{
                '&:hover': {
                    color: 'grey.200'
                },
                cursor: 'pointer'
            }}>
                <WallpaperIcon />
                <Typography component="p" variant="p">Background</Typography>
            </Box>
            <Box sx={{
                '&:hover': {
                    color: 'grey.200'
                },
                cursor: 'pointer'
            }}>
                <CloudUploadOutlinedIcon />
                <Typography component="p" variant="p">Uploads</Typography>
            </Box>
            <Box sx={{
                '&:hover': {
                    color: 'grey.200'
                },
                cursor: 'pointer'
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="rgba(189, 189, 189, 1)" ><path d="M5 8h2V6h3.252L7.68 18H5v2h8v-2h-2.252L13.32 6H17v2h2V4H5z"></path></svg>
                <Typography component="p" variant="p">Text</Typography>
            </Box>
            <Box sx={{
                '&:hover': {
                    color: 'grey.200'
                },
                cursor: 'pointer'
            }}>
                <EmojiEmotionsOutlinedIcon />
                <Typography component="p" variant="p">Emoji</Typography>
            </Box>
        </Box>
    )
}