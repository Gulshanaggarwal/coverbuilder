import { Box, Typography } from "@mui/material";
import Image from "next/image";
import editorGif from "../../public/editorGif.gif"


export default function Home() {
  return (
    <Box className="homepage-gradient" sx={{ gridColumnStart: '1', gridColumnEnd: '4', color: 'white' }}>
      <Box sx={{ display: 'flex', padding: '6rem 4rem', width: '100%', height: '100%', gap: 4 }}>
        <Box sx={{ width: '60%', }}>
          <Typography sx={{ fontSize: '3rem', fontWeight: 'fontWeightBold' }}>
            Create Beautiful Covers<br />
            for blogs like a pro😎
          </Typography>
          <Typography sx={{ padding: '2rem 0', fontSize: '1.2rem' }}>
            We at Cover Builders are aimed to provide you simple and easy tools,<br />
            that helps you in generating blog covers easily.
          </Typography>
        </Box>
        <Box sx={{ width: '40%', }}>
          <Image
            src={editorGif}
            alt="full_editor"
            style={{ borderRadius: '10px', margin: '0 0 0 2rem', }}
          >

          </Image>
        </Box>
      </Box>
    </Box>
  )
}
