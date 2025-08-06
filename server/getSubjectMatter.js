#!/usr/bin/env node
// Get subject matter method
const fs = require('fs');
const csv = require('csv-parser');

// Initialize results array
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
        console.log(results); // Log results to the console
    });

// Need to remove all the data that has a 0, 
// the subject is not part of the episode