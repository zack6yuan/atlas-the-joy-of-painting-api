#!/usr/bin/env node
const mysql = require('mysql');
const fs = require('fs');
const path = require('path');

const express = require('express');

const app = express();

// Creates a connection to the MySQL database

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


