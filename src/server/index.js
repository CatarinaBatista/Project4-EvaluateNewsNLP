var path = require('path')
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
var aylien = require("aylien_textapi");
const dotenv = require('dotenv');
dotenv.config();

// Aylien engine
var textapi = new aylien({
    application_id: process.env.API_ID,
    application_key: process.env.API_KEY
});


// Start up an instance of app
const app = express()

// Initialize the main project folder
app.use(express.static('dist'))

// Configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());


console.log(__dirname)



// Initialize routes

app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})


app.post('/sentiment', function (req, res) {
    console.log(req);
    const urlUser = req.body.url;

    textapi.sentiment({'url': urlUser}, function(error, response) {
        if (error === null) {
            res.send(response);
        } else {
            const msg = "Error";
            res.json(JSON.stringify(msg));
        }
    });
})


// Setup Server
const port = 8000;

app.listen(port, listening);

function listening(){
    console.log(`Running on localhost: ${port}`);
};