import express from "express";
import bodyParser from "body-parser";
import mongoose from "mongoose";
import cors from "cors";

// Usually on the backend we would use something like
// const express = require('express');
// But with the newer versions of Node, we can just use import syntax
// import is a lot more modern and easier to use

// Although to do this we need to go into server/package.json and change a few things
// Comments will be left here to explain because .JSON is data only, no comments
// Add these two lines
// "type": "module", (line 6)
// "start": "nodemon index.js" (line 8)
