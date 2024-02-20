const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    User_Id:{
        type: String,
        required:true
    },
    User_Name:{
        type: String,
        required:true
    },
    Password:{
        type: String,
        required:true,
    },
    Email:{
        type: String,
        required:true,
       unique: true
    }
});


const User = mongoose.model('user', userSchema);

module.exports = User;