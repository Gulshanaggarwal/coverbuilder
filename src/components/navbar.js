import { Typography } from "@mui/material"
import { Box } from "@mui/system"
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import { Button } from "@mui/material";
import styled from "@emotion/styled";
import domtoimage from 'dom-to-image';
import { saveAs } from 'file-saver';


const DownloadButton = styled(Button)(({ theme }) => ({
    backgroundColor: 'white',
    color: theme.palette.primary.main,
    fontWeight: 'bold',
    '&:hover': {
        backgroundColor: theme.palette.grey[300]
    },
    borderColor: theme.palette.primary.main,
    margin: '0 2rem',
    boxShadow: 2
}))

const runDownload = () => {
    const node = document.getElementsByClassName("surface");
    console.log(node[0]);

    domtoimage.toBlob(node[0])
        .then(function (blob) {
            window.saveAs(blob, 'my-node.png');
        });

}

export default function Navbar() {
    return (
        <Box component="div" color="white" sx={{ backgroundColor: 'primary.dark', gridColumnStart: 1, gridColumnEnd: 4, width: '100%' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', padding: '1rem' }}>
                <Typography component="h1" variant="h4" fontFamily="'Cinzel Decorative',cursive">CB</Typography>
                <Box sx={{ display: 'flex', alignItems: 'center' }}>
                    <DownloadButton onClick={runDownload} variant="contained" endIcon={<FileDownloadOutlinedIcon />}>
                        Download
                    </DownloadButton>
                    <iframe src="https://ghbtns.com/github-btn.html?user=Gulshanaggarwal&repo=coverbuilder&type=star&count=true" frameBorder="0" scrolling="0" width="100" height="20" title="GitHub"></iframe>
                </Box>
            </Box>
        </Box >
    )
}