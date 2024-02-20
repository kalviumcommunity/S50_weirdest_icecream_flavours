const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({

    Post_Id:{
        type: Number,
        required:true
    },
    User_Id:{
        type: String,
        required:true
    },
    Likes:{
        type: Number,
        required:true,
    }
});


const post = mongoose.model('post', postSchema);

module.exports = post;