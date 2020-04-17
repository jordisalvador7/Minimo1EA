"use strict";

import express = require("express");
import mongoose = require('mongoose');
import cors = require("cors");
import bodyParser = require('body-parser');

let rolesRouter = require ("./routes/RoleRoutes")

let app = express();
app.use(cors());
app.use(bodyParser.json());

app.use('/roles', rolesRouter); 

//Mongo database connection
mongoose.connect("mongodb://localhost:27017/covid", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(function () {
    console.log('Connection to the database successful');
}).catch(function (err) {
    console.log("Database error: " + err.message);
});

//Make app listen on port 3000
const port = 3000; // en el puerto que vamos a escuchar
app.listen(port, function () {
    console.log('Listening on http://localhost:' + port);
});
module.exports = app;