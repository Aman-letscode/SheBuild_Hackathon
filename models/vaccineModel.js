const mongoose = require('mongoose')

const VacSchema = new mongoose.Schema({
    name: {
        type: String,
        require: true,
    },
    Duration: {
        type: Number,
        require: true,
    },
    Description: {
        type: String,
        require: false,
    },
    repeat: {
        type: number,
        require: true,
    },
});


const vaccine = new mongoose.model("vaccine",VacSchema);

module.exports = vaccine;