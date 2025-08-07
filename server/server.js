#!/usr/bin/env node
// Server Module
const mysql = require('mysql2');
const fs = require('fs');
const path = require('path');
const express = require('express')
const PORT = 3000;

const app= express();
app.use(express.json());

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

app.get('/', (req, res) => {
    console.log("Success!")
    res.status(200).send("Successfully connected to the API")
})

app.get('/colors', (req, res) => {
    if (res.statusCode == 200) {
        res.status(200).send("Success")
    }
})

app.listen(3000, () => {
    console.log(`SUCCESS --> Listening on port --> ${PORT}`)
})