// Deoendencies
const fs = require('fs');
const express = require('express');
const path = require('path');


const notelist = require('./Notelist');
const Note = require('./lib/Note');

// let newNoteList = new Notelist();

// Sets up the Express App

const app = express();
const PORT = process.env.PORT || 3000;

// Sets up the Express App to handle data parsing

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Basic route that sends the user to first to the AJAX page

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/notes', function (req, res) {
    res.sendFile(path.join(__dirname, '/public/notes.html'));
});

app.post("/api/notes", function (req, res) {
    let newNote = req.body;
    res.send(notelist.writeToJSON(newNote));
});


app.get('/api/notes', function (req, res) {
    res.sendFile(path.join(__dirname, '/db/db.json'));
});

app.delete('/api/notes/:id', function (req, res) {
    let noteId = req.params.id;
    res.send(notelist.deleteById(noteId));
});

//start the server to begin listening

app.listen(PORT, function () {
    console.log(`App listening on port ${PORT}`);
});
