const mongoose = require("mongoose");
require('dotenv').config();

const uri = process.env.MONGO_URI;

const connectDb = async (req, res) => {
    try {
        await mongoose.connect(uri);
        console.log("Database connected successfully");
    } catch (error) {
        console.error("Error connecting to database:", error);
        return res.status(500).send("Error connecting to database");
    }
};

module.exports = connectDb;
