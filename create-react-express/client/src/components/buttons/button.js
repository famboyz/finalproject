import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles(theme => ({
  button: {
    margin: theme.spacing(1)
  },
  input: {
    display: "none"
  }
}));

const bStyle = {
  position: "absolute",
  left: "50%",
  top: "65%",
  transform: "translate(-50%, -50%)"
};

export default function ContainedButtons() {
  const classes = useStyles();

  return (
    <div>
      <Button
        style={pStyle}
        variant="contained"
        color="primary"
        className={classes.button}
      >
        Signup
      </Button>
    </div>
  );
}
