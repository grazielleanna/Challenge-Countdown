import { createTheme, ThemeProvider } from '@material-ui/core';
import React from 'react';
import Routes from './routes';
import './style.css';

const theme = createTheme({
  palette: {
    primary: {
      main: '#191918'
    }
  }
})

function App() {

  return (
    <ThemeProvider theme={theme}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
