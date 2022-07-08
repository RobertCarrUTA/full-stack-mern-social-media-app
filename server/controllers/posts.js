// all handlers for all routes
import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
  try {
    // Try to retrieve all the posts we currently have in the database (asynchronous action - takes time, use await)
    const postMessages = await PostMessage.find();

    res.status(200).json(postMessages);
  } catch {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = (req, res) => {
  res.send("Post Creation");
};
