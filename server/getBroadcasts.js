#!/usr/bin/env node
// Get broadcasts method
const fs = require('fs');
const csv = require('csv-parser');

const results = []

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
        console.log(results); // Log results to the console
    });

// Need to update the data so that every one
// does not say a walk in the woods
// need to update the key per episode