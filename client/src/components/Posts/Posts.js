import React from "react";
import { useSelector } from "react-redux";
import { Grid, CircularProgress } from "@material-ui/core";

import Post from "./Post/Post";
import useStyles from "./styles";

const Posts = ({ setCurrentId }) => {
  const classes = useStyles();
  const posts = useSelector((state) => state.posts);

  return (
    // If posts.length = 0, 0 is true, if posts.length > 0 then it is false
    //  If it is true, it will show the Grid
    //  If it is finally, it will show the posts on their own
    !posts.length ? (
      <CircularProgress />
    ) : (
      // A grid of our posts
      <Grid
        className={classes.container}
        container
        alignItems="stretch"
        spacing={3}
      >
        {posts.map((post) => (
          <Grid key={post._id} item xs={12} sm={6}>
            {/* In the below post, we are prop drilling, sending the same prop over and over again to the most child component */}
            <Post post={post} setCurrentId={setCurrentId} />
          </Grid>
        ))}
      </Grid>
    )
  );
};

export default Posts;
