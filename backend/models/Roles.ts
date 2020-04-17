'use strict'
import mongoose = require ("mongoose");

let Schema = mongoose.Schema;
let roles = new Schema({
    name: String,
    description: String,
    options: String
});

module.exports = mongoose.model('roles', roles);