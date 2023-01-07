const jwt = require('jsonwebtoken')
const model = require('../models/userModel')


let checkUser = async (req,res,next) => {
    let token;
    const {authorization} = req.headers
    if(authorization && authorization.startsWith('Bearer')){
        try{
            token = authorization.split(' ')[1];
            if(token!='undefined'){

                const { userID } = jwt.verify(token, process.env.JWT_SECRET_KEY);
                req.user = await model.findById(userID).select('-password')

                next()
            }
        }catch(err){
            console.log(err)
      res.status(401).send({ "status": "failed", "message": "Unauthorized User" })
        }
    }
    if (!token) {
        res.status(401).send({ "status": "failed", "message": "Unauthorized User, No Token" })
      }
}

module.exports = checkUser;