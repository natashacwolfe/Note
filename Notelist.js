const fs = require('fs');
const path = require('path');
var uuidv1 = require('uuidv1');
const db = require('./db/db.json')

const OUTPUT_DIR = path.resolve(__dirname, "db");
const outputPath = path.join(OUTPUT_DIR, "db.json");
const Note = require('./lib/Note');

class Notelist {
    constructor() {
        // this.id = 0
    };

    deleteById(noteId) {
        console.log(noteId)

        console.log("!!!", noteId)
        console.log("$$$$$$$$$$", db)
    
        for (let i = 0; i < db.length; i++) {
            if (noteId === db[i].id) {
                db.splice(i, 1)
            };
        };
        console.log("&&&&&", db)
        var stringifiedNoteData = JSON.stringify(db);
        fs.writeFile(outputPath, stringifiedNoteData, (err, data) => {
            if (err) throw err;
            console.log("#######", stringifiedNoteData);
        });
    };


    writeToJSON(newNote) {
        newNote.id = uuidv1();
        fs.readFile(outputPath, 'utf-8', function (err, data) {
            if (err) throw err;
            var noteData = JSON.parse(data);
            noteData.push(newNote);
            var stringifiedNoteData = JSON.stringify(noteData);

            fs.writeFile(outputPath, stringifiedNoteData, function (err, data) {
                if (err) throw err;
                console.log(`New note has been saved to the DB!`);
            });
        });
    };



};




module.exports = new Notelist();