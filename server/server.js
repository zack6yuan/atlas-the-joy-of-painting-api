#!/usr/bin/env node

// Server Module

/*
    mysql --> relational database management system
    fs --> built-in file system module
    path --> built-in path module
    express --> express.js framework
*/

const mysql = require('mysql2');

const database_name = "ETL_JOY";

// Creates a connection to the MySQL database
let connection = mysql.createConnection({
    user: 'zackyuan',
    password: 'ETLJoy1.0!',
    database: database_name,
    socketPath: '/tmp/mysql.sock'
});

connection.connect(function(err) {
    if (err) {
        throw err;
    } else {
        console.log(`SUCCESS --> Connected to database --> ${database_name}`);
    }
});

module.exports = connection;