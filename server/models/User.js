const passportLocalMongoose = require('passport-local-mongoose');
const Schema = require('mongoose').Schema;
const userSchema = new require('mongoose').Schema({
    username: String,
    photoURL: {
        type: String,
        default: "https://www.shareicon.net/download/2016/09/01/822725_user_512x512.png"
    },
    email: String,
    
    role:{
        type: String,
        enum: ['USER', 'EDITOR', 'ADMIN'],
        default: 'USER'
    },
    experience:[
        {
            type: String,
	    default: ''
        }
    ],
    comments:[
        {
            type: Schema.Types.ObjectId,
            ref: 'Coments'
        }
    ],
    location:{
        type:{
            type:String,
            default:'Point'
        },
        address:String,
        coordinates:[{
            type:Number
        }]},
    age: {
	type: String,
	default: ''
},
    phoneNumber: {
	type: String,
	default: ''
}
},{
    timestamps:{
        createdAt: 'created_at',
        updatedAt: 'updated_at'
    }
});

userSchema.plugin(passportLocalMongoose, {usernameField:'email'})

module.exports = require('mongoose').model('User', userSchema);
