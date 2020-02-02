const express= require('express');
const route= express.Router();
const path= require('path');
const passport= require('../passport');

route.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','public','login','login.html'));
})

route.get('/check',(req,res)=>{
    if(!req.user){
        res.send(null);
    } else {
        res.send(req.user);
    }
})

route.post('/getin',passport.authenticate('local',{
    failureRedirect: '/login/failure',
    successRedirect: '/'
    //badRequestMessage: "Invalid Username or Password",
    //failureFlash: true
}))

route.get('/failure',(req,res)=>{
    res.send(null);
})

module.exports= {route}