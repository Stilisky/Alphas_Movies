const jwt = require("jsonwebtoken");
const SECRET_KEY = "4715aed3c946f7b0a38e6b534a9583628d84e96d10fbc04700770d572af3dce43625dd";

const auth = (req, res, next) =>{
    next()

    // try {
    //     let token = req.headers.authorization;
    //     if(token){
    //         token = token.split("")[1];
    //         let user = jwt.verify(token, SECRET_KEY);
             
    //         req.userId = user.id;
    //          next
    //          console.log(token)

    //     }
    //     else {
    //         res.status(401).json({message:"Unauthorized userd"});
    //     }
        
    // } catch (error) {
    //     console.log(error);
    //     res.status(401).json({message:"Unauthorized userd"});

        
    // }
}

const protect = (req, res, next) => {
    next()
}
module.exports = auth;