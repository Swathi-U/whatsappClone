const mongoose = require('mongoose')
const shortId = require('shortid')
const Schema = mongoose.Schema

const razorpaySchema = new Schema({
    amount : {
        type : Number,
        required : true
    },
    currency : {
        type : String,
        required : true,
        default : 'INR'
    },
    receipt : {
        type : String,
        default : shortId.generate()
    },
    status : {
        type : String
    },
    payment_capture : {
        type : Boolean,
        default : 1
    }
})

const Razorpay = mongoose.model('Razorpay',razorpaySchema)

module.exports = Razorpay