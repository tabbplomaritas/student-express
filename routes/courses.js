"use strict";
// TODO: Require Express
const express = require("express");
// TODO: Declare a Router object to handle the routes for our courses
const courseRouter = express.Router();
const pg = require("pg");
const pool = require("../connection");


// TODO Create four separate routes, one for each method

//courses below does not directly relate to courses array above
courseRouter.get("/courses", (req, res) =>{
  //courses below DOES relate the the name of the array
  res.send(courses);
});

courseRouter.post("/courses", (req, res) =>{
  courses.push({
    name: req.body.name, 
    startDate: req.body.startDate,
    endDate: req.body.endDate,
    id: idCount++
  });
  res.send(courses);
});

courseRouter.delete("/courses/:id", (req, res) =>{
  console.log(req.params.id);
  console.log(typeof req.params.id);
  
  for (let course of courses) {
    if (course.id == req.params.id){
      courses.splice(courses.indexOf(course), 1);
    }
  }
  res.send(courses);
});
  
courseRouter.put("/courses:id", (req, res) =>{
  for (let course of courses) {
    if (course.id == req.params.id){
      courses.splice(courses.indexOf(course), 1, {
        name: req.body.name, 
      startDate: req.body.startDate,
      endDate: req.body.endDate,
      id: course.id
      });
    }
  }
  res.send(courses);
});



module.exports = courseRouter;

// Export the Router object