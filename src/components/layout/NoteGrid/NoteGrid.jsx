import React, { useContext, useEffect, Fragment } from 'react';
import NoteItem from '../NoteItem/NoteItem';
import StarredNote from '../NoteItem/StarredNote';
import {
  Grid,
  makeStyles,
  Container,
  Typography,
  Divider,
} from '@material-ui/core';
import NoteContext from '../../../context/notes/NoteContext';

const useStyles = makeStyles((theme) => ({
  grid: {
    display: 'flex',
    flexDirection: 'row',
  },
  message: {
    textAlign: 'center',
    margin: `5rem auto`,
  },
}));

const createNotes = (note) => <NoteItem key={note.id} {...note} />;

const createStarredNotes = (note) => <StarredNote key={note.id} {...note} />;

const NoteGrid = () => {
  const classes = useStyles();
  const noteContext = useContext(NoteContext);
  const { notes, starredNotes, getNotes, getStarredNotes } = noteContext;

  useEffect(() => {
    getStarredNotes();
    getNotes();
    // eslint-disable-next-line
  }, []);

  return (
    <Container>
      {starredNotes.length > 0 && (
        <Fragment>
          <Typography variant="h4">Starred notes</Typography>
          <Grid container className={classes.grid}>
            {starredNotes.map(createStarredNotes)}
          </Grid>
        </Fragment>
      )}
      <Divider />
      {notes.length > 0 && (
        <Fragment>
          <Typography variant="h4">Your notes</Typography>
          <Grid container className={classes.grid}>
            {notes.map(createNotes)}
          </Grid>
        </Fragment>
      )}
      {!starredNotes.length && !notes.length && (
        <Typography variant="h5" className={classes.message}>
          No notes present.
        </Typography>
      )}
    </Container>
  );
};

export default NoteGrid;
