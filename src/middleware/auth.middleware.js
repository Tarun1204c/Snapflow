const jwt = require('jsonwebtoken')

async function identifyUser(req,res,next){
    const token = req.cokkies.token

    if(!token){
        return res.status(401).json({
            message : "Token not provided, Unauthorized acesses"
        })
    }

    let decoded = null

    try{
        decoded = jwt.verify(token, process.env.JWT_SECRET)
    }catch(err){
        return res.status(401).json({
            message: "user not authorized"
        })
    }
}

module.exports = identifyUser