const express = require("express");
const routes = require('./routes');
const path = require("path");
const fs = require("fs");
const util = require('util');
const { readFromFile, readAndAppend } = require('./helpers/fsUtils');

const util = require('util');
const { readFromFile, readAndAppend } = require('./helpers/fsUtils');

const data = require("./db.json");
const PORT = 3002;

const app = express();

//middleware for the connection of the app
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));




//GET/api/notes to read db.json

app.get('/api/notes', (req, res) => res.json(data));

// POST/api/notes to read the db.json

app.post('/api/db.json, (req, res) => {
    if (req.body && req.params.readData) {
    console.info(`${req.method} read the db.json file`);
    const readData = req.params.readData;
    for (let i = 0; i < data.length; i++) {
        const dataBase = data[i];
        if (dataBase.readData === readData) {
            dataBase.db += 1;
            res.json(`notes read: ${dataBase.db}!`);
            return;
        }
    }
    res.json('Review ID not found');
});


//POST/api/notes to receive a new note 
app.post('/api/notes', (req, res) => {
    res.json(`${req.method} new note received`);
})

//give each note a unique ID

// const newNote = 
// const noteB =
// const noteC = 


    //GET for the notes.html
    app.get('/', (req, res) =>
        res.sendFile(path.join(__dirname, '/public/notes.html'))
    );


//GET * to return index.html
app.get * ('/api/', (req, res) => {
    res.return
})

app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} 🚀`)
);