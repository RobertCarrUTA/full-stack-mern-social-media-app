import React, { useState } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";

import useStyles from "./styles";

const Form = () => {
  const classes = useStyles();
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });

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
        {/* This TextField is for who is creating a post */}
        <TextField
          name="creator"
          variant="outlined"
          label="Creator"
          fullWidth
          value={postData.creator}
          // This on change allows us to only change the creator value of postData.creator even with multiple TextFields
          // We have to spread the postData and then set the e.target.value to the creator attribute
          onChange={(e) =>
            setPostData({ ...postData, creator: e.target.value })
          }
        />
      </form>
    </Paper>
  );
};

export default Form;
