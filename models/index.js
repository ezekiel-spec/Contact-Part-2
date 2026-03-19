const dbConfig = require('../config/db.config.js'); // Or wherever your URL is stored
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

const db = {};
db.mongoose = mongoose;

// FORCE THE URL HERE IF .ENV IS ACTING UP
db.url = 'mongodb+srv://Ezekiel-NewDB:Ezekiel123@cluster0.r0t83go.mongodb.net/temples?retryWrites=true&w=majority';

db.temples = require('./temples.js')(mongoose);

module.exports = db;