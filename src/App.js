import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Provider } from 'react-redux';
import store from './store';
import MainRoute from "./MainRoute";

const theme = createTheme({
  palette: {
    primary: {
      main: 'rgb(124, 78, 41)',
      contrastText: '#fff',
    },
  },
});

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <MainRoute />
      </ThemeProvider>
    </Provider>
  );
}

export default App;
