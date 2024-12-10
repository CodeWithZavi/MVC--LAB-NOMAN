const mongoose = require('mongoose');
require('dotenv').config(); // cuz we protect mongo

const mongoURL = process.env.MONGODB_URL;
mongoose.connect(mongoURL, {

});

const db = mongoose.connection;


db.on('connected', () => {
    console.log('mongo server is connected')
})
db.on('error', (err) => {
    console.error('mongo connection error', err)
})
db.on('disconnected', () => {
    console.log('mongo server is disconnected')
})
module.exports = db; // export from here and import on server js