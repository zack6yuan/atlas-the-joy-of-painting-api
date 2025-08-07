#!/usr/bin/env node
// Get colors method
const fs = require('fs');
const csv = require('csv-parser');
const connection = require('./server');

// Initialize empty results array
const results = []

// Read selected file
fs.createReadStream('../data/colors.csv')
    .pipe(csv({ headers: ['color_id', 'painting_index', 'painting_title', 'num_colors'] })) // Manage stream output, headers defined
    .on('data', (data) => {
        // Data being selected / inserted
        const entry = [
            data.color_id,
            data.painting_index,
            data.painting_title,
            data.num_colors
        ];
        results.push(entry) // Push data to results array
    })
    .on('end', () => {
        const mysql = `INSERT IGNORE INTO colors (color_id, painting_index, painting_title, num_colors) VALUES ?`
        connection.query(mysql, [results], (err, res) => {
            if (err) {
                console.error(`ERROR --> Failed to load data --> ${err}`); // Error message
            } else {
                console.log("SUCCESS --> Data was loaded into the table --> colors"); // Success message
            }
            console.log("Database operations complete.");
        })
        console.log(results); // Log results to the console
        connection.end(); // End the connection, and return to prompt
    });

// table is set up correctly when using * and DESCRIBE
// painting title and num colors is not being added to the table correctly.