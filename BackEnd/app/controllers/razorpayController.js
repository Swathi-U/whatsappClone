const RazorpayModel = require('../models/razorpay')
const Razorpay = require('razorpay')
const keys = require('../middlewares/keys')
const razorpayController = {}

const razorInstance = new Razorpay({
    key_id : keys.key_id,
    key_secret : keys.key_secret
})

razorpayController.list=(req,res)=>{
   RazorpayModel.find()
   .then((orderList)=>{
       res.json(orderList)
   })
}

razorpayController.create=(req,res)=>{
    const body = req.body
    const options = body
    
    razorInstance.orders.create(options,function(err,order){
    console.log(order)
    const razorpay = new RazorpayModel(order)
        razorpay.save()
        .then((order)=>{
            res.json(order)
        })
        .catch((err)=>{
             res.json(err)
         })
    })
}

// razorpayController.pay=(req,res)=>{
//     const id = req.params.id
//     const body = req.body
    // const razorpay = new RazorpayModel(body,id)
    //     razorpay.save()
    //     .then((order)=>{
    //         res.json(order)
    //     })
    //     .catch((err)=>{
    //          res.json(err)
    //      })

//}
module.exports = razorpayController
