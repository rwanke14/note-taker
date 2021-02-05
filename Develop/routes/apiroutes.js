const dbData = require('../db/db.json');
const path = require('path');
const fs = require('fs')

//Using uniqid to add unique identifier to ID with notes. 

const uniqid = require('uniqid');


module.exports = (app) => {

    //empty array to add and remove notes object data from the api array.
    let addNote = [];

    //Gets the note information
    app.get('/api/notes', (req, res) => {

        //Sends stored notes back to user and they remain till deleted.
        fs.readFile('./Develop/db/db.json', (err, data) => {
            if (err) throw err;
            res.send(data)

        });

    })


    //Adding notes to array.
    app.post('/api/notes', (req, res) => {

        
        //Setting up object to be inserted into the array in the json file.
        let newNotes = {
            title: req.body.title,
            text: req.body.text,
            id: uniqid()
        }
        //reads json file and pushes new object into the empty array addNote.
        fs.readFile('./Develop/db/db.json', (err, data) => {
            if (err) throw err;
            addNote = JSON.parse(data)
            addNote.push(newNotes);

            //Writes new object into json file and sends back to user.
            fs.writeFile('./Develop/db/db.json', JSON.stringify(addNote), (err) => {
                if (err) throw err;
                console.log('The file has been saved!');
                res.json(dbData)
            });


        });


    });


    //Deleting note at users request. Identified by it's unique ID. 
    app.delete('/api/notes/:id', (req, res) => {

        //declaring variable for when user selects an id with their request.
        let removeNote = req.params.id
        console.log(removeNote)

        //establishing a for loop for removing a note when deleted using splice with the addNote array.
        for (let i = 0; i < addNote.length; i++) {

            if (addNote[i].id === removeNote) {
                addNote.splice(i, 1);
            }

        }

        //writing the update to the db.json file so it communicates to front end that the note is removed. 
        fs.writeFile('./Develop/db/db.json', JSON.stringify(addNote), (err) => {
            if (err) throw err;
            console.log('The file has been deleted!');

        });

        //Sending updated array back to user.
        res.send(dbData);


    });



}