import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import { ThemeProvider } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import DropzonePage from './pages/DropzonePage';

import theme from './theme';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <Container maxWidth="lg" style={{ height: '100vh' }}>
            <Box
              display="flex"
              flex={1}
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
              minHeight="100%"
            >
              <DropzonePage />
              <ToastContainer autoClose={3000} />
            </Box>
          </Container>
        </CssBaseline>
      </ThemeProvider>
    </>
  );
}

export default App;
