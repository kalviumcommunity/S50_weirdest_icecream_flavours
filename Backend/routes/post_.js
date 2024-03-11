const express = require('express');
const router = express.Router();
const postModel = require('../schema/post');
const Joi = require('joi');

// Middleware
router.use(express.json());



const userValidation = Joi.object({
    UserName: Joi.string().alphanum().min(4).max(15).required(),
    Title: Joi.string().required(),
    Description: Joi.string().required(),
    Image: Joi.string().required()
})


const userValidationPut = Joi.object({
    UserName: Joi.string().alphanum().min(4).max(15),
    Title: Joi.string(),
    Description: Joi.string(),
    Image: Joi.string()
}).min(1)

const userValidationPatch = Joi.object({
    UserName: Joi.string().alphanum().min(4).max(15).required(),
    Title: Joi.string(),
    Description: Joi.string(),
    Image: Joi.string()
}).min(1)


function validateUser(req, res, next) {
    const { error } = userValidation.validate(req.body)
    if (error) {
        return res.status(400).json({ erro: error.details[0].message })
    }
    next();
}

function validateUserPut(req, res, next) {
    const { error } = userValidationPut.validate(req.body)
    if (error) {
        return res.status(400).json({ erro: error.details[0].message })
    }
    next();
}

function validateUserPatch(req, res, next) {
    const { error } = userValidationPatch.validate(req.body)
    if (error) {
        return res.status(400).json({ erro: error.details[0].message })
    }
    next();
}


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


router.get("/posts/:id", async (req, res) => {
    try {
        const postid = req.params.id;
        const data = await postModel.findById(postid);
        res.json(data);
    } catch (error) {
        console.log(error);
        res.status(500).send("An error occurred");
    }
});


// POST request
router.post("/posts", validateUser , async (req, res) => {
    try {
        const data = await postModel.create(req.body);

        res.json(data);
    } catch (error) {
        console.log(error);
        res.status(500).send("An error occurred");
    }
});




router.put("/posts/:id", validateUserPut, async (req, res) => {
    try {
        const postId = req.params.id;
        const updatedPost = await postModel.findByIdAndUpdate(postId, req.body, { new: true });
        if (!updatedPost) {
            return res.status(404).json({ message: "Post not found" });
        }
        res.json(updatedPost);
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "An error occurred while updating the post" });
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
