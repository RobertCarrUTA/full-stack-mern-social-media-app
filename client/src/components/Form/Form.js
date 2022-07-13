import React from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";

import useStyles from "./styles";

const Form = () => {
  const classes = useStyles();

  // Handler function
  const handleSubmit = () => {};

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        className={classes.form}
        onSubmit={handleSubmit}
      >
        <Typography variant="h6">Creating a Memory</Typography>
      </form>
    </Paper>
  );
};

export default Form;
