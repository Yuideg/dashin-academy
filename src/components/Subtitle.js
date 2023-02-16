import React from "react";
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
    Container: {
        margin: "24px auto 0",
        padding: 0,
        width: "80%",
        textAlign: "center",
        fontSize: "1.75rem",
        color:"white",

      },
});


export default function Subtitle(props) {
  const classes = useStyles()
  return <h2 className={classes.Container}>{props.children}</h2>;
}
