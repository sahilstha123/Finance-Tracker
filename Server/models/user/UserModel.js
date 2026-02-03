const userSchema = require("./UserSchema.js")

exports.insertUser = (userData)=>{
    return userSchema(userData).save()
}


exports.findUserByEmail = (email)=>{
    return userSchema.findOne({email})
}
