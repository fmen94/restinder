const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const commentsSchema = new Schema({
    restaurant:{
        type: Schema.Types.ObjectId,
        ref: 'Restaurant'
    },
    user:{
        type: Schema.Types.ObjectId,
        ref: 'User'
    },
    answer:{
        type: Object,
        title: String,
        text: String

    },
    title: String,
    text: String
}
,{
    timestamps:{
        createdAt:'created_at',
        updatedAt:'updated_at'
    }
})

module.exports = mongoose.model('Comments', commentsSchema)