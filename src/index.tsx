import { ThemeProvider, createTheme } from '@mui/material/styles';
import ReactDOM from 'react-dom';
import App from './App';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2', 
    },
  },
});

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <App />
  </ThemeProvider>,
  document.getElementById('root')
);
