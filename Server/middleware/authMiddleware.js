const { verifyjwt } = require("../utils/jwt.js")
const  asyncHandler  = require("../utils/asyncHandler.js")
const { findUserByEmail } = require("../models/user/UserModel.js")
const apiError = require("../utils/apiError.js")
exports.auth = asyncHandler(async (req, res, next) => {

    const authorization = req.headers.authorization || req.headers["x-auth-token"]
    
    if(!authorization){
         throw new apiError("No token provided", 401)
    }
    const token = authorization.startsWith("Bearer") ? authorization.split(" ")[1] : authorization
    const decode = verifyjwt(token)

    // verify email
    if (decode?.email) {
        const user = await findUserByEmail(decode.email)
        if (user?._id) {
            req.userInfo = user
            return next()
        }
        throw new apiError("User not found", 401)
    }
    console.log(decode)
    

})