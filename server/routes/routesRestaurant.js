
const express = require('express')
const router = express.Router()
const Restaurant = require('../models/Restaurant')
const Vacancies=require('../models/ Vacancies')
const Interview= require ('../models/Interview')
const Comment= require ("../models/Comments")
//archivos
const multer = require('multer')
const uploads = multer({dest: './public/images'})

const passport = require('passport');




//midelware


function authenticatePro(req, res, next){
    console.log("midelware")
    Restaurant.findOne({email: req.body.email})
        .then(res=>next(e))
        .catch(e=>res.json(e))
    }




//login


router.post('/restaurant/login', (req,res,next)=>{
    Restaurant.findOne({email: req.body.email})
    .then(restaurant => {
        return res.status(200).json(restaurant);
    })
    .catch(err => {
        return res.status(500).json(err);
    });
});


//get profile

router.get('/restaurant/profile/:id', (req, res) => {
    Restaurant.findById(req.params.id)
        .then(restaurant => {

            //if (!user) return res.status(404)
            return res.status(200).json(restaurant);
        })
        .catch(err => {
            return res.status(500).json(err);
        });
});

//edit profile

router.put('/restaurant/profile/:id',  uploads.single('image'), (req, res, next) => {
    if(req.file) req.body.image = '/images/' + req.file.filename
    Restaurant.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(restaurant => {
            return res.status(202).json(restaurant)
        })
        .catch(err => {
            return res.status(404).json(err);
        })
});


//add vacancies

router.post ('/restaurant/vacancies/:id',(req,res,next)=>{
    Vacancies.create(req.body)
    .then(vacancies => {
        return res.status(202).json(vacancies)
    })
    .catch(err => {
        return res.status(404).json(err);
    })
})

//show vacancies

router.get('/restaurant/vacancies/:id', (req, res) => {
    Vacancies.find({restaurant: req.params.id}).populate('restaurant').sort({updated_at:-1})
        .then(vacancies => {

            //if (!user) return res.status(404)
            return res.status(200).json(vacancies);
        })
        .catch(err => {
            return res.status(404).json(err);
        });
});

//show one vacancie

router.get('/restaurant/onevacancies/:id', (req, res) => {
    Vacancies.findOne({_id:req.params.id}).populate('applicants')
        .then(vacancie => {
            //if (!user) return res.status(404)
            return res.status(200).json(vacancie);
        })
        .catch(err => {
            return res.status(404).json(err);
        });
});



//edit vacancie

router.put('/restaurant/onevacancies/:id', (req, res, next) => {
    Vacancies.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(vacancies => {
            return res.status(202).json(vacancies)
        })
        .catch(err => {
            return res.status(404).json(err);
        })
});

//remove vacancie

router.delete('/restaurant/onevacancie/:id', (req, res, next) => {
    Vacancies.findByIdAndRemove(req.params.id)
        .then(vacancies => {
            res.status(200).json(vacancies)
        })
        .catch(e=>{
            res.status(500).json({message:"No se elimino correctamente"})
            next(e)
        });
});

//users applicants

router.post('/restaurant/vacanciess/applicants/:id',(req,res,next)=>{
    Vacancies.find({restaurant:req.params.id}).populate('applicants').sort({updated_at:-1})
    .then(vacancies=>{
        res.status(200).json(vacancies)
        console.log("entramos al then",vacancies)
    })
    .catch(err => {
        res.status(404).json(err)
    })
})
//coments of restaurants

router.get('/restaurant/comments/:id',(req,res)=>{
    Comment.find({restaurant:req.params.id}).populate('user').sort({updated_at:-1})
    .then(comment=>{
        res.status(200).json(comment)
    })
    .catch(err=>{
        res.status(404).json(err)
    })
});

//respond comment

router.put('/restaurant/comments/:id',(req,res)=>{
    Comment.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(comment=>{
        res.status(202).json(comment)
    })
    .catch(err=> 
        {res.status(404).json(err)
        });
})

//Interview of vacances
router.get('/restaurant/interview/:id',(req,res)=>{
    console.log(req.param.id)
    Interview.find({ "*" : req.param.id}).populate('vacancies').populate('user').sort({updated_at:-1})
    .then(vacancie=>{
        res.status(200).json(vacancie)
    })
    .catch(err=>{
        res.status(404).json(err)
    })
});

module.exports = router;