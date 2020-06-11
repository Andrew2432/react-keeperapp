import React, { useReducer } from 'react';
import NoteContext from './NoteContext';
import noteReducer from './noteReducer';
import { ADD_NOTE } from '../types';
import { v4 as uuidv4 } from 'uuid';

const NoteState = (props) => {
  const initialState = {
    notes: [],
    currentNote: null,
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

  return (
    <NoteContext.Provider
      value={{ notes: state.notes, currentNote: state.currentNote, addNote }}
    >
      {props.children}
    </NoteContext.Provider>
  );
};

export default NoteState;
