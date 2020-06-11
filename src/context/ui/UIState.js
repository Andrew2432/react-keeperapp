import React, { useReducer } from 'react';
import UIContext from './UIContext';
import uiReducer from './uiReducer';
import { SET_THEME } from '../types';

const UIState = (props) => {
  const initialState = {
    theme: 'dark',
  };

  const [state, dispatch] = useReducer(uiReducer, initialState);

  const setTheme = () => {
    dispatch({ type: SET_THEME });
  };

  return (
    <UIContext.Provider value={{ theme: state.theme, setTheme }}>
      {props.children}
    </UIContext.Provider>
  );
};

export default UIState;
