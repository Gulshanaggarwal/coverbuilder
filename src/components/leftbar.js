import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import WallpaperIcon from '@mui/icons-material/Wallpaper';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import { useState } from "react";
import Link from "next/link"


export default function Leftbar() {

    const [svgColor, setSvgColor] = useState("rgba(189, 189, 189, 1)"); // setsvg color for text item.

    return (
        <Box sx={{ overflow: 'hidden', backgroundColor: 'grey.900', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', gap: '3.5rem', padding: '3rem 0', textAlign: 'center', color: 'grey.400', }}>
            <Link href="/create/background">
                <a>
                    <Box sx={{
                        '&:hover': {
                            color: 'grey.50'
                        },
                        cursor: 'pointer'
                    }}>
                        <WallpaperIcon />
                        <Typography component="p" variant="p">Background</Typography>
                    </Box>
                </a>
            </Link>
            <Link href="/create/uploads">
                <a>
                    <Box sx={{
                        '&:hover': {
                            color: 'grey.50'
                        },
                        cursor: 'pointer'
                    }}>
                        <CloudUploadOutlinedIcon />
                        <Typography component="p" variant="p">Uploads</Typography>
                    </Box>
                </a>
            </Link>
            <Box onMouseEnter={() => setSvgColor("#fafafa")} onMouseLeave={() => setSvgColor("rgba(189, 189, 189, 1)")} sx={{
                '&:hover': {
                    color: 'grey.50'
                },
                cursor: 'pointer'
            }}>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill={svgColor} ><path d="M5 8h2V6h3.252L7.68 18H5v2h8v-2h-2.252L13.32 6H17v2h2V4H5z"></path></svg>
                <Typography component="p" variant="p">Text</Typography>
            </Box>
            <Box sx={{
                '&:hover': {
                    color: 'grey.50'
                },
                cursor: 'pointer'
            }}>
                <EmojiEmotionsOutlinedIcon />
                <Typography component="p" variant="p">Emoji</Typography>
            </Box>
        </Box>
    )
}