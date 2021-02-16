const Message = require('../models/messages')
const messagesController = {}

messagesController.listAll= (req,res)=>{
    Message.find()
    .then((messages)=>{
        res.json(messages)
    })
}

messagesController.create = (req,res)=>{
    const body = req.body
    const message = new Message(body)
    message.save()
    .then((message)=>{
        res.json(message)
    })
    .catch((err)=>{
        res.json(err)
    })
}

messagesController.myMessages = (req,res)=>{
    const id = req.params.id
    Message.find({chatId: id})
    .then((message)=>{
        res.json(message)
    })
}

// messagesController.update = (req,res)=>{
//     const id = req.params.id
//     const body = req.body
//     Message.findByIdAndUpdate(id,body,{ new: true,runValidators:true})
//     .then((message)=>{
//         if(message){
//             res.json(message)
//         }else{
//             res.json({})
//         }
//     })
// }

// messagesController.destroy = (req,res)=>{
//     const id = req.params.id
//     Message.findOneAndDelete({_id: id,userId: req.userId})
//     .then((message)=>{
//         if(message){
//             res.json(message)
//         }else{
//             res.json({})
//         }
//     })
// }

messagesController.show = (req,res)=>{
    const id = req.params.id
    Message.find(id)
    .then((message)=>{
        res.json(message)
    })
}
module.exports = messagesController