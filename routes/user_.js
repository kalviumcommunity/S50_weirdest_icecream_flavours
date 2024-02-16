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

router.post("/users", async (req, res) => {
    try {
        const data = await userModel.create(req.body);
        res.json(data);
    } catch (error) {
        console.log(error); 
        res.status(500).send("An error occurred");
    }
});

router.put("/users/:id", async (req, res) => {
    try {
        const userid = req.params.id;
        const updatedUser = await userModel.findByIdAndUpdate(userid, req.body, { new: true});
        res.json(updatedUser);
    } catch (error) {
        console.log(error); 
    }
});

router.delete("/users/:id", async (req, res) => {
    try {
        const userId = req.params.id;
        const deletedUser = await userModel.findByIdAndDelete(userId);
        res.json(deletedUser)
    } catch (error) {
        console.log(error);
    }
});

router.patch("/users/:id", async (req, res) => {
  
        try {
            const userid = req.params.id;
            const updatedUser = await userModel.findByIdAndUpdate(userid, req.body, { new: true});
            res.json(updatedUser);
        } catch (error) {
            console.log(error); 
        }
});


module.exports = router;
