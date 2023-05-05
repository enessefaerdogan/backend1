// Initialization
const express = require('express');
const app = express();

const mongoose = require('mongoose');
const Note = require('./models/Note');

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

mongoose.set("strictQuery", false);


const mongoDbPath = "mongodb+srv://esefaerd:Enessefa.1@cluster0.7cs5vsh.mongodb.net/notesdb";
mongoose.connect(mongoDbPath).then(function() {
    app.post("/", function(req, res) {
        const response = { statuscode: res.statusCode, message: "API Worksssssssssssssssss!" };
        res.json(response);
    });
    
    const noteRouter = require('./routes/Note');
    app.use("/notes", noteRouter);
});

// Starting the server on a PORT
const PORT = process.env.PORT || 5000;
app.listen(PORT, function() {
    console.log("Server started at PORT: " + PORT);
});
