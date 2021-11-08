const express = require("express");
const path = require("path");
const db = require("./db/db.json")
const fs = require('fs')
const app = express();
const { v4: uuidv4 } = require('uuid')
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true}));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));


app.post('/api/notes', (req, res) => {
  const newNote = req.body;
  const notes = JSON.parse(fs.readFileSync("./db/db.json"))
  console.log(newNote)
 
});



app.get('/notes', (req, res) => res.sendFile(path.join(__dirname,"public", 'notes.html')));
app.get('*', (req, res) => res.sendFile(path.join(__dirname,"public", 'index.html')));

app.listen(PORT, () => console.log(`App listening on PORT ${PORT}`));