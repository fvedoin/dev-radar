const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

mongoose.connect('mongodb+srv://fernando:cursoreact@cluster0-xo9rd.mongodb.net/week10?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

//express understands body request as JSON
app.use(express.json());
app.use(routes);

app.listen(3333);