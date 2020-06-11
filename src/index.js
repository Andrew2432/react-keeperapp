import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import UIState from './context/ui/UIState';
import NoteState from './context/notes/NoteState';

ReactDOM.render(
  <React.StrictMode>
    <UIState>
      <NoteState>
        <App />
      </NoteState>
    </UIState>
  </React.StrictMode>,
  document.getElementById('root')
);
