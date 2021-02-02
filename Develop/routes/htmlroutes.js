const dbData = require('../db/db.json');
const path = require('path');

module.exports = (app) => {

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '../public/index.html')));

app.get('/notes', (req, res) => res.sendFile(path.join(__dirname, '../public/notes.html')));

//app.get('/assets/css/styles.css', (req, res) => res.sendFile(path.join(__dirname, '../public/assets/css/styles.css')));

//app.get('/assets/js/index.js', (req, res) => res.sendFile(path.join(__dirname, '../public/assets/js/index.js')));



}