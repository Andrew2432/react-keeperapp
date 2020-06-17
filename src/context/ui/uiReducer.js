import { SET_THEME, TOGGLE_DRAWER, SET_TOAST, REMOVE_TOAST } from '../types';

export default (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case SET_THEME:
      return { ...state, theme: state.theme === 'dark' ? 'light' : 'dark' };

    case TOGGLE_DRAWER:
      return { ...state, openDrawer: !state.openDrawer };

    case SET_TOAST:
      return { ...state, showToast: true, toastMessage: payload };

    case REMOVE_TOAST:
      return { ...state, showToast: false, toastMessage: null };

    default:
      return state;
  }
};
