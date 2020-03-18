const fs = require('fs');
const path = require('path');
const OUTPUT_DIR = path.resolve(__dirname, "publc");
const outputPath = path.join(OUTPUT_DIR, "db.html");

class NoteList {
    writeNotes(newNote) {
        fs.readFile(outputPath, 'utf8', function(err, data) {
            if (err) throw err;
            var noteData = JSON.parse(data);
            noteData.append(newNote);
            JSON.stringify(noteData);
            
            fs.writeFile(outputPath, noteData, function(err, data) {
                if (err) throw err;
                console.log(`New note has been saved to the DB!`);
                console.log(noteData);
            });
        });
    };

};



module.exports = NoteList;