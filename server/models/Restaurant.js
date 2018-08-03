const passportLocalMongoose = require('passport-local-mongoose');
const Schema = require('mongoose').Schema;
const restaurantSchema = new require('mongoose').Schema({
    username: String,
    photoURL: {
        type: String,
        default: "https://cdn4.iconfinder.com/data/icons/real-estate-1/512/alcohol_bar-512.png",
    },
    email: String,
    location:{
        type:{
            type:String,
            default:'Point'
        },
        address:String,
        coordinates:[{
            type:Number
        }]},
    vacancies:[
        {
            type: Schema.Types.ObjectId,
            ref: 'Vacancies'
        }
    ],
    style: String,
    phoneNumber: String,
    email: String,
    comments:[
        {
            type: Schema.Types.ObjectId,
            ref: 'Coments'
        }
    ],
},{
    timestamps:{
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

restaurantSchema.plugin(passportLocalMongoose, {usernameField:'email'})

module.exports = require('mongoose').model('Restaurant', restaurantSchema);