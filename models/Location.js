const mongoose = require('mongoose');
let Schema = mongoose.Schema;

const LocationSchema = new Schema({
    latitude: {
        type: Number,
        required: true
    },
    longitude: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('location', LocationSchema); // ('modelname', Schema)
