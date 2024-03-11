const mongoose = require("mongoose");
const postSchema = new mongoose.Schema({
    UserName:String,
    Title:String,
    Description:String,
    Image:String,
    Like:Number
});


const post = mongoose.model('post', postSchema);

module.exports = post;