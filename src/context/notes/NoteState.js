import React, { useReducer } from 'react';
import NoteContext from './NoteContext';
import noteReducer from './noteReducer';
import { ADD_NOTE, EDIT_NOTE, UPDATE_NOTE, BACK_STATE } from '../types';
import { v4 as uuidv4 } from 'uuid';

const NoteState = (props) => {
  const initialState = {
    notes: [],
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
    const newNote = {
      ...note,
      id: uuidv4(),
      timestamp: getTimestamp(),
    };

    dispatch({
      type: ADD_NOTE,
      payload: newNote,
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

  const backState = () => {
    dispatch({ type: BACK_STATE });
  };

  return (
    <NoteContext.Provider
      value={{
        notes: state.notes,
        currentNote: state.currentNote,
        mode: state.mode,
        addNote,
        editNote,
        updateNote,
        backState,
      }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
