import React, { useReducer } from 'react';
import NoteContext from './NoteContext';
import noteReducer from './noteReducer';
import {
  ADD_NOTE,
  EDIT_NOTE,
  UPDATE_NOTE,
  BACK_STATE,
  DELETE_NOTE,
  REMOVE_STAR,
  SET_STAR,
  EDIT_STAR_NOTE,
  UPDATE_STAR_NOTE,
} from '../types';
import { v4 as uuidv4 } from 'uuid';

const NoteState = (props) => {
  const initialState = {
    notes: [],
    starredNotes: [],
    currentNote: null,
    mode: 'add',
  };

  const [state, dispatch] = useReducer(noteReducer, initialState);

  const getTimestamp = () =>
    new Date().toLocaleDateString('en-IN', {
      weekday: 'long',
      year: 'numeric',
      month: 'short',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      hour12: true,
    });

  const addNote = (note) => {
    dispatch({
      type: ADD_NOTE,
      payload: {
        ...note,
        id: uuidv4(),
        timestamp: getTimestamp(),
        starred: false,
      },
    });
  };

  const editNote = (id) => {
    dispatch({ type: EDIT_NOTE, payload: id });
  };

  const updateNote = (note) => {
    dispatch({
      type: UPDATE_NOTE,
      payload: note,
    });
  };

  const deleteNote = (id) => {
    dispatch({ type: DELETE_NOTE, payload: id });
  };

  const setStar = (id) => {
    dispatch({ type: SET_STAR, payload: id });
  };

  const removeStar = (id) => {
    dispatch({ type: REMOVE_STAR, payload: id });
  };

  const editStarNote = (id) => {
    dispatch({ type: EDIT_STAR_NOTE, payload: id });
  };

  const updateStarNote = (note) => {
    dispatch({ type: UPDATE_STAR_NOTE, payload: note });
  };

  const backState = () => {
    dispatch({ type: BACK_STATE });
  };

  return (
    <NoteContext.Provider
      value={{
        notes: state.notes,
        currentNote: state.currentNote,
        starredNotes: state.starredNotes,
        mode: state.mode,
        addNote,
        editNote,
        updateNote,
        backState,
        deleteNote,
        setStar,
        removeStar,
        editStarNote,
        updateStarNote,
      }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
