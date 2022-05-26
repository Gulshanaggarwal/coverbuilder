import { createTheme, ThemeProvider } from '@mui/material/styles';
import '../../styles/globals.css'
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { Box } from '@mui/material';
import { QueryClient, QueryClientProvider } from "react-query";




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

  const queryClient = new QueryClient();

  return <QueryClientProvider client={queryClient}>
    <ThemeProvider theme={theme}>
      <Box sx={{ height: '100vh' }}>
        <Box sx={{ height: '100%', overflow: 'hidden', display: 'grid', gridTemplateColumns: '120px 350px auto', gridTemplateRows: '60px auto 60px' }}>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </Box>
      </Box>
    </ThemeProvider>
  </QueryClientProvider>
}

export default MyApp
