import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Elements from '../elements'
import '../styles/display-grid.css'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 834,
  },
//   image: {
//     width: 128,
//     height: 128,
//   },
//   img: {
//     margin: 'auto',
//     display: 'block',
//     maxWidth: '100%',
//     maxHeight: '100%',
//   },
}));

export default function ComplexGrid() {
  const classes = useStyles();

  return (
    <div id="grid" className={classes.root}>
      <Paper style={{ backgroundColor: '#1D1D1D', height: '100vh', width: '300px', position: 'absolute', left:0, borderRadius: "0px"}} className={classes.paper}>
          <Grid item sm={12} container>
            <Grid item sm container direction="column" spacing={2}>
                <Elements />
             </Grid>
          </Grid>
      </Paper>
    </div>
  );          
}