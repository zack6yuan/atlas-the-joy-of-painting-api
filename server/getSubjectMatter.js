#!/usr/bin/env node
// Get subject matter method
const fs = require('fs');
const csv = require('csv-parser');

const results = []

fs.createReadStream('../data/subject_matter.csv')
    .pipe(csv())
    .on('data', (data) => results.push(data))
    .on('end', () => {
        console.log(results);
    });