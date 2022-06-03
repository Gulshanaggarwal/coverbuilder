import { Stack, Box } from "@mui/material";
import ShowText from "./showText";

const texts = [
    {
        size: '34px',
        weight: 'normal',
        text: "Add a heading"
    },
    {
        size: '24px',
        weight: 'normal',
        text: "Add a subheading"
    },
    {
        size: '16px',
        weight: 'normal',
        text: "Add small body of text"
    },

]


export default function Text() {


    return (
        <Box>
            <Stack direction="column" sx={{ color: 'common.white' }} gap={2} marginTop={2}>
                {
                    texts.map((text) => (
                        <ShowText key={text.text} text={text} />
                    ))
                }
            </Stack>
        </Box>
    )
}