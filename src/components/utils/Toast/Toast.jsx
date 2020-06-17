import React, { useContext } from 'react';
import { Snackbar, makeStyles } from '@material-ui/core';
import MuiAlert from '@material-ui/lab/Alert';
import UIContext from '../../../context/ui/UIContext';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
  },
}));

const Toast = () => {
  const classes = useStyles();
  const uiContext = useContext(UIContext);
  const { showToast, toastMessage, hideToast } = uiContext;

  return (
    showToast && (
      <div className={classes.root}>
        <Snackbar open={showToast} autoHideDuration={3000} onClose={hideToast}>
          <MuiAlert
            elevation={6}
            variant="filled"
            onClose={hideToast}
            severity={toastMessage.type}
          >
            {toastMessage.message}
          </MuiAlert>
        </Snackbar>
      </div>
    )
  );
};

export default Toast;
