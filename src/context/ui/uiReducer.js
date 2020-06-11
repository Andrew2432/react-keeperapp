import { SET_THEME } from '../types';

export default (state, action) => {
  const { type } = action;
  switch (type) {
    case SET_THEME:
      return { ...state, theme: state.theme === 'dark' ? 'light' : 'dark' };

    default:
      return state;
  }
};
