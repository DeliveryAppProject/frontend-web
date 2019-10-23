import React from 'react';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';

import Boxone from '../boxOne'
import Boxtwo from '../boxTwo'
import Boxthree from '../boxThree'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginTop: "50px;"
    },
    paper: {
      padding: theme.spacing(2),
      width: "274px",
      height: "189px"
    },
  }),
);

export default function ComplexGrid() {
  const classes = useStyles();

  return (
    <div style={{display: "flex"}} className={classes.root}>

      <Paper className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={"auto"} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  <Boxone />
                </Typography>
                <Typography style={{textAlign: "center", color: "#4E4E4E", marginTop: "20px"}} variant="h5" gutterBottom>
                  Pedidos do dia
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      {/* Segundo boxe */}
      <Paper style={{marginLeft: "40px"}} className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={"auto"} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  <Boxtwo />
                </Typography>
                <Typography style={{textAlign: "center", color: "#4E4E4E", marginTop: "20px"}} variant="h5" gutterBottom>
                  Pedidos Entregue
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>

      {/* Terceiro boxe */}
      <Paper style={{marginLeft: "40px"}} className={classes.paper}>
        <Grid container spacing={2}>
          <Grid item xs={"auto"} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                  <Boxthree />
                </Typography>
                <Typography style={{textAlign: "center", color: "#4E4E4E", marginTop: "20px"}} variant="h5" gutterBottom>
                  Pedidos Pendente
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Paper>
    </div>
    
  );
}
