import mongoose from "mongoose";

// Create a mongoose schema, a function that contains an object
// mongoose allows us to use uniformity with our documents
// we are specifying that each post is required to have these things
const postSchema = mongoose.Schema({
  title: String,
  message: String,
  creator: String,
  tags: [String],
  selectedFile: String,
  likeCount: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

// Turning our schema into a model
const PostMessage = mongoose.model("PostMessage", postSchema);

export default PostMessage;
