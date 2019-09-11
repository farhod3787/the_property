const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const path = require("path")

const cors = require("cors");
const app = express();

const AdminRoute = require("./routes/admin")
const AnnouncementTypeRoute = require("./routes/announcement_type")
const AppearanceRoute = require("./routes/appearance")
const BuildingMaterialRoute = require("./routes/building_material")
const ConvenienceRoute = require("./routes/convenience")
const CurrencyRoute = require("./routes/currency")
const HouseTypeRoute = require("./routes/house_type")
const RegionRoute = require("./routes/region")
const UserRoute = require("./routes/user")
const AnnouncementRoute = require("./routes/announcement")

app.use(cors());

// mongoose.connect('mongodb+srv://farhod:7Q8SfcHx.F2J.HG@cluster0-uf7cc.mongodb.net/property?retryWrites=true', { useNewUrlParser: true })
//     .then(() => {
//         console.log('MongoDB connected.');
//     })
//     .catch(err => console.log(err));

mongoose.connect('mongodb://localhost:27017/property', { useNewUrlParser: true })
    .then(() => {
        console.log('MongoDB connected.');
    })
    .catch(err => console.log(err));


module.exports = { mongoose };

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use('/photos', express.static(path.join("backend/photos")));

app.use('/api/admin', AdminRoute)
app.use('/api/announcement_type', AnnouncementTypeRoute)
app.use('/api/appearance', AppearanceRoute)
app.use('/api/building_material', BuildingMaterialRoute)
app.use('/api/convenience', ConvenienceRoute)
app.use('/api/currency', CurrencyRoute)
app.use('/api/house_type', HouseTypeRoute)
app.use('/api/region', RegionRoute)
app.use('/api/user', UserRoute)
app.use('/api/announcement', AnnouncementRoute)


module.exports = app;