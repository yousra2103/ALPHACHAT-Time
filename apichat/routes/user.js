const express = require('express')
const router = express.Router()
const User = require('../model/User');
const jwt = require('jsonwebtoken');
const jwtSecret = "hhyykkaamm";



router.post('/register', async(req,res)=>{
    const {username,password} = req.body;
    try{
        const createdUser = await User.create({username,password});
        jwt.sign({userId:createdUser._id} , jwtSecret , {} , (err,token)=>{
         if (err) throw err ;
         res.cookie('token' , token).status(201).json({
             id: createdUser._id,
         }
         );
        });
    } catch (err){
        if (err) throw err ;
        res.status(500).json('error');
    }
  
})