import { SET_THEME, TOGGLE_DRAWER } from '../types';

export default (state, action) => {
  const { type } = action;
  switch (type) {
    case SET_THEME:
      return { ...state, theme: state.theme === 'dark' ? 'light' : 'dark' };

    case TOGGLE_DRAWER:
      return { ...state, openDrawer: !state.openDrawer };

    default:
      return state;
  }
};
