import React from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    Container: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexFlow: 'column',
        width: '100%',
        height: '100%',
        margin: 0,
        padding: 0,
        pointerEvents: 'none',
        color:"white",
      }
});

export default function Wrapper(props) {
  const classes = useStyles()
  return <div className={classes.Container}>{props.children}</div>;
}
