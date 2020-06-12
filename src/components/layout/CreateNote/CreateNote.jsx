import React, { useState, useContext, useEffect, Fragment } from 'react';
import {
  Card,
  Box,
  TextField,
  makeStyles,
  Button,
  Typography,
} from '@material-ui/core';
import NoteContext from '../../../context/notes/NoteContext';

const useStyles = makeStyles((theme) => ({
  card: {
    maxWidth: '80%',
    margin: `0 auto`,
  },
  h4: {
    marginBottom: '1rem',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    maxWidth: '60%',
    margin: `0 auto`,
    padding: '1rem',
  },
  button: {
    width: '30%',
    margin: `1rem 1rem 0 0`,
  },
}));

const CreateNote = () => {
  const classes = useStyles();
  const noteContext = useContext(NoteContext);
  const { addNote, mode, currentNote, updateNote, backState } = noteContext;

  const [note, setNote] = useState({
    title: '',
    content: '',
  });

  useEffect(() => {
    if (mode === 'edit') fillFields();
    // eslint-disable-next-line
  }, [mode]);

  const onChange = (e) =>
    setNote({
      ...note,
      [e.target.name]: e.target.value,
    });

  const clearFields = () => {
    setNote({
      title: '',
      content: '',
    });
  };

  const fillFields = () => {
    const { title, content } = currentNote;
    setNote({
      title,
      content,
    });
  };

  const handleAdd = (e) => {
    e.preventDefault();
    const { title, content } = note;
    if (title.trim() === '' || content.trim() === '')
      alert('Please enter a note');
    else {
      addNote(note);
      alert('Added successfully');
      clearFields();
    }
  };

  const handleUpdate = (e) => {
    e.preventDefault();
    const { title, content } = note;
    if (title.trim() === '' || content.trim() === '')
      alert('Please enter a note');
    else {
      updateNote(note);
      alert('Updated successfully');
      clearFields();
    }
  };

  const handleBack = () => {
    clearFields();
    backState();
  };

  return (
    <Card className={classes.card} variant="elevation" elevation={12}>
      <form noValidate autoComplete="off" className={classes.form}>
        <Typography variant="h4" className={classes.h4}>
          Add a note
        </Typography>
        <TextField
          className={classes.input}
          id="standard-basic"
          name="title"
          placeholder="Enter a title"
          value={note.title}
          onChange={onChange}
        />
        <TextField
          className={classes.input}
          name="content"
          placeholder="Enter content"
          value={note.content}
          onChange={onChange}
          multiline={true}
          rows={5}
        />
        <Fragment>
          {mode === 'add' ? (
            <Button
              className={classes.button}
              variant="contained"
              color="primary"
              onClick={handleAdd}
            >
              Add
            </Button>
          ) : (
            <Box>
              <Button
                className={classes.button}
                variant="contained"
                color="secondary"
                onClick={handleUpdate}
              >
                Update
              </Button>
              <Button
                className={classes.button}
                variant="contained"
                color="default"
                onClick={handleBack}
              >
                Back
              </Button>
            </Box>
          )}
        </Fragment>
      </form>
    </Card>
  );
};

export default CreateNote;
