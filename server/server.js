#!/usr/bin/env node

// Server Module

/*
    mysql --> relational database management system
    fs --> built-in file system module
    path --> built-in path module
    express --> express.js framework
*/

const mysql = require('mysql2');

// Creates a connection to the MySQL database
let connection = mysql.createConnection({
    user: 'zackyuan',
    password: 'ETLJoy1.0!',
    database: 'ETL_JOY',
    socketPath: '/tmp/mysql.sock'
});

connection.connect(function(err) {
    if (err) {
        throw err;
    } else {
        console.log("Successfully connected to the database");
    }
});

module.exports = connection;