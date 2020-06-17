import React, { Fragment } from 'react';
import CreateNote from '../../layout/CreateNote/CreateNote';
import NoteGrid from '../../layout/NoteGrid/NoteGrid';
import Toast from '../../utils/Toast/Toast';

const Home = () => {
  return (
    <Fragment>
      <CreateNote />
      <NoteGrid />
      <Toast />
    </Fragment>
  );
};

export default Home;
