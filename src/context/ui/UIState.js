import React, { useReducer } from 'react';
import UIContext from './UIContext';
import uiReducer from './uiReducer';
import { SET_THEME, TOGGLE_DRAWER } from '../types';

const UIState = (props) => {
  const initialState = {
    theme: 'dark',
    openDrawer: false,
  };

  const [state, dispatch] = useReducer(uiReducer, initialState);

  const setTheme = () => {
    dispatch({ type: SET_THEME });
  };

  const toggleDrawer = () => {
    dispatch({ type: TOGGLE_DRAWER });
  };

  return (
    <UIContext.Provider
      value={{
        theme: state.theme,
        drawer: state.openDrawer,
        setTheme,
        toggleDrawer,
      }}
    >
      {props.children}
    </UIContext.Provider>
  );
};

export default UIState;
