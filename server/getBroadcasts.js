#!/usr/bin/env node
// Get broadcasts method
const fs = require('fs');
const csv = require('csv-parser');
const connection = require('./server')

// Initialize empty results array
const results = []

// Read selected file
fs.createReadStream('../data/broadcasts.csv')
    .pipe(csv({ headers: ['title', 'air_date'] })) // Manage stream output, headers defined
    .on('data', (data) => {
        // Data being selected / inserted
        const entry = [
            data.title,
            data.air_date
        ]
        results.push(entry) // Push data to results array
    })
    .on('end', () => {
        // Duplicate entries skipped
        const mysql = `INSERT IGNORE INTO broadcasts (title, air_date) VALUES ?`
        connection.query(mysql, [results], (err, res) => {
            if (err) {
                console.error(`ERROR --> Failed to load data --> ${err}`); // Error message
            } else {
                console.log("SUCCESS --> Data was loaded into the table --> broadcasts"); // Success message
            }
            console.log("Database operations complete");
        })
        console.log(results); // Log results to the console
        connection.end(); // End the connection, and return to prompt
    });

// Update: Data is being put into the mysql table
// The date needs to be split and put in the second column
// But overall, table is set up corretly