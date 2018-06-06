"use strict";
// TODO Require Express
const express = require("express");
// TODO Declare a Router object to handle the routes for our courses
const studentRouter = express.Router();
const pg = require("pg");
const pool = require("../connection");

// TODO Create four separate routes, one for each method
//"/students" we are basically making up on the fly, it doesn't relate to the array. it's just so we can comm with the front end. 
studentRouter.get("/students", (req, res) =>{
  pool.query("SELECT * FROM students").then((result) =>{
    console.log(result.rows);
    res.send(result.rows);
  });
});

studentRouter.post("/students", (req, res) =>{
 pool.query("INSERT INTO students(name, course) VALUES($1::text, $2::text)", [req.body.name, req.body.course,]).then(() =>{
    pool.query("SELECT * FROM students ORDER BY id").then((result) =>{
      res.send(result.rows);
    });
 })
});

studentRouter.delete("/students/:id", (req, res) =>{
  console.log("delete");
  pool.query("DELETE FROM students WHERE id=$1::int", [req.params.id])
  .then(() => {
    pool.query("SELECT * FROM students ORDER BY id").then((result) =>{
      console.log("get");
      
      res.send(result.rows);
    });
  });
});

studentRouter.put("/students/:id", (req, res) =>{
 pool.query("UPDATE students SET name=$1::text, course=$2::text WHERE id=$3::int", [req.body.name, req.body.course, req.params.id]).then(() => {
   pool.query("SELECT * FROM students ORDER BY id").then((result) => {
     res.send(result.rows);
   });
 });
});

// TODO Export the Router object
module.exports = studentRouter;