const express = require('express');

//setting up express for routing. 
const app = express();

//setting up port access.
const PORT = process.env.PORT || 8080;


//setting up details for connecting to the routes with express (boilerplate code).
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('Develop/public'))

//Connecting the html routes and api routes to the server.js via module.exports.
require('./Develop/routes/apiroutes')(app);
require('./Develop/routes/htmlroutes')(app);


//opens port and lets user know it's open. 

app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
  });