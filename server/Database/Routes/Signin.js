const express = require('express');
const signin = express.Router();
const signupSchema = require('../Schemas/signupSchema')
const bcrypt = require('bcrypt')

signin.post('/signin', async(req, res)=>{
      
      try{ 

        const { Email, Password } = req.body;
       
        if(!Email || !Password){
           return res.status(401).json({
                message:"Email and Password are required"
            })
        }   
   
       const user = await signupSchema.findOne({Email});
       
        if(!user){
        res.status(404).json({
            message:"user not found"

        })
       }

       const isMatch = await bcrypt.compare(Password, user.Password);

       if(!isMatch){
        res.status(401).json({
            message:"invalid credentials"
        })
       }

      res.status(200).json({
        message:"signin sucessfull",
        userId:user._id
      })

      }catch(error){
        res.status(500).json({
            message:"Invalid  credentials"
        })
      }
})

module.exports = signin;