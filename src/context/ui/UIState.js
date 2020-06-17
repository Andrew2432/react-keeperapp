import React, { useReducer } from 'react';
import UIContext from './UIContext';
import uiReducer from './uiReducer';
import { SET_THEME, TOGGLE_DRAWER, SET_TOAST, REMOVE_TOAST } from '../types';

const UIState = (props) => {
  const initialState = {
    theme: 'dark',
    openDrawer: false,
    showToast: false,
    toastMessage: null,
  };

  const [state, dispatch] = useReducer(uiReducer, initialState);

  const setTheme = () => {
    dispatch({ type: SET_THEME });
  };

  const toggleDrawer = () => {
    dispatch({ type: TOGGLE_DRAWER });
  };

  const displayToast = (toast) => {
    dispatch({ type: SET_TOAST, payload: toast });
  };

  const hideToast = () => {
    dispatch({ type: REMOVE_TOAST });
  };

  return (
    <UIContext.Provider
      value={{
        theme: state.theme,
        drawer: state.openDrawer,
        toastMessage: state.toastMessage,
        showToast: state.showToast,
        setTheme,
        toggleDrawer,
        displayToast,
        hideToast,
      }}
    >
      {props.children}
    </UIContext.Provider>
  );
};

export default UIState;
