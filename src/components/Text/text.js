import { Stack, Box } from "@mui/material";
import ShowText from "./showText";

const texts = [
    {
        size: '34px',
        weight: 'normal',
        font: 'Roboto',
        family: 'sans-serif',
        color: '#000000',
        text: "Add a heading"
    },
    {
        size: '24px',
        weight: 'normal',
        font: 'Roboto',
        family: 'sans-serif',
        color: '#000000',
        text: "Add a subheading"
    },
    {
        size: '16px',
        weight: 'normal',
        font: 'Roboto',
        family: 'sans-serif',
        color: '#000000',
        text: "Add small body of text"
    },

]


export default function Text() {


    return (
        <Box sx={{ width: '100%' }} >
            <Stack direction="column" sx={{ color: 'common.white', }} gap={2} marginTop={2}>
                {
                    texts.map((text) => (
                        <ShowText key={text.text} text={text} />
                    ))
                }
            </Stack>
        </Box>
    )
}