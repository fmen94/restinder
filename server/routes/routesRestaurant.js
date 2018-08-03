const express = require('express')
const router = express.Router()
const Restaurant = require('../models/Restaurant')
const Vacancies=require('../models/ Vacancies')
const Interview= require ('../models/Interview')
//archivos
const multer = require('multer')
const uploads = multer({dest: './public/images'})

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
    Vacancies.find({restaurant: req.params.id})
        .then(vacancies => {

            //if (!user) return res.status(404)
            return res.status(200).json(vacancies);
        })
        .catch(err => {
            return res.status(500).json(err);
        });
});

//show one vacancie

router.get('/restaurant/onevacancie/:id', (req, res) => {
    Vacancies.findById(req.params.id)
        .then(vacancie => {

            //if (!user) return res.status(404)
            return res.status(200).json(vacancie);
        })
        .catch(err => {
            return res.status(500).json(err);
        });
});



//edit vacancie

router.put('/restaurant/onevacancie/:id',  uploads.single('image'), (req, res, next) => {
    if(req.file) req.body.image = '/images/' + req.file.filename
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

router.post('/restaurant/vacancies/applicants/:id',(req,res,next)=>{
    Vacancies.find({restaurant:req.params.id}).populate('applicants')
    .then(vacancies=>{
        res.status(200).json(vacancies)
        console.log("entramos al then",vacancies)
    })
    .catch(err => {
        res.status(404).json(err)
    })
})
//coments of restaurants

router.get('/restaurant/interviews/:id',(req,res)=>{
    Interview.find({restaurant:req.params.id}).populate('user')
    .then(comment=>{
        res.status(200).json(comment)
    })
    .catch(err=>{
        res.status(404).json(err)
    })
});


module.exports = router;