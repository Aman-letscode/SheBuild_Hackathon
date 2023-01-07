const mongoose = require('mongoose')

const VacSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    Duration_start: {
        type: Array,
        require: true,
    },
    Duration_end: {
        type: Array,
        require: true,
    },
    Description: {
        type: String,
        require: false,
    },
    repeat: {
        type: Number,
        require: true,
    },
});


const vaccine = new mongoose.model("vaccine",VacSchema);

module.exports = vaccine;