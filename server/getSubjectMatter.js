#!/usr/bin/env node
// Get subject matter method
const fs = require('fs');
const csv = require('csv-parser');

const results = []

fs.createReadStream('../data/subject_matter.csv')
    .pipe(csv())
    .on('data', (data) => {
        const entry = [
            data.EPISODE,
            data.TITLE
        ];
        results.push(entry)
    })
    .on('end', () => {
        console.log(results);
    });

// Need to remove all the data that has a 0, 
// the subject is not part of the episode