#!/usr/bin/env node
// Get colors method
const fs = require('fs');
const csv = require('csv-parser');
const connection = require('./server');

// Initialize reults array
const results = []

fs.createReadStream('../data/colors.csv')
    .pipe(csv()) // Manage stream output
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
                console.error(`ERROR --> Failed to load data: ${err}`)
            } else {
                console.log("SUCCESS --> Data was loaded into the table: colors")
            }
        })
        console.log(results); // Log results to the console
    });

// Need to add the logic to filter by colors