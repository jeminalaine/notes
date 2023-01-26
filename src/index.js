const express = require("express");
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const noteRouter = require("./routers/note");
require('./db/mongoose');


const app = express();

app.use(cors())

app.use(express.json());

app.all('/*', (req, res, next) => {
    //Enable Cors policy
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Method', 'GET, PUT, POST, DELETE, OPTIONS, PATCH');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');
    next();
})

app.use(noteRouter);

app.listen(3000, () => {
    console.log('App is running on the port 3000');
})
