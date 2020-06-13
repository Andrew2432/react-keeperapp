import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import {
  Grid,
  Card,
  CardHeader,
  CardContent,
  Typography,
  CardActions,
  IconButton,
  makeStyles,
  Divider,
} from '@material-ui/core';

import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import StarIcon from '@material-ui/icons/Star';
import NoteContext from '../../../context/notes/NoteContext';

const useStyles = makeStyles((theme) => ({
  card: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    flexWrap: 'wrap',
    minWidth: '40%',
    margin: '1rem',
    padding: '1rem',
  },
  cardAction: {
    margin: 0,
    padding: 0,
  },
  pin: {
    order: -1,
  },
  fab: {
    position: 'absolute',
    bottom: '2rem',
    right: '1rem',
    margin: theme.spacing(1),
  },
}));

const NoteItem = ({ id, title, timestamp, content }) => {
  const classes = useStyles();
  const noteContext = useContext(NoteContext);
  const { editNote, deleteNote, setStar } = noteContext;

  const handleDelete = (id) => {
    window.confirm('Are you sure?') && deleteNote(id);
  };

  return (
    <Grid item className={classes.grid}>
      <Card className={classes.card} variant="elevation" elevation={12}>
        <CardHeader title={title} subheader={timestamp} />
        <CardContent>
          <Typography paragraph>{content}</Typography>
        </CardContent>
        <Divider />
        <CardActions disableSpacing>
          <IconButton aria-label="edit" onClick={() => editNote(id)}>
            <EditIcon color="action" />
          </IconButton>
          <IconButton aria-label="delete" onClick={() => handleDelete(id)}>
            <DeleteIcon color="error" />
          </IconButton>
          <IconButton aria-label="star" onClick={() => setStar(id)}>
            <StarIcon />
          </IconButton>
        </CardActions>
      </Card>
    </Grid>
  );
};

NoteItem.propTypes = {
  title: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  starred: PropTypes.bool.isRequired,
};

export default NoteItem;
