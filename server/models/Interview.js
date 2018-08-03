const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const interviewSchema = new Schema({
    restaurant:{
        type: Schema.Types.ObjectId,
        ref: 'Restaurant'
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    vacancies:{
        type: Schema.Types.ObjectId,
        ref: 'Vacancies'
    },
    location:{
        type:{
            type:String,
            default:'Point'
        },
        address:String,
        coordinates:[{
            type:Number
        }]},
    date: Date,
    hour: String
}
,{
    timestamps:{
        createdAt:'created_at',
        updatedAt:'updated_at'
    }
})

module.exports = mongoose.model('Interview', interviewSchema)