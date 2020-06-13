import {
  ADD_NOTE,
  EDIT_NOTE,
  UPDATE_NOTE,
  BACK_STATE,
  DELETE_NOTE,
  SET_STAR,
  REMOVE_STAR,
} from '../types';

export default (state, action) => {
  const { type, payload } = action;

  switch (type) {
    case ADD_NOTE:
      return { ...state, notes: [...state.notes, payload] };

    case EDIT_NOTE:
      const findNote = state.notes.filter((note) => note.id === payload);
      return { ...state, currentNote: findNote[0], mode: 'edit' };

    case UPDATE_NOTE:
      const updatedNote = {
        ...state.currentNote,
        ...payload,
      };

      state.notes.forEach((note, index) => {
        if (note.id === updatedNote.id)
          state.notes.splice(index, 1, updatedNote);
      });

      return { ...state, currentNote: null, notes: state.notes, mode: 'add' };

    case DELETE_NOTE:
      state.notes.forEach((note, index) => {
        if (note.id === payload) state.notes.splice(index, 1);
      });

      return { ...state, notes: state.notes };

    case SET_STAR:
      const find = state.notes.filter((note) => note.id === payload);
      find[0].starred = true;

      return {
        ...state,
        starredNotes: [...state.starredNotes, find[0]],
        notes: state.notes.filter((note) => note.id !== payload),
      };

    case REMOVE_STAR:
      const starItem = state.starredNotes.filter((note) => note.id === payload);
      starItem[0].starred = false;

      return {
        ...state,
        notes: [...state.notes, starItem[0]],
        starredNotes: state.starredNotes.filter((note) => note.id !== payload),
      };

    case BACK_STATE:
      return { ...state, currentNote: null, mode: 'add' };

    default:
      return state;
  }
};
