#!/usr/bin/env node
// Get broadcasts method
const fs = require('fs');
const csv = require('csv-parser');

const results = []

fs.createReadStream('../data/broadcasts.csv')
    .pipe(csv({ headers: ['title', 'air_date'] }))
    .on('data', (data) => {
        const entry = [
            data.title,
            data.air_date
        ]
        results.push(entry)
    })
    .on('end', () => {
        console.log("")
        console.log(results);
    });

// Need to update the data so that every one
// does not say a walk in the woods
// need to update the key per episode