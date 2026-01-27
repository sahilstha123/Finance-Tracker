const bcrypt = require("bcryptjs")

exports.hasPassword = async(password)=>{
    return bcrypt.hash(password,10)
}
