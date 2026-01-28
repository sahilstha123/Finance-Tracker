const userSchema = require("./UserSchema.js")

exports.insertUser = (userData)=>{
    return userSchema(userData).save()
}

exports.AllUsers = ()=>{
    return userSchema.find()
}

exports.findUserByEmail = (email)=>{
    return userSchema.findOne({email})
}