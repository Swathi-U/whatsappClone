const Chat = require('../models/chat')
const chatsController = {}

chatsController.listAll= (req,res)=>{
    Chat.find()
    .then((chat)=>{
        res.json(chat)
    })
}

chatsController.create = (req,res)=>{
    const body = req.body
    const chat = new Chat(body)
    chat.save()
    .then((chat)=>{
        res.json(chat)
    })
    .catch((err)=>{
        res.json(err)
    })
}

chatsController.show = (req,res)=>{
        const id = req.params.id
        Chat.findById(id)
        .then((chat)=>{
            res.json(chat)
        })
    }

    // chatsController.update = (req,res)=>{
    //     const id = req.params.id
    //     const body = req.body
    //     Chat.push(body)
    //     .then((chat)=>{
    //         if(chat){
    //             res.json(chat)
    //         }else{
    //             res.json({})
    //         }
    //     })
    // }    

module.exports = chatsController