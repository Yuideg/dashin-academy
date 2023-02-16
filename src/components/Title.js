import React from 'react';
import { makeStyles } from '@mui/styles';
const useStyles = makeStyles({
    Container: {
        margin: "0 auto",
        padding: 0,
        textTransform: 'uppercase',
        width: '90%',
        textAlign: "center",
        fontSize: "3.5rem",
        color:"white",

      },

});

export default function Title(props) {
  const classes = useStyles()
  return <h1 className={classes.Container}>{props.children}</h1>;
}
