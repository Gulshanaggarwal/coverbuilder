import { createTheme, ThemeProvider } from '@mui/material/styles';
import '../../styles/globals.css'
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { Box } from '@mui/material';




const theme = createTheme({
  palette: {
    primary: {
      main: "#651fff",
      light: "#7c4dff",
      dark: "#6200ea"
    }
  }
})

function MyApp({ Component, pageProps }) {
  return <ThemeProvider theme={theme}>
    <Box sx={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <Navbar />
      <Component {...pageProps} />
      <Footer />
    </Box>
  </ThemeProvider>
}

export default MyApp
