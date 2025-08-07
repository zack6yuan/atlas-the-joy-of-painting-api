#!/usr/bin/env node
// Server Module
const mysql = require('mysql2');
const fs = require('fs');
const path = require('path');

const database_name = "ETL_JOY";

// Creates a connection to the MySQL database
let connection = mysql.createConnection({
    host: 'localhost',
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