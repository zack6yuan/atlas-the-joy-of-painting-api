#!/usr/bin/env node
// API built with express
const express = require('express');
const app = express();
app.use(express.json());
const PORT = 5500;

app.get('/', (req, res) => {
    console.log("Success!")
})

app.listen(5500, () => {
    console.log(`Listening on port ${PORT}, successfully running.`)
})
