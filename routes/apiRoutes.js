// LOAD DATA
const data = require('../db/db.json');

// ROUTING 

module.exports = (app) => {
    // API GET Requests
    app.get('/api/notes', (req, res) => res.json(data));
  
    // API POST Requests
    app.post('/api/notes', (req, res) => {

    });
  
    //should receive a new note to save on the request body, add it to the db.json file, and then return the new note to the client. You'll need to find a way to give each note a unique id when it's saved (look into npm packages that could do this for you).
};