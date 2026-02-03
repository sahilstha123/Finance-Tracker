const bcrypt = require("bcryptjs")

exports.hashPassword = async(password)=>{
    return bcrypt.hash(password,10)
}

exports.comparePassword = async(plainPassword, hashPassword)=>{
    return bcrypt.compare(plainPassword, hashPassword)
}
