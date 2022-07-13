// Import our api this way so that we can easily use them because there will be so many
// example: api.fetchPosts
import * as api from "../api/index.js";

// Action Creators (using React thunk)
export const getPosts = () => async (dispatch) => {
  // Try to fetch all the data from the API
  try {
    // Destructure the data
    const { data } = await api.fetchPosts();

    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
