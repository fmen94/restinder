const router = require('express').Router();
const User = require('../models/User');
const Restaurant= require('../models/Restaurant')
// const Profile = require('../models/Profile');
// const Product = require('../models/Product');
//const bcrypt = require('bcrypt');
const passport = require('passport');
//const sendWelcomeMail = require('../helpers/mailer').sendWelcomeMail;
//const sendTemplate = require('../helpers/mailer').sendTemplate;

//multer config
const multer = require('multer');
const upload = multer({dest: './public/assets'});






//midelwares

function authenticate(req,res,next){
    passport.use(User.createStrategy());
    passport.serializeUser(User.serializeUser());
    passport.deserializeUser(User.deserializeUser());
    
}

function isAuthenticated(req,res,next){
    if(req.isAuthenticated()){
        console.log(req.user)
        return next()
    }else{
        res.json({message:"no tienes permiso"});
    }
}

function isLoggedIn(req,res,next){
    if(req.isAuthenticated()){
        res.redirect('/private')
    }else{
        next();
    }
}

//signup of Users

 router.post("/user/signup", (req, res, next) => {
	console.log("entramos a sing")
    User.register(req.body, req.body.password)
      .then(user => {
        res.json(user);
      })
      .catch(e => next(e));
   });

 //signup of Restaurants

 router.post("/restaurant/signup", (req, res, next) => {
    Restaurant.register(req.body, req.body.password)
      .then(user => {
        res.json(user);
      })
      .catch(e => next(e));
   });

//logout 

 router.get('/logout', (req,res,next)=>{
    req.logout();
    res.json({message:"la sesión se ha cerrado"});
});

//login

router.post('/user/login', passport.authenticate('local'), (req,res,next)=>{
    res.send(req.user)
});











 module.exports = router;
