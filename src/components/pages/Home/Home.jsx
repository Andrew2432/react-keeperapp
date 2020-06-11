import React, { Fragment } from 'react';
import CreateNote from '../../layout/CreateNote/CreateNote';
import NoteGrid from '../../layout/NoteGrid/NoteGrid';

const Home = () => {
  return (
    <Fragment>
      <CreateNote />
      <NoteGrid />
    </Fragment>
  );
};

export default Home;
