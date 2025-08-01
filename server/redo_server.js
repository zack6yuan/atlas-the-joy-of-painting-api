#!/usr/bin/env node

// Server Module

/*
    mysql --> relational database management system
    fs --> built-in file system module
    path --> built-in path module
    express --> express.js framework
*/

const mysql = require('mysql');
const fs = require('fs');
const path = require('path')
const csv = require('csv-parser');
const express = require('express');

// Assign instance of express to variable "app"
const app = express();

// Creates a connection to the MySQL database

let connection = mysql.createConnection({
    host: 'localhost',
    user: 'zackyuan',
    password: ' ',
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

function readAndParseCSV() {
    fs.createReadStream('broadcasts.csv')
    .pipe(csv())
    .on('data', (data) => resourceLimits.push(data))
    .on('end', () => {
        console.log(results);
    });
}
