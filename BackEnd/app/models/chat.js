const mongoose = require('mongoose')
const {messageSchema} = require('./messages')
//const {userSchema} = require('./user')
const isEmail =  require('validator/lib/isEmail')
const Schema = mongoose.Schema

const chatSchema = new Schema({
    username : {
        type: String,
        required : true,
        minlength: 3
    },
    phoneNumber : {
        type: Number,
        required:true,
        minlength:10,
        maxlength:10
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
    createdAt:{
        type: Date,
        default: Date.now
    }
})

const Chat = mongoose.model('Chat',chatSchema)

module.exports = Chat