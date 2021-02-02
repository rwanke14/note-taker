const dbData = require('../db/db.json');
const path = require('path');
const fs = require('fs')
var uniqid = require('uniqid');

module.exports = (app) => {

    let id;

    const addNote = [];

    app.get('/api/notes', (req, res) => {

        //fs.readFile(get)
        fs.readFile('./Develop/db/db.json', (err, data) => {
            if (err) throw err;
        res.send(data)

        });

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
    app.post('/api/notes', (req, res) => {

        console.log(req.body)
        let newNotes = {
            title: req.body.title,
            text: req.body.text, 
            id: uniqid()
        }

        fs.readFile('./Develop/db/db.json', (err, data) => {
            if (err) throw err;
            const parsedData = JSON.parse(data)
            parsedData.push(newNotes);
            
            fs.writeFile('./Develop/db/db.json', JSON.stringify(parsedData), (err) => {
                if (err) throw err;
                console.log('The file has been saved!');
                res.send(dbData)
              });


        });


    });

    app.delete('/api/notes/:id', (req, res) => {


        //delete notes when trash can icon is clicked.
    });



}