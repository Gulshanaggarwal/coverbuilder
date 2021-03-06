import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import { Link } from "@mui/material";

export default function Footer() {
    return (
        <Box
            component="footer"
            className="homepage-gradient"
            sx={{
                display: "flex",
                justifyContent: "center",
                backgroundColor: "common.black",
                color: "common.white",
                padding: "1rem",
                gridColumnStart: 1,
                gridColumnEnd: 4
            }}
        >
            <Box sx={{ display: "flex" }}>
                {/* <TagIcon /> */}
                <Typography variant="p" component="p">
                    {"</> "} by{" "}
                    <Link
                        href="https://gulshanaggarwal.github.io/portfolio/"
                        underline="hover"
                        target="_blank"
                        rel="noopener"
                        sx={{ color: 'white' }}
                    >
                        Gulshan
                    </Link>{" "}
                    using NextJS 🔥 and Firebase ✨
                </Typography>
            </Box>
        </Box>
    );
}