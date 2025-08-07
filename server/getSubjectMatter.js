#!/usr/bin/env node
// Get subject matter method
const fs = require('fs');
const csv = require('csv-parser');
const connection = require('./server');

// Initialize empty results array
const results = []

fs.createReadStream('../data/subject_matter.csv')
    .pipe(csv()) // Manage stream output
    .on('data', (data) => {
        // Data being selected / inserted
        const entry = [
            data.EPISODE,
            data.TITLE
        ];
        results.push(entry) // Push data to results array
    })
    .on('end', () => {
        const mysql = `INSERT IGNORE INTO subject_matter(episode, subject_matter, attribute) VALUES ?`
        connection.query(mysql, [results], (err, res) => {
            if (err) {
                console.error(`ERROR --> Failed to load data --> ${err}`) // Error message
            } else {
                console.log("SUCCESS --> Data was loaded into the table: subject_matter") // Success message
            }
            console.log("Database operations complete")
        })
        console.log(results); // Log results to the console
        connection.end(); // End the connection, and return to prompt
    });

// Need to remove all the data that has a 0, 
// the subject is not part of the episode
