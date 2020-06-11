import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import UIState from './context/ui/UIState';

ReactDOM.render(
  <React.StrictMode>
    <UIState>
      <App />
    </UIState>
  </React.StrictMode>,
  document.getElementById('root')
);
