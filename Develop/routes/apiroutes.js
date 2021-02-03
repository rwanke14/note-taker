const dbData = require('../db/db.json');
const path = require('path');
const fs = require('fs')
const uniqid = require('uniqid');


module.exports = (app) => {


    app.get('/api/notes', (req, res) => {

        //fs.readFile(get)
        fs.readFile('./Develop/db/db.json', (err, data) => {
            if (err) throw err;
            res.send(data)

        });

    })


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

        let id = req.params.id
        console.log(id)

        for (let i = 1; i < dbData.length; i++) {
            console.log('test')
            console.log(i)
            if (id == dbData[i].id) {
                console.log('hello')
                const update = dbData.splice(id[i], 0)
                console.log(update)
                
                fs.writeFile('./Develop/db/db.json', JSON.stringify(update), (err) => {
                    if (err) throw err;
                    console.log('The file has been deleted!');
                    
                });
            }
        }
        res.json(dbData);
    
    });



}