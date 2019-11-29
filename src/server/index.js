var path = require('path')
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mockAPIResponse = require('./mockAPI.js')
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




app.get('/', function (req, res) {
    res.sendFile('dist/index.html')
})

// designates what port the app will listen to for incoming requests


app.get('/test', function (req, res) {
    res.send(mockAPIResponse)
})


// Setup Server
const port = 8000;

app.listen(port, listening);

function listening(){
    console.log(`Running on localhost: ${port}`);
};