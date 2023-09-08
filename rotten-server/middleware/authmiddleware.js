const jwt = require("jsonwebtoken");
const SECRET_KEY = "4715aed3c946f7b0a38e6b534a9583628d84e96d10fbc04700770d572af3dce43625dd";

exports.adminAuth = (req, res, next) => {
    const token = req.cookies.jwt;
    if (token) {
      jwt.verify(token, jwtSecret, (err, decodedToken) => {
        if (err) {
          return res.status(401).json({ message: "Not authorized" });
        } else {
          if (decodedToken.role !== "admin") {
            return res.status(401).json({ message: "Not authorized" });
          } else {
              //req.user = user
            next();
          }
        }
      });
    } else {
      return res
        .status(401)
        .json({ message: "Not authorized, token not available" });
    }
};

exports.authUser = (req, res, next) => {
    let token = req.headers.authorization

    if (token) {
        token = token.slice(7, token.length)
        jwt.verify(token,SECRET_KEY, (err, decodedToken) => {
            if(err) {
                console.log(token);
                return res.status(403).json(token)
            }
            else{
                req.user = decodedToken;
                next()
            }
        })
    } else {
        return res.status(403).json("Invalid Token")
    }
}

exports.getUserByToken = (req, res) => {
    let token = req.headers.authorization
    if (token) {
        token = token.slice(7, token.length)
        jwt.verify(token,SECRET_KEY, (err, decodedToken) => {
            if(err) {
                return res.status(403).json("Invalid Token")
            }
            else{
                res.json(decodedToken)
            }
        })
    } else {
        return res.status(403).json("Invalid Token")
    }
}