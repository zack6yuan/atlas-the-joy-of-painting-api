#!/usr/bin/env node
// Get colors method
const fs = require('fs');
const csv = require('csv-parser');

const results = []

fs.createReadStream('../data/colors.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
        console.log(results);
    });

// Need to add the logic to filter by colors