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
  GET_STARRED_NOTES,
} from '../types';

export default (state, action) => {
  const { type, payload } = action;
  let items, starredItems;

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
      items = JSON.parse(localStorage.getItem('notes'));
      items.forEach((note, index) => {
        if (note.id === payload) items.splice(index, 1);
      });

      localStorage.setItem('notes', JSON.stringify(items));

      return { ...state, notes: items };

    case GET_STARRED_NOTES:
      if (localStorage.getItem('starredNotes') !== null) {
        starredItems = JSON.parse(localStorage.getItem('starredNotes'));
      } else {
        starredItems = [];
      }

      return { ...state, starredNotes: starredItems };

    case SET_STAR:
      items = JSON.parse(localStorage.getItem('notes'));
      const find = items.filter((note) => note.id === payload);
      find[0].starred = true;

      if (localStorage.getItem('starredNotes') !== null) {
        starredItems = JSON.parse(localStorage.getItem('starredNotes'));
        starredItems.push(find[0]);
        localStorage.setItem('starredNotes', JSON.stringify(starredItems));
      } else {
        starredItems = [find[0]];
        localStorage.setItem('starredNotes', JSON.stringify(starredItems));
      }

      items = items.filter((note) => note.id !== payload);
      localStorage.setItem('notes', JSON.stringify(items));

      return {
        ...state,
        starredNotes: starredItems,
        notes: items,
      };

    case REMOVE_STAR:
      starredItems = JSON.parse(localStorage.getItem('starredNotes'));
      items = JSON.parse(localStorage.getItem('notes'));

      const starItem = starredItems.filter((note) => note.id === payload);
      starItem[0].starred = false;

      items.push(starItem[0]);
      localStorage.setItem('notes', JSON.stringify(items));

      starredItems = starredItems.filter((note) => note.id !== payload);
      localStorage.setItem('starredNotes', JSON.stringify(starredItems));

      return {
        ...state,
        notes: items,
        starredNotes: starredItems,
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

      starredItems = JSON.parse(localStorage.getItem('starredNotes'));

      starredItems.forEach((note, index) => {
        if (note.id === updatedStarNote.id)
          starredItems.splice(index, 1, updatedStarNote);
      });

      localStorage.setItem('starredNotes', JSON.stringify(starredItems));

      return {
        ...state,
        currentNote: null,
        starredNotes: starredItems,
        mode: 'add',
      };

    case DELETE_STAR_NOTE:
      starredItems = JSON.parse(localStorage.getItem('starredNotes'));
      starredItems.forEach((note, index) => {
        if (note.id === payload) starredItems.splice(index, 1);
      });

      localStorage.setItem('starredNotes', JSON.stringify(starredItems));

      return { ...state, starredNotes: starredItems };

    case BACK_STATE:
      return { ...state, currentNote: null, mode: 'add' };

    default:
      return state;
  }
};
