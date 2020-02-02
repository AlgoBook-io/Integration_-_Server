const express= require('express');
const route= express.Router();
const path= require('path');
const Users= require('../database').Users;

route.use('/',express.static(path.join(__dirname,'..','public','login')));
route.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'..','public','login','signup.html'));
})

route.post('/getin',(req,res)=>{
    Users.create({
        name: req.body.name,
        username: req.body.username,
        password: req.body.password
    }).then(function(user){
        res.send(user);
    })
})


module.exports= {route}