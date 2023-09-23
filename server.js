const express = require("express");
const routes = require('./routes');
const path = require("path");
const fs = require("fs");

const data = require("./db.json");
const PORT = 3002;

const app = express();

//middleware for the connection of the app
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static('public'));



//GET/api/notes to read db.json

app.get('/api/notes', (req, res) => res.json(data));

//or 
app.get('/', (req, res) =>
res.send(path.join(__dirname, '/public/index.html'))
);

// POST/api/notes to read the db.json

app.post('/api/notes', (req, res) => {
    if (req.body) {
        console.info(`${req.method} new note received`);
        data.push(req.body);
        fs.writeFileSync('./db.json', JSON.stringify(data));
        res.json(req.body);
    } else {
        res.status(400).json('Request body is missing');
    }
});


//POST/api/notes to receive a new note 
app.post('/api/notes', (req, res) => {
    res.json(`${req.method} new note received`);
})

//give each note a unique ID

if (title && note) {
    // Variable for the object we will save
    const newNote = {
      title,
      note,
      review_id: uuid(),
    };

};

    //GET for the notes.html
    app.get('/', (req, res) =>
        res.sendFile(path.join(__dirname, '/public/notes.html'))
    );


//GET * to return index.html
app.get* ('/api/', (req, res) => {
    res.return(path,join(__dirname, '/public/index.html'))
})

app.listen(PORT, () =>
    console.log(`App listening at http://localhost:${PORT} 🚀`)
);