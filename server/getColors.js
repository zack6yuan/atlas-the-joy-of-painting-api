#!/usr/bin/env node
// Get colors method
const fs = require('fs');
const csv = require('csv-parser');

const results = []

fs.createReadStream('../data/colors.csv')
    .pipe(csv())
    .on('data', (data) => {
        const entry = [
            data.color_id,
            data.painting_index,
            data.painting_title,
            data.num_colors
        ];
        results.push(entry)
    })
    .on('end', () => {
        console.log("'color_id', 'painting_index', 'painting_title', 'num_colors'")
        console.log(results);
    });

// Need to add the logic to filter by colors