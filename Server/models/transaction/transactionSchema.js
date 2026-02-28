const mongoose = require ("mongoose")
const transactionSchema = new mongoose.Schema({
    type:{
        type: String,
        required: true,
        default: "income",
        enum: ["income","expense"]
    },
    title:{
        type: String,
        required: true,
        trim: true

    },
    amount:{
        type: Number,
        required: true,
        min: 5

    },
    tdate:{
        type: Date,
        required: true
    },
    userId:{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    }
},{timestamps: true})

const transactionCollection = mongoose.model("Transaction", transactionSchema)

module.exports = transactionCollection