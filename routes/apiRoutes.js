// IMPORT FILESYSTEM
const fs = require('fs');

// IMPORT UUID FOR ID'S
const { v4: uuidv4 } = require('uuid');

// DATA
let notesData = {};

// ROUTING 

module.exports = (app) => {
    // API GET Requests
    app.get('/api/notes', (req, res) => {
        fs.readFile(`${__dirname}/../db/db.json`, (err, data) => {
            if (err) {
                console.error(err);
                return;
            } else {
                notesData = JSON.parse(data);
                res.json(notesData);
            }
        });
    });

    // API POST Requests
    app.post('/api/notes', (req, res) => {
        req.body.id = uuidv4();
        notesData.push(req.body);

        fs.writeFile(`${__dirname}/../db/db.json`, JSON.stringify(notesData), (err) => {
            if (err) {
                console.log('Error writing file', err)
            } else {
                console.log('Successfully wrote file')
            }
        })
        res.json(req.body);
    });

    // API DELETE Requests
    app.delete('/api/notes/:id', (req, res) => {
        const idPassed = req.params.id;
        const indexOf = notesData.findIndex(p => p.id==idPassed);
        notesData.splice(indexOf, 1);
        fs.writeFile(`${__dirname}/../db/db.json`, JSON.stringify(notesData),  (err) => {
            if (err) {
                console.log(err)
            }
        })
        res.json(notesData);
    });

};