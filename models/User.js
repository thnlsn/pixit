const mongoose = require('mongoose');
let Schema = mongoose.Schema;

const UserSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    zipcode: {
        type: Number,
        required: true
    },
    lbs: {
        type: Number,
        required: true,
        default: 0
    },
    contributions: {
        type: Number,
        required: true,
        default: 0
    },
    starts: {
        type: Number,
        required: true,
        default: 0
    },
    daysActive: {
        type: Number,
        required: true,
        default: 0
    },
    daysCleaned: {
        type: Number,
        required: true,
        default: 0
    },
    pixPoints: {
        type: Number,
        required: true,
        default: 0
    }
});

module.exports = mongoose.model('user', UserSchema); // ('modelname', Schema)
