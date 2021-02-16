const jwt = require('jsonwebtoken')

//4 responsibilities of a middleware function
// * can execute any code
// * can modify req,res objects
// * can end req,res cycle
// * call the next middleware function

const authentication = (req,res,next)=>{
    const token = req.headers.authorization
    if(token){
        let tokenData
        try{
            tokenData = jwt.verify(token, 'swathi')
            console.log(tokenData,'token')
            req.chatId = tokenData.id
            next()
        }catch(e){
            res.status('401').json({error:e.message})
        }
    }else{
        res.status('401').json({error: 'token not provided'})
    }
}

module.exports = {
    authentication
}