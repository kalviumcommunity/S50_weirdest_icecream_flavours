const mongoose = require("mongoose");
require('dotenv').config();

const uri = process.env.MONGO_URI;

const connectDb = async () => {
    try {
        await mongoose.connect(uri);
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Error connecting to database:", error);
    }
};

module.exports = connectDb;