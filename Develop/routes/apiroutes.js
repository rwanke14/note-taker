const dbData = require('../db/db.json');
const path = require('path');


module.exports = (app) => {

    app.get('/api/notes', (req, res) => res.json(dbData));


    // set up a way to clear notes
    // app.post('/api/clear', (req, res) => {
    //     // Empty out the arrays of data
    //     tableData.length = 0;
    //     waitListData.length = 0;
    
    //     res.json({ ok: true });
    //   });


}