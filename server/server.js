#!/usr/bin/env node
const mysql = require('mysql');
const fs = require('fs');
const path = require('path');

const express = require('express');

const app = express();

// Creates a connection to the MySQL database

let conn = mysql.createConnection({
    host: 'localhost',
    user: 'zackyuan',
    password: ' ',
    database: 'ETL_JOY'
});

module.exports = conn;

conn.connect(function (err) {
    if (err) throw err;
    console.log("Successfully Connected")
});

// Broadcasts, subject matter, color pallete
async function createBroadcastsTable() {
    try {
        conn.query(`
            CREATE TABLE IF NOT EXISTS broadcasts (
                painting_id INT UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY
            )
        `)
    } catch (err) {
        console.error(``)
    }
}
createBroadcastsTable();