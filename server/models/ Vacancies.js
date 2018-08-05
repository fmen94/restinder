const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const vacanciesSchema = new Schema({
    title: String,

    position: String,
    restaurant: {
        type: Schema.Types.ObjectId,
        ref: 'Restaurant'
    },
    salary: String,
    schedule: String,
    description: String,
    applicants: [{
        type: Schema.Types.ObjectId,
        ref: 'User'
    }]
},
{
    timestamps:{
        createdAt:'created_at',
        updatedAt:'updated_at'
    }
})

module.exports = mongoose.model('Vacancies', vacanciesSchema)
