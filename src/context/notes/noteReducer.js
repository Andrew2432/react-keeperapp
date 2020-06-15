import {
  GET_NOTES,
  ADD_NOTE,
  EDIT_NOTE,
  UPDATE_NOTE,
  BACK_STATE,
  DELETE_NOTE,
  SET_STAR,
  REMOVE_STAR,
  EDIT_STAR_NOTE,
  UPDATE_STAR_NOTE,
  DELETE_STAR_NOTE,
} from '../types';

export default (state, action) => {
  const { type, payload } = action;
  let items;

  switch (type) {
    case GET_NOTES:
      if (localStorage.getItem('notes') !== null) {
        items = JSON.parse(localStorage.getItem('notes'));
      } else {
        items = [];
      }
      return { ...state, notes: items };

    case ADD_NOTE:
      if (localStorage.getItem('notes') !== null) {
        items = JSON.parse(localStorage.getItem('notes'));
        items.push(payload);
        localStorage.setItem('notes', JSON.stringify(items));
      } else {
        items = [payload];
        localStorage.setItem('notes', JSON.stringify(items));
      }
      return { ...state, notes: items };

    case EDIT_NOTE:
      const findNote = state.notes.filter((note) => note.id === payload);
      return { ...state, currentNote: findNote[0], mode: 'edit' };

    case UPDATE_NOTE:
      const updatedNote = {
        ...state.currentNote,
        ...payload,
      };

      items = JSON.parse(localStorage.getItem('notes'));
      items.forEach((note, index) => {
        if (note.id === updatedNote.id) items.splice(index, 1, updatedNote);
      });

      localStorage.setItem('notes', JSON.stringify(items));

      return { ...state, currentNote: null, notes: items, mode: 'add' };

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

    case EDIT_STAR_NOTE:
      const findStarNote = state.starredNotes.filter(
        (note) => note.id === payload
      );
      return { ...state, currentNote: findStarNote[0], mode: 'edit' };

    case UPDATE_STAR_NOTE:
      const updatedStarNote = {
        ...state.currentNote,
        ...payload,
      };

      state.starredNotes.forEach((note, index) => {
        if (note.id === updatedStarNote.id)
          state.starredNotes.splice(index, 1, updatedStarNote);
      });

      return {
        ...state,
        currentNote: null,
        starredNotes: state.starredNotes,
        mode: 'add',
      };

    case DELETE_STAR_NOTE:
      state.starredNotes.forEach((note, index) => {
        if (note.id === payload) state.starredNotes.splice(index, 1);
      });

      return { ...state, starredNotes: state.starredNotes };

    case BACK_STATE:
      return { ...state, currentNote: null, mode: 'add' };

    default:
      return state;
  }
};
