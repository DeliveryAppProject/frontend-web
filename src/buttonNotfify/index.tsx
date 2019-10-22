import React from 'react';

import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import './index.css'
const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    button: {
      margin: theme.spacing(1),
      backgroundColor: "#F2F56F",

    },
    input: {
      display: 'none',
    },
  }),
);

export default function ContainedButtons() {
  const classes = useStyles();
  return (
    <div >
        <Button variant="contained" id="setCor" className={classes.button}>
            Enviar Notificação
        </Button>
    </div>
    );
}