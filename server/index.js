// Usually on the backend we would use something like
// const express = require('express');
// But with the newer versions of Node, we can just use import syntax
// import is a lot more modern and easier to use

// Although to do this we need to go into server/package.json and change a few things
// Comments will be left here to explain because .JSON is data only, no comments
// Add these two lines
// "type": "module", (line 6)
// "start": "nodemon index.js" (line 8)
import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

import postRoutes from "./routes/posts.js";

const app = express();

// Adding a "/posts" prefix to all routes
app.use("/posts", postRoutes);

// Setting up the body parser to properly send the requests
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

// The connection URL to our MongoDB Atlas database cluster
const CONNECTION_URL =
  // For password encoding (if you run into errors from special characters):
  // https://www.mongodb.com/docs/atlas/troubleshoot-connection/#special-characters-in-connection-string-password
  "mongodb+srv://robertcarr:scyUuCXaIzo2lBaT@reactsocialmediadb.0jue8.mongodb.net/?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));

// The below line of code is now deprecated, running it will cause errors
// mongoose.set("useFindAndModify", false);
