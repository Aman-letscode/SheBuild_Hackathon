const mongoose = require('mongoose');
// const bcrypt = require('bcrypt');

const UserSchema = new mongoose.Schema({
    firstname: {
        type:String,
        required:[true,"can't be blank"],
        trim: true
        
    },
    lastname: {
        type:String,
        required: false,
        default: null,
        trim: true
    },
    email: {
        type:String,
        required: false,
        default: null,
        trim: true
    },
    phone: {
        type:String,
        required: true,
        unique:[true,"can't be blank"],
        match: [/^(\+\d{1,3}[- ]?)?\d{10}$/, "is invalid"],
        trim: true
    },
    password: {
        type:String,
        required: true,
        trim: true
    },
    confirmpassword: {
        type:String,
        required: true,
        trim: true
    },
    dateOfBirth:{

    },
    vaccine_taken: {
        type: Object,
        required: false
    },
    pregnancy_date:{
        type: Date,
        required:true,
        default: Date.now
    },
    conditions:{
        type: String,
        required:false
    }
    // ,
    // token: {
    //     type: String
    // }
})

const userModel =  mongoose.model('user',UserSchema);

module.exports = userModel;