const jwt = require("jsonwebtoken")
const apiError = require("./apiError")
exports.signJwt = (obj) => {

    const token = jwt.sign(obj, process.env.JWT_SECRET_KEY, {
        expiresIn: "1d"
    })
    return token
}
exports.verifyjwt = (token) => {
    try {

        return jwt.verify(token, process.env.JWT_SECRET_KEY)
    }
    catch (error) {
        console.log(error.name)
        if(error.name === "TokenExpiredError")
        {
            throw new apiError("Token Expired", 401)
        }
        throw new apiError("Invalid  Token", 401)
    }
}