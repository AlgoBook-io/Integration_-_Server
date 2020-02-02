const express= require('express');
const app= express();
const path= require('path');
const session = require('express-session');
const passport= require('passport');
const flash= require('connect-flash');

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(session({
    secret: 'MayukhPratimSecretString'
}))
app.use(flash());
app.use(passport.initialize());
app.use(passport.session())

app.use('/',express.static(path.join(__dirname,'public')))
app.use('/signup',require('./route/signup').route);
app.use('/login',require('./route/login').route);

app.get('/logout',(req,res)=>{
    req.logout();
    res.redirect('/');
})

// app.use((req,res)=>{
//     res.redirect('https://algobook-io.github.io/Frontend-plugins/404_Error_Page/');
// })

app.listen(3000,()=>{console.log("Hosted on http://localhost:3000");})