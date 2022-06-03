import { createTheme, ThemeProvider } from '@mui/material/styles';
import '../../styles/globals.css'
import Navbar from '../components/navbar';
import Footer from '../components/footer';
import { Box } from '@mui/material';
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"



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


  return <DndProvider backend={HTML5Backend}>
    <ThemeProvider theme={theme}>
      <Box sx={{ height: '100vh', }}>
        <Box sx={{ height: '100%', display: 'grid', gridTemplateColumns: '120px 350px auto', gridTemplateRows: '70px auto 60px' }}>
          <Navbar />
          <Component {...pageProps} />
          <Footer />
        </Box>
      </Box>
    </ThemeProvider>
  </DndProvider>
}

export default MyApp
