import React from 'react';
import NoteItem from '../NoteItem/NoteItem';
import { Grid, makeStyles, Container } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  grid: {
    display: 'flex',
    flexDirection: 'row',
  },
}));

const createNotes = (note) => {
  return <NoteItem key={note.id} {...note} />;
};

const NoteGrid = () => {
  const classes = useStyles();
  const notes = [
    {
      id: 1,
      title: 'Hello',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, dolor.',
      timestamp: 'June 11, 2020',
    },
    {
      id: 2,
      title: 'Hello',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, dolor.',
      timestamp: 'June 11, 2020',
    },
    {
      id: 3,
      title: 'Hello',
      content:
        'Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima, dolor.',
      timestamp: 'June 11, 2020',
    },
  ];

  return (
    <Container>
      <Grid container className={classes.grid}>
        {notes.map(createNotes)}
      </Grid>
    </Container>
  );
};

export default NoteGrid;
