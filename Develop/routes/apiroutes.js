const dbData = require('../db/db.json');
const path = require('path');
const fs = require('fs')



module.exports = (app) => {

    let id

    let getData = fs.readFileSync(path.join(__dirname, '../db/db.json'), (err, data) => {
        if (err) throw err;
    });
    const addNote = [];


    app.get('api/notes', (req, res) => {

        fs.readFile(get)
        res.json(getData)

    })

    //set id for each note
    // app.post('api/notes/:id', (req, res) => {

    //     // for (i = 1; i < dbData.length; i++) {
    //     //     dbData.push(req.body)
    //     //     id = req.id + 1
    //     // }

    //     // fs.writeFile('notes.html', dbData, (err) => {

    //     //     if (err) throw err;
    //     //     console.log('The file has been saved!');


    //     // })

    // });

    //posting to api route
    app.post('api/notes', (req, res) => {

        dbData.push(req.body)


    });

    app.delete('api/notes/:id', (req, res) => {


        //delete notes when trash can icon is clicked.
    });



}