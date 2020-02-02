const mongoose = require('mongoose');
let Schema = mongoose.Schema;

const LocationSchema = new Schema({
    longitude: {
        type: Number,
        required: true
    },
    latitude: {
        type: Number,
        required: true
    }
});

module.exports = mongoose.model('location', LocationSchema); // ('modelname', Schema)
