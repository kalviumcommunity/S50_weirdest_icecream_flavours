const express = require('express');
const router = express.Router(); 
const postModel = require('../schema/post');

// Middleware
router.use(express.json());

// GET request
router.get("/posts", async (req, res) => {
    try {
        const data = await postModel.find();
        res.json(data);
    } catch (error) {
        console.log(error); 
        res.status(500).send("An error occurred");
    }
});
router.post("/posts", async (req, res) => {
    try {
        const data = await postModel.create(req.body);
        res.json(data);
    } catch (error) {
        console.log(error); 
        res.status(500).send("An error occurred");
    }
});

router.put("/posts/:id", async (req, res) => {
    try {
        const postid = req.params.id;
        const updatedPost = await postModel.findByIdAndUpdate(postid, req.body, { new: true});
        res.json(updatedPost);
    } catch (error) {
        console.log(error); 
    }
});

router.delete("/posts/:id", async (req, res) => {
    try {
        const postId = req.params.id;
        const deletedpost = await postModel.findByIdAndDelete(postId);
        res.json(deletedpost)
    } catch (error) {
        console.log(error);
    }
});

router.patch("/posts/:id", async (req, res) => {
    try {
        const postId = req.params.id;
        const updatedPost = await postModel.findByIdAndUpdate(postId, { $set: { deleted: true } }, { new: true });
        res.json(updatedPost);
    } catch (error) {
        console.log(error);
      
    }
});



module.exports = router;
