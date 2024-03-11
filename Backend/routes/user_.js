const express = require('express');
const router = express.Router(); 
const userModel = require('../schema/user');
const Joi = require('joi');
const jsonWebToken=require('jsonwebtoken')
require('dotenv').config()

// Middleware
router.use(express.json());


const jwt=(user)=>{
    return jsonWebToken.sign({name:user.UserName},process.env.SECRET_KEY,{expiresIn:"1h"})
}

const userValidation = Joi.object({
    UserName: Joi.string().alphanum().min(4).max(15).required(),
   Email: Joi.string().email(),
    Password: Joi.string().required()
    
})

function validateUser(req, res, next) {
    const { error } = userValidation.validate(req.body)
    if (error) {
        return res.status(400).json({ erro: error.details[0].message })
    }
    next();
}

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

router.post("/users", validateUser ,async (req, res) => {
    try {
      const userData=req.body
        const newUser = await userModel.create(userData);
        const token=jwt(userData);
        if(!token){
            return res.status(500).json({error:"Failed to sign JWT token"})
        }
        res.status(201).json({userData:newUser,token:token})
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
