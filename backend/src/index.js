const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const http = require('http');

const mongoUrl = process.env.DATABASE_URL;

const routes = require('./routes');
const { setupWebsocket } = require('./websocket');

const app = express();
const server = http.Server(app);

setupWebsocket(server);

mongoose.connect(mongoUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

app.use(cors());
//express understands body request as JSON
app.use(express.json());
app.use(routes);

server.listen(3333);