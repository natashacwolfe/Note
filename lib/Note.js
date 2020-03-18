class Note {
    constructor() {
        // this.title = title, 
        // this.text = text, 
        this.id = function getID() {
            let id = 0;
            let newID = id++
            this.id = newId;
            console.log(Note, newID, Note.id)
        };
    };

};

module.exports = new Note();