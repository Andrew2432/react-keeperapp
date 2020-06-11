import React, { useContext } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import { CssBaseline, ThemeProvider, createMuiTheme } from '@material-ui/core';
import Navbar from '../layout/Navbar/Navbar';
import Home from '../pages/Home/Home';
import About from '../pages/About/About';
import UIContext from '../../context/ui/UIContext';

const App = () => {
  const uiContext = useContext(UIContext);
  const { theme } = uiContext;

  const appTheme = createMuiTheme({
    palette: {
      type: theme,
    },
  });

  return (
    <Router>
      <ThemeProvider theme={appTheme}>
        <CssBaseline />
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
        </Switch>
      </ThemeProvider>
    </Router>
  );
};

export default App;
