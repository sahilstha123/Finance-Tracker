const userSchema = require("./UserSchema.js")

exports.insertUser = (userData)=>{
    return userSchema(userData).save()
}

exports.AllUsers = ()=>{
    return userSchema.find()
}