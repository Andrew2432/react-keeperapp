import {
  ADD_NOTE,
  EDIT_NOTE,
  UPDATE_NOTE,
  BACK_STATE,
  DELETE_NOTE,
  TOGGLE_STAR,
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

    case TOGGLE_STAR:
      const find = state.notes.filter((note) => note.id === payload);
      if (find[0] !== undefined && !find[0].starred) {
        find[0].starred = true;
        state.notes = state.notes.filter((note) => note.id !== payload);
        return {
          ...state,
          starredNotes: [...state.starredNotes, find[0]],
          notes: state.notes,
        };
      } else {
        const starFind = state.starredNotes.filter(
          (note) => note.id === payload
        );
        if (starFind[0].starred) {
          starFind[0].starred = false;
          state.starredNotes = state.starredNotes.filter(
            (note) => note.id !== payload
          );
          return {
            ...state,
            starredNotes: state.starredNotes,
            notes: [...state.notes, starFind[0]],
          };
        }
      }
      break;

    case BACK_STATE:
      return { ...state, currentNote: null, mode: 'add' };

    default:
      return state;
  }
};
