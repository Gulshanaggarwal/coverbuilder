import { Stack, Box, Grid } from "@mui/material";
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

const moreTexts = [
    {
        size: '16px',
        weight: 'normal',
        font: 'Sofia',
        family: 'sans-serif',
        color: '#000000',
        text: "Hello World!"
    },
    {
        size: '16px',
        weight: 'normal',
        font: 'Trirong',
        family: 'serif',
        color: '#000000',
        text: "full-stack"
    },
    {
        size: '16px',
        weight: 'normal',
        font: 'Akronim',
        family: 'cursive',
        color: '#000000',
        text: "Hackathon"
    },
    {
        size: '16px',
        weight: 'normal',
        font: 'Audiowide',
        family: 'cursive',
        color: '#000000',
        text: "JavaScript"
    }

]


export default function Text() {


    return (
        <Box sx={{ width: '100%' }} >
            <Stack direction="column" sx={{ color: 'common.white', }} gap={2} marginTop={2}>
                {
                    texts.map((text) => (
                        <ShowText key={text.text} text={text} padding="0.7rem 0.5rem" />
                    ))
                }
            </Stack>
            <Grid container spacing={1} sx={{ padding: '2rem 0' }}>
                {
                    moreTexts.map((text) => (
                        <Grid key={text.text} item xs={6}>
                            <ShowText text={text} padding="2rem 1rem" />
                        </Grid>
                    ))
                }
            </Grid>
        </Box>
    )
}