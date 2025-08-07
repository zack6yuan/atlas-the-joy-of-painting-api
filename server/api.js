#!/usr/bin/env node
// API built with express
const express = require('express');
const app = express();
app.use(express.json());
const PORT = 3000;

app.get('/', (req, res) => {
    console.log("Success!")
})

app.listen(3000, () => {
    console.log(`Listening on port ${PORT}, successfully running.`)
})
