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
    if (res.statusCode == 200) {
        res.status(200).json("Successfully connected to the API")
    }
})

app.get('/colors', (req, res) => {
    if (res.statusCode == 200) {
        res.status(200).send("Colors")
    } else if (res.statusCode == 404) {
        res.status(404).send("ERROR --> Not found")
    }
})

app.get('/broadcasts', (req, res) => {
    if (res.statusCode == 200) {
        res.status(200).send("Broadcasts")
    } else if (res.statusCode == 404) {
        res.status(404).send("ERROR --> Not found")
    }
})

app.get('/subject_matter', (req, res) => {
    if (res.statusCode == 200) {
        res.status(200).send("Subject Matter")
    } else if (res.statusCode == 404) {
        res.status(404).send("ERROR --> Not found")
    }
})

app.listen(3000, () => {
    console.log(`SUCCESS --> Listening on port --> ${PORT}`)
})