import { createTheme, ThemeProvider } from '@mui/material/styles';
import '../../styles/globals.css'





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
    <Component {...pageProps} />
  </ThemeProvider>
}

export default MyApp
