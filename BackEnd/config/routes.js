const express = require('express')
const router = express.Router()
const chatsController = require('../app/controllers/chatsController')
const usersController = require('../app/controllers/usersController')
const messagesController = require('../app/controllers/messagesController')
const {authentication} = require("../app/middlewares/authentication")
const razorpayController = require('../app/controllers/razorpayController')
const keys = require('../app/middlewares/keys')

router.post('/user/register', usersController.register)
router.post('/user/login', usersController.login)
router.get('/user/account',authentication, usersController.account)

router.get('/chats', authentication,chatsController.listAll)
router.post('/chats/new', authentication,chatsController.create)
router.get('/chats/:id',authentication,chatsController.show)

router.get('/messages', authentication,messagesController.listAll)
router.post('/messages/new', authentication,messagesController.create)
router.get('/messages/my/:id',authentication,messagesController.myMessages)

//router.get('/orders',razorpayController.list)
router.post('/razorpay',razorpayController.create)
//router.post(`/${keys.key_id}:${keys.key_secret}@api.razorpay.com/v1/payments/:id/capture`,razorpayController.pay)

module.exports = router