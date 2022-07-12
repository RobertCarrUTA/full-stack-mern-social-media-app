// A reducer is a function that is equal to a function that accepts
// the state and also the action, then based on the action type, return the state or the state changed by the action
// In general, you will have a lot of if statements so we should use a switch statement instead
// In reducers, the state always has to be equal to something
// In this case, our state can simply be named posts because we are in a posts reducer
export default (posts = [], action) => {
  switch (action.type) {
    // Fetch all the posts
    case "FETCH_ALL":
      return posts;
    case "CREATE":
      return posts;
    default:
      return posts;
  }
};
