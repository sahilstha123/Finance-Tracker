const asyncHandler = require("../utils/asyncHandler.js")
const { verifyjwt } = require("../utils/jwt.js")

exports.auth = asyncHandler(async (req, res, next) => {

    const authorization = req.headers.authorization || req.header["x-auth-token"]

    const token = authorization.startsWith("Bearer") ? authorization.split(" ")[1] : authorization
    const decode =  verifyjwt(token)
    console.log(decode)
    const isAuth = true
    isAuth ? next() : res.status(403).json({
        error: "unauthorized"
    })
})