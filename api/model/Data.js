const mongoose = require('mongoose');
var uniqueValidator = require('mongoose-unique-validator');
mongoose.set('useCreateIndex', true);

let schema = new mongoose.Schema({
    name: {
        type: String,
        required: [
            true,
            'Name cannot be blank.'
        ]
    },
    email: {
        type: String,
        required: [
            true,
            'Email cannot be blank.'
        ],
        unique: [
            true,
            'Email should be unique.'
        ]
    },
    age: {
        type: Number,
        required: [
            true,
            'Age cannot be blank.'
        ]
    },
    bio: {
        type: String
    },
    book: {
        type: String
    },
});
schema.plugin(uniqueValidator, {
    message: 'Email is already in use.'
});
let Data = mongoose.model('information', schema);

module.exports = {
    Data
};