const passport= require('passport');
const localstrategy= require('passport-local').Strategy;
const Users= require('./database').Users;

passport.serializeUser(function(user,done){
    done(null,user.username);
})

passport.deserializeUser(function(username,done){
    Users.findOne({
        where:{
            username: username
        }
    }).then(function(user){
        if(!user){
            return done(new Error("No Such User Error:deserialize432"));
        }
        return done(null,user);
    }).catch(function(err){
        done(err);
    })
})

passport.use(new localstrategy({

        //passReqToCallback: true
    },
    function(username,password,done){
    Users.findOne({
        where: {
            username: username
        }
    }).then(function(user){
        if(!user){
            return done(null,false,{message: "No Such User"}); 
        }
        if(user.password !== password){
            return done(null,false,{message: "Invalid Password"});
        }
        return done(null,user);
    }).catch(function(err){
        return done(err);
    })
}))

module.exports= passport;