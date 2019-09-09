const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require("path")

const cors = require("cors");
const app = express();

const AdminRoute = require("./routes/admin")

app.use(cors());

mongoose.connect('mongodb+srv://farhod:7Q8SfcHx.F2J.HG@cluster0-uf7cc.mongodb.net/property?retryWrites=true', { useNewUrlParser: true })
    .then(() => {
        console.log('MongoDB connected.');
    })
    .catch(err => console.log(err));

module.exports = { mongoose };

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/photos', express.static(path.join("backend/photos")));

app.use('/api/admin', AdminRoute)


module.exports = app;