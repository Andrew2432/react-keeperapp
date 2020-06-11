import { ADD_NOTE } from '../types';

export default (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_NOTE:
      return { ...state, notes: [...state.notes, payload] };

    default:
      return state;
  }
};
