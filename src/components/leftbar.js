import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import WallpaperIcon from '@mui/icons-material/Wallpaper';
import CloudUploadOutlinedIcon from '@mui/icons-material/CloudUploadOutlined';
import EmojiEmotionsOutlinedIcon from '@mui/icons-material/EmojiEmotionsOutlined';
import { useState, useEffect } from "react";
import Link from "next/link"
import { useRouter } from "next/router";


export default function Leftbar() {

    const [svgColor, setSvgColor] = useState("rgba(189, 189, 189, 1)"); // setsvg color for text item.
    const router = useRouter();
    const { endpoint } = router.query;

    useEffect(() => {
        if (endpoint === "text") {
            setSvgColor("#fafafa");
        }
        else {
            setSvgColor("rgba(189, 189, 189, 1)");
        }

    }, [endpoint])

    return (
        <Box sx={{ overflow: 'hidden', backgroundColor: 'grey.900', display: 'flex', flexDirection: 'column', gap: '1rem', padding: '3rem 0', textAlign: 'center', color: 'grey.400', }}>
            <Link href="/create/background">
                <a>
                    <Box sx={{
                        width: '100%',
                        '&:hover': {
                            color: 'grey.50'
                        },
                        cursor: 'pointer',
                        padding: '1rem 0',
                        color: endpoint === 'background' && 'grey.50',
                        backgroundColor: endpoint === 'background' && 'grey.800',
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
                        cursor: 'pointer',
                        padding: '1rem 0',
                        color: endpoint === 'uploads' && 'grey.50',
                        backgroundColor: endpoint === 'uploads' && 'grey.800',

                    }}>
                        <CloudUploadOutlinedIcon />
                        <Typography component="p" variant="p">Uploads</Typography>
                    </Box>
                </a>
            </Link>
            <Link href="/create/text">
                <a>
                    <Box onMouseEnter={() => setSvgColor("#fafafa")} onMouseLeave={() => {
                        if (endpoint !== "text") {
                            setSvgColor("rgba(189, 189, 189, 1)")
                        }
                    }} sx={{
                        '&:hover': {
                            color: 'grey.50'
                        },
                        cursor: 'pointer',
                        padding: '1rem 0',
                        color: endpoint === 'text' && 'grey.50',
                        backgroundColor: endpoint === 'text' && 'grey.800',
                    }}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill={svgColor} ><path d="M5 8h2V6h3.252L7.68 18H5v2h8v-2h-2.252L13.32 6H17v2h2V4H5z"></path></svg>
                        <Typography component="p" variant="p">Text</Typography>
                    </Box>
                </a>
            </Link>
            <Link href="/create/emoji">
                <a>
                    <Box sx={{
                        '&:hover': {
                            color: 'grey.50'
                        },
                        cursor: 'pointer',
                        padding: '1rem 0',
                        color: endpoint === 'emoji' && 'grey.50',
                        backgroundColor: endpoint === 'emoji' && 'grey.800',
                    }}>
                        <EmojiEmotionsOutlinedIcon />
                        <Typography component="p" variant="p">Emoji</Typography>
                    </Box>
                </a>
            </Link>
        </Box>
    )
}