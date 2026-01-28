const mongoose = require("mongoose")
const userSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
        index: 1,
        trim: true,
        lowercase: true,
    },
    password: {
        type: String,
        required: true,
        trim: true,

    }
}, { timestamps: true })

const UserCollection = mongoose.model("User", userSchema)

module.exports = UserCollection