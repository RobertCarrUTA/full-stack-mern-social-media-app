import React, { useState } from "react";
import { TextField, Button, Typography, Paper } from "@material-ui/core";
import FileBase from "react-file-base64";
import { useDispatch } from "react-redux";

import useStyles from "./styles";
import { createPost } from "../../actions/posts";

const Form = () => {
  const [postData, setPostData] = useState({
    creator: "",
    title: "",
    message: "",
    tags: "",
    selectedFile: "",
  });
  const classes = useStyles();
  const dispatch = useDispatch();

  // Our goal in handleSubmit is to send an output request with all
  // the information the user typed in once the user submits
  const handleSubmit = (e) => {
    // This prevents the refresh in the browser
    e.preventDefault();

    // Once this action is dispatched, we go to reducers and go to the case 'CREATE'
    dispatch(createPost(postData));
  };

  const clear = () => {};

  return (
    <Paper className={classes.paper}>
      <form
        autoComplete="off"
        noValidate
        // classes.root allows for the padding and margin
        className={`${classes.root} ${classes.form}`}
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

        {/* This TextField is for the title of the post */}
        <TextField
          name="title"
          variant="outlined"
          label="Title"
          fullWidth
          value={postData.title}
          onChange={(e) => setPostData({ ...postData, title: e.target.value })}
        />

        {/* This TextField is for the message of the post */}
        <TextField
          name="message"
          variant="outlined"
          label="Message"
          fullWidth
          value={postData.message}
          onChange={(e) =>
            setPostData({ ...postData, message: e.target.value })
          }
        />

        {/* This TextField is for the tags of the post */}
        <TextField
          name="tags"
          variant="outlined"
          label="Tags"
          fullWidth
          value={postData.tags}
          onChange={(e) => setPostData({ ...postData, tags: e.target.value })}
        />

        <div className={classes.fileInput}>
          <FileBase
            type="file"
            multiple={false}
            onDone={({ base64 }) =>
              setPostData({ ...postData, selectedFile: base64 })
            }
          />
        </div>

        {/* Submission button */}
        <Button
          className={classes.buttonSubmit}
          variant="contained"
          color="primary"
          size="large"
          type="submit"
          fullWidth
        >
          Submit
        </Button>

        {/* Clear form button */}
        <Button
          variant="contained"
          color="secondary"
          size="small"
          onClick={clear}
          fullWidth
        >
          Clear
        </Button>
      </form>
    </Paper>
  );
};

export default Form;
