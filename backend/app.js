const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require("path")

const cors = require("cors");
const app = express();

const AdminRoute = require("./routes/admin")

app.use(cors());

mongoose.connect("mongodb://localhost:27017/property").then(() => {
        console.log('Connected to database')
    })
    .catch(() => {
        console.log('Error in connected database')
    });

module.exports = { mongoose };

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/photos', express.static(path.join("backend/photos")));

app.use('/api/admin', AdminRoute)


module.exports = app;