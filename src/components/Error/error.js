import { Typography } from "@mui/material"


export default function Error({ error }) {
    return (
        <Typography component="p" variant="h6" sx={{ color: 'common.white', textAlign: 'center', padding: '1rem 0' }}>
            {error}
        </Typography>
    )
}