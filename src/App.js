import React from 'react';
import {
  BrowserRouter as Router
} from  'react-router-dom';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppMenu from './AppMenu';
import AppRouter from './AppRouter';
import theme from './theme';
import {
  Box,
  ThemeProvider
} from '@material-ui/core';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Router>
        <CssBaseline />
        <AppMenu />
        <Box padding={2}>
          <AppRouter />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
