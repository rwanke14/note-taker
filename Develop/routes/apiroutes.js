const dbData = require('../db/db.json');
const path = require('path');
const fs = require('fs')
const uniqid = require('uniqid');


module.exports = (app) => {

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

        console.log(req.body)
        //Setting up object to be inserted into the array in the json file.
        let newNotes = {
            title: req.body.title,
            text: req.body.text,
            id: uniqid()
        }
        //reads json file and pushes new object into array.
        fs.readFile('./Develop/db/db.json', (err, data) => {
            if (err) throw err;
            const parsedData = JSON.parse(data)
            parsedData.push(newNotes);

            //Writes new object into json file and sends back to user.
            fs.writeFile('./Develop/db/db.json', JSON.stringify(parsedData), (err) => {
                if (err) throw err;
                console.log('The file has been saved!');
                res.send(dbData)
            });


        });


    });

    //Deleting note at users request. Identified by it's unique ID. 
    app.delete('/api/notes/:id', (req, res) => {

       //declaring variable for when user selects an id with their request.
        let id = req.params.id
        console.log(id)


        //using .pop() instead of .splice() since this could be a large array and it's easier to remove with .pop()
        
        dbData.pop(id)

        //Writing the update to the json file to change the array.
        fs.writeFile('./Develop/db/db.json', JSON.stringify(dbData), (err) => {
            if (err) throw err;
            console.log('The file has been deleted!');

        });

        //Sending updated array back to user.
        res.send(dbData);

    });



}