import React from 'react';
import { Card, Grid, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  grid: {
    display: 'flex',
  },
  card: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'column',
    width: '100%',
    padding: '1rem',
    margin: '1rem',
  },
}));

const Home = () => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid item className={classes.grid}>
        <Card className={classes.card}>
          <h1>Hello</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Assumenda
            optio ducimus repellendus quae quam sit quidem facilis quibusdam hic
            odio.
          </p>
        </Card>
      </Grid>
      <Grid item className={classes.grid}>
        <Card className={classes.card}>
          <h1>Hello</h1>
        </Card>
      </Grid>
      <Grid item className={classes.grid}>
        <Card className={classes.card}>
          <h1>Hello</h1>
        </Card>
      </Grid>
      <Grid item className={classes.grid}>
        <Card className={classes.card}>
          <h1>Hello</h1>
        </Card>
      </Grid>
      <Grid item className={classes.grid}>
        <Card className={classes.card}>
          <h1>Hello</h1>
        </Card>
      </Grid>
    </Grid>
  );
};

export default Home;
