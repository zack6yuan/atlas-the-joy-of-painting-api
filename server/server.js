#!/usr/bin/env node

// Server Module

/*
    mysql --> relational database management system
    fs --> built-in file system module
    path --> built-in path module
    express --> express.js framework
*/

const mysql = require('mysql2');
const fs = require('fs');
const path = require('path')
const csv = require('csv-parser');
const express = require('express');
port = 3000;

// Assign instance of express to variable "app"
const app = express();


// Creates a connection to the MySQL database
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'zackyuan',
    password: 'ETLJoy1.0!',
    database: 'ETL_JOY'
});
module.exports = connection;

connection.connect(function(err) {
    if (err) {
        throw err;
    } else {
        console.log("Successfully connected to the database");
    }
});

const results = []

fs.createReadStream('../data/broadcasts.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
        console.log(results);
    });