const jwt = require('jsonwebtoken');
const authenticateUser = async (req,res,next) => {
    if (!req.headers.authorization) {
        return res.status(401).json({status:'unAuthorized',message:'Unauthorized: Missing Authorization header'});
      }
      const token = req.headers.authorization;
     try{
        const user = jwt.decode(token);
        req.user = user;
        next();
     } 
     catch(err)
     {
      res.status(500).json({status:'Authenticate Failure',message:'cannot found the token'});
     }
}

module.exports = {authenticateUser}