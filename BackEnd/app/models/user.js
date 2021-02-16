const mongoose = require('mongoose')
const isEmail =  require('validator/lib/isEmail')
const bcryptjs = require('bcryptjs')
const Schema = mongoose.Schema

const userSchema = new Schema({
    username :{
        type: String,
        required: [true,'username is required'],
        unique: true
    },
    email:{
        type: String,
        required: [true,'email is required'],
        unique: true,
        //custom validation for format checking
        validate:{
            validator: function(value){
                return isEmail(value)
            },
            message: function(){
                return 'invalid email format'
            }
        }
    },
    password:{
        type: String,
        required: [true,'password needs to within 8-128 characters'],
        minlength: 8,
        maxlength: 128
    },
    imageUrl:{
        type: String
    }
})

userSchema.pre('save', function(next){
    const user = this
    bcryptjs.genSalt()
    .then((salt)=>{
        bcryptjs.hash(user.password, salt)
        .then((encryptedPassword)=>{
            user.password = encryptedPassword
            next()
        })
    })
})
const User = mongoose.model('User',userSchema)

module.exports = User