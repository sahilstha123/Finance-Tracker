const jwt = require("jsonwebtoken")
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
        return null
    }
}