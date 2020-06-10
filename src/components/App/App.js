import React, { Fragment } from 'react';
import './App.css';
import { CssBaseline } from '@material-ui/core';
import Navbar from '../layout/Navbar/Navbar';

function App() {
  return (
    <Fragment>
      <CssBaseline />
      <Navbar />
    </Fragment>
  );
}

export default App;
