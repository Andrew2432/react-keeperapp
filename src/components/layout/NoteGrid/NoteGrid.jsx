import React, { useContext } from 'react';
import NoteItem from '../NoteItem/NoteItem';
import { Grid, makeStyles, Container, Typography } from '@material-ui/core';
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

const createNotes = (note) => {
  return <NoteItem key={note.id} onClick={handleEdit} {...note} />;
};

const handleEdit = (id) => console.log(id);

const NoteGrid = () => {
  const classes = useStyles();
  const noteContext = useContext(NoteContext);
  const { notes } = noteContext;

  return (
    <Container>
      <Grid container className={classes.grid}>
        {notes.length > 0 ? (
          notes.map(createNotes)
        ) : (
          <Typography variant="h5" className={classes.message}>
            No notes present.
          </Typography>
        )}
      </Grid>
    </Container>
  );
};

export default NoteGrid;
