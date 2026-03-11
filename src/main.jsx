import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './containers/App.jsx'
import './styles/index.css'

const theme = createTheme({
    palette: {
        primary: { main: '#1976d2' }, // или свои цвета
        secondary: { main: '#dc004e' },
    },
    typography: {
        fontFamily: 'Roboto, sans-serif',
    },
});

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <ThemeProvider theme={theme}>
            <App />
      </ThemeProvider>
  </StrictMode>,
)
