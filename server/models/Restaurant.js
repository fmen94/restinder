const passportLocalMongoose = require('passport-local-mongoose');
const Schema = require('mongoose').Schema;
const restaurantSchema = new require('mongoose').Schema({
    username: String,
    photoURL: {
        type: String,
        default: "http://www.kolobok.com.mx/wp-content/uploads/2017/04/banner-rest-min.jpg",
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
    style:{
        type: String,
        default: ""
    },
    phoneNumber: {
        type: String,
        default: ""
    },
    descripcion: {
        type: String,
        default: ""
    },
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