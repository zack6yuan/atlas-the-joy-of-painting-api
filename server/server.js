#!/usr/bin/env node
// Server Module
const mysql = require('mysql2');
const fs = require('fs');
const path = require('path');
const express = require('express')
const PORT = 3000;


// Initialize app with express
const app= express();
app.use(express.json());

const database_name = "ETL_JOY";

// Creates a connection to the MySQL database
let connection = mysql.createConnection({
    host: 'localhost',
    user: 'zackyuan',
    password: 'ETLJoy1.0!',
    database: database_name,
    // Since i'm on MacOS, socketPath is needed
    socketPath: '/tmp/mysql.sock'
});

// Connection error handler
connection.connect(function(err) {
    if (err) {
        throw err;
    } else {
        console.log(`SUCCESS --> Connected to database --> ${database_name}`);
    }
});

// Export the connection
module.exports = connection;

// Root route
app.get('/', (req, res) => {
    // Success
    if (res.statusCode == 200) {
        res.status(200).json("Successfully connected to the API")
    // Not found
    } else if (res.statusCode == 404) {
        res.status(404).send("ERROR --> Not found")
    }
})

// Colors route
app.get('/colors', (req, res) => {
    // Success
    if (res.statusCode == 200) {
        res.status(200).send("Colors")
    } else if (res.statusCode == 404) {
    // Not found
        res.status(404).send("ERROR --> Not found")
    }
})

// Broadcasts route
app.get('/broadcasts', (req, res) => {
    // Success
    if (res.statusCode == 200) {
        res.status(200).send("Broadcasts")
    } else if (res.statusCode == 404) {
    // Not found
        res.status(404).send("ERROR --> Not found")
    }
})

// Subject Matter route
app.get('/subject_matter', (req, res) => {
    // Success
    if (res.statusCode == 200) {
        res.status(200).send("Subject Matter")
    } else if (res.statusCode == 404) {
    // Not found
        res.status(404).send("ERROR --> Not found")
    }
})

// Set the port for the app to listen to
app.listen(3000, () => {
    console.log(`SUCCESS --> Listening on port --> ${PORT}`)
})