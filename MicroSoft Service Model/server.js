const express = require('express');
const app = express();
const db = require('./db');
require('dotenv').config(); // server know he has dot env file 

// for access file from env
const PORT = process.env.PORT || 3000;

const bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(express.static('public'));

// // Set up routes
app.get('/', function (req, res) {

     res.sendFile(__dirname + '/public/index.html'); // Serve the HTML page
});


app.get('/', function (req, res) {

     res.send("Wellcome to our hotel ( Code With Zavian");
})
// import Menu router:
const menuRoutes = require('./routes/menuRoutes');
// // use 
app.use('/menu', menuRoutes);
// import Person router :
const personRoutes = require('./routes/personRoutes');
// use 
app.use('/person1', personRoutes);



app.listen(PORT, () => {
     console.log("server is runnig");
});  // 300 =>  telll yahan server active ha 

module.exports = app;