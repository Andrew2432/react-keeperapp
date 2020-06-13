import React, { useContext, Fragment } from 'react';
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
  const { notes, starredNotes } = noteContext;

  return (
    <Container>
      <Grid container className={classes.grid}>
        {starredNotes.length > 0 && (
          <Fragment>
            <Typography variant="h5">Starred notes</Typography>
            {starredNotes.map(createStarredNotes)}
          </Fragment>
        )}
      </Grid>
      <Divider />
      <Grid container className={classes.grid}>
        {notes.length > 0 && notes.map(createNotes)}
      </Grid>
      {!starredNotes.length && !notes.length && (
        <Typography variant="h5" className={classes.message}>
          No notes present.
        </Typography>
      )}
    </Container>
  );
};

export default NoteGrid;
