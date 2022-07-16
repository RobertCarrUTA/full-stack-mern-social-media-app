// all handlers for all routes
import mongoose from "mongoose";
import PostMessage from "../models/postMessage.js";

export const getPosts = async (req, res) => {
  try {
    // Try to retrieve all the posts we currently have in the database (asynchronous action - takes time, use await)
    const postMessages = await PostMessage.find();

    // To see HTTP status codes (.status()):
    // https://www.restapitutorial.com/httpstatuscodes.html
    res.status(200).json(postMessages);
  } catch {
    res.status(404).json({ message: error.message });
  }
};

export const createPost = async (req, res) => {
  // With posts requests we have access to request.body
  const post = req.body;
  const newPost = new PostMessage(post);

  try {
    await newPost.save();

    res.status(201).json(newPost);
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

export const updatePost = async (req, res) => {
  // Rename id to _id
  const { id: _id } = req.params;
  const post = req.body;

  if (!mongoose.Types.ObjectId.isValid(_id))
    return res.status(404).send("No post with that id");

  const updatedPost = await PostMessage.findByIdAndUpdate(_id, post, {
    new: true,
  });

  res.json(updatedPost);
};
