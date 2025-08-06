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
        // Push data to results array
        results.push(entry)
    })
    .on('end', () => {
        // Log results to the console
        console.log(results);
    });

// Need to add the logic to filter by colors