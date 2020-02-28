// Deoendencies
const fs = require('fs');
const express = require('express');
const path = require('path');

// Sets up the Express App

const app = express();
const PORT = 3000;

// Sets up the Express App to handle data parsing

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Basic route that sends the user to first to the AJAX page

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/notes', function(req, res) {
    res.sendFile(path.join(__dirname, 'public/notes.html'));
});

//start the server to begin listening

app.listen(PORT, function() {
    console.log(`App listening on port ${PORT}`);
});