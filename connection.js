"use strict";

const pg = require("pg");
const pool = new pg.Pool({
  user: "postgres", 
  password: "plomaritasgc", 
  host: "localhost",
  port: 5432, 
  database: "postgres",
  ssl: false
});


module.exports = pool;