// IMPORT FILESYSTEM
const fs = require('fs');

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

};