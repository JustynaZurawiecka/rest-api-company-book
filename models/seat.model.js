const mongoose = require('mongoose');

const setSchema = new mongoose.Schema({
    day: { type: Number, required: true },
    seat: { type: Number, required: true },
    client: { type: String, required: true },
    email: { type: String, required: true },
    count: { type: Number, required: true },
    sum: { type: Number, required: true },

});

module.exports = mongoose.model('Seat', setSchema);