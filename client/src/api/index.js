import axios from "axios";

// This is the url that is pointing to our backend route
const url = "http://localhost:5000/posts";

export const fetchPosts = () => axios.get(url);
