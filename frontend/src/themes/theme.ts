import { createTheme } from '@mui/material/styles';

const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e', 
    },
    background: {
      default: '#fafafa', 
      paper: '#ffffff', 
    },
    text: {
      primary: '#000000', 
      secondary: '#666666', 
    },
    action: {
      active: '#1976d2',
      hover: 'rgba(25, 118, 210, 0.08)',
    },
  },
});

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#90caf9', 
    },
    secondary: {
      main: '#f48fb1', 
    },
    background: {
      default: '#121212',
      paper: '#1d1d1d', 
    },
    text: {
      primary: '#e0e0e0', 
      secondary: '#b0b0b0', 
    },
    action: {
      active: '#90caf9',
      hover: 'rgba(144, 202, 249, 0.08)',
    },
  },
});

export { lightTheme, darkTheme };
