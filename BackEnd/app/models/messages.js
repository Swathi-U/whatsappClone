const mongoose = require('mongoose')
const Schema = mongoose.Schema

const messageSchema = new Schema({
    chatId:{
        type: Schema.Types.ObjectId,
        ref : 'Chat',
        required: true
    },
    body : {
        type: String,
        required: true,
        minlength: 3
    },
    name:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        default: Date.now
    },
    recieved:{
        type:Boolean,
        default:true,
        required:true
    }
})

const Message = mongoose.model('Message',messageSchema)

module.exports = Message