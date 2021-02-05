const dbData = require('../db/db.json');
const path = require('path');

module.exports = (app) => {

    //setting up html route to index.html

    app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));

    //setting up html route to notes.html

    app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '../public/notes.html')));


}