import React, { useContext } from 'react';
import './App.css';
import {
  CssBaseline,
  ThemeProvider,
  createMuiTheme,
  Container,
  Card,
} from '@material-ui/core';
import Navbar from '../layout/Navbar/Navbar';
import UIContext from '../../context/ui/UIContext';

function App() {
  const uiContext = useContext(UIContext);
  const { theme } = uiContext;

  const appTheme = createMuiTheme({
    palette: {
      type: theme,
    },
  });

  return (
    <ThemeProvider theme={appTheme}>
      <CssBaseline />
      <Navbar />
      <Container>
        <Card>
          <h1>Hello</h1>
        </Card>
        <Card>
          <h1>Hello</h1>
        </Card>
        <Card>
          <h1>Hello</h1>
        </Card>
        <Card>
          <h1>Hello</h1>
        </Card>
        <Card>
          <h1>Hello</h1>
        </Card>
        <Card>
          <h1>Hello</h1>
        </Card>
        <Card>
          <h1>Hello</h1>
        </Card>
      </Container>
    </ThemeProvider>
  );
}

export default App;
