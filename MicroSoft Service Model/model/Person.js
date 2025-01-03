const mongoose = require('mongoose');

const personSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,

    },

    work: {
        type: String,

        enum: ['chef', 'manager', 'weighter'],
        required: true
    },
    mobile: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    address: {
        type: String,
        required: true,
        unique: true
    },
    salary: {
        type: Number,
        required: true
    }


});
// create model
const Person = mongoose.model('Person', personSchema);

// now export 
module.exports = Person;
