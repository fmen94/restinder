const express = require('express')
const router = express.Router()
const User = require('../models/User');
const Vacancies=require('../models/ Vacancies')
const Interview = require('../models/Interview')
const Comments= require('../models/Comments')
const Restaurant = require('../models/Restaurant')
//archivos
const multer = require('multer')
const uploads = multer({dest: './public/images'})




//get profile

router.get('/user/profile/:id', (req, res) => {
    User.findById(req.params.id)
        .then(user => {
            if (!user) return res.status(404)
            return res.status(200).json(user);
        })
        .catch(err => {
            return res.status(500).json(err);
        });
});

//edit profile

router.put('/user/profile/:id',  uploads.single('image'), (req, res, next) => {
    if(req.file) req.body.image = '/images/' + req.file.filename
    User.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(user => {
            return res.status(202).json(user)
        }).catch(err => {
            return res.status(404).json(err);
        })
});

//get vacancies 

router.get('/user/vacancies/:id',(req, res) =>{
    Vacancies.find({}).populate('restaurant')
        .then(vacancies=>{
            return res.status(202).json(vacancies)
            
        })
        .catch(err=> {
            return res.status(404).json(err);
        })
})

//applicants in vacancies

router.put('/user/vacancies/:id',(req,res,next) =>{
    Vacancies.findByIdAndUpdate(req.params.id, req.body, { new: true } )
    .then(vac=>{
        res.status(202).json(vac)
    })
    .catch(err=> {
        res.status(404).json(err);
    })
})

//see applicants in vacancies


router.get('/user/myvacancies/:id',(req, res) =>{
    Vacancies.find({applicants: req.params.id}).populate('restaurant')
        .then(vacancies=>{
            return res.status(202).json(vacancies)
        })
        .catch(err=> {
            return res.status(404).json(err);
        })
})

//delete vacancies applied (en proceso)
router.put('/user/myvacancies/:id', (req, res, next) => {
    Vacancies.findByIdAndUpdate(req.params.id, req.body, { new: true } )
        .then(vacancies=>{
            return res.status(202).json(vacancies)
        })
        .catch(err=> {
            return res.status(404).json(err);
        })
});

//new interview
router.post('/user/interview/:id',(req,res)=>{
    Interview.create(req.body)
    .then(interview=>{
        res.status(202).json(interview)
    })
    .catch(err=> {
        res.status(404).json(err)
    });
});

//edit interview

router.put('/user/interview/:id',(req,res)=>{
    Interview.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(interview=>{
        res.status(202).json(interview)
    })
    .catch(err=> 
        {res.status(404).json(err)
        });
})

//interview of user
router.get('/user/interview/:id',(req,res)=>{
    Interview.find({user:req.params.id}).populate('restaurant').populate('vacancies')
    .then(interview=>{
        res.status(200).json(interview)
    })
    .catch(err=>{
        res.status(404).json(err)
    })
});
//remove inteeview

router.delete('/user/interview/:id', (req, res, next) => {
    Interview.findByIdAndRemove(req.params.id)
        .then(interview => {
            res.status(200).json(interview)
        })
        .catch(e=>{
            res.status(500).json({message:"No se elimino correctamente"})
            next(e)
        });
});

//new comments 
router.post('/user/comments/:id',(req,res)=>{
    Comments.create(req.body)
    .then(comment=>{
        res.status(202).json(comment)
    })
    .catch(err=> {
        res.status(404).json(err)
    });
});

//edit comments 

router.put('/user/comments/:id',(req,res)=>{
    Comments.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(comment=>{
        res.status(202).json(comment)
    })
    .catch(err=> 
        {res.status(404).json(err)
        });
})

//remove comments

router.delete('/user/comments/:id', (req, res, next) => {
    Comments.findByIdAndRemove(req.params.id)
        .then(comment => {
            res.status(200).json(comment)
        })
        .catch(e=>{
            res.status(500).json({message:"No se elimino correctamente"})
            next(e)
        });
});

//comments of user
router.get('/user/comments/:id',(req,res)=>{
    Comments.find({user:req.params.id}).populate('restaurant')
    .then(comment=>{
        res.status(200).json(comment)
    })
    .catch(err=>{
        res.status(404).json(err)
    })
});

//get restaurant

router.get('/user/restaurant/:id', (req, res) => {
    Restaurant.findById(req.params.id)
        .then(restaurant => {

            //if (!user) return res.status(404)
            return res.status(200).json(restaurant);
        })
        .catch(err => {
            return res.status(500).json(err);
        });
});


module.exports = router;
