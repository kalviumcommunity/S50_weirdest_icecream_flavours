const express = require('express');
const router = express.Router(); 
const userModel = require('../schema/user');

// Middleware
router.use(express.json());

// GET request
router.get("/users", async (req, res) => {
    try {
        const data = await userModel.find();
        res.json(data);
    } catch (error) {
        console.log(error); 
        res.status(500).send("An error occurred");
    }
});

module.exports = router;
