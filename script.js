#!/usr/bin/env node
// NEED TO SORT BY COLORS, SUBJECT MATTER, AIR DATE
const mysql = require('mysql')

let conn = mysql.createConnection({
    host: 'localhost',
    user: 'zackyuan',
    password: ' '
});

module.exports = conn;

conn.connect(function(err) {
    if (err) throw err;
    console.log("Successfully Connected")
});