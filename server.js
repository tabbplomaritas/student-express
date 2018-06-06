"use strict";
// TODO Require the Express module
const express = require("express");
// TODO Declare app and initialize it to the object returned from calling the Express function
const app = express();
// TODO Require the body-parser module
const bodyParser = require("body-parser");
// TODO Tell our application to use the three modules from the routes folder
const courses = require("./routes/courses");
const students = require("./routes/students.routes")
// TODO Tell our application to use body-parser
app.use(bodyParser.json());
// TODO Tell our application to use the various routes
//this "courses" is the variable we've required into the file
app.use("/portal", courses);
app.use("/portal", students)
app.use(express.static(__dirname + "/public"));

// TODO Declare a 'port' variable that will be initialized to 3000 or 8080 (your choice!)
let port = 3000;
// TODO Create the server

app.listen(port, () => { 
  console.log(`Server listening on ${port}.`);
});

