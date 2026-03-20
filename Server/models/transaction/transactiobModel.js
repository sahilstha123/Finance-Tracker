const apiError = require("../../utils/apiError")
const transactionSchema = require("./transactionSchema")

exports.insertNewTransaction = async(transactionData)=>{

    const {title, tdate, userId, type,amount} = transactionData

    const existingTransaction = await transactionSchema.findOne({
        userId,
        title,
        tdate,
        type
    })

    if(existingTransaction)
    {
        existingTransaction.amount+= Number(amount)
        return await existingTransaction.save()
    }
    else{
        return await transactionSchema(transactionData).save()
    }
}

exports.getTransactions = async(userId)=>{
    if(!userId)
    {
        throw new apiError("UserId is required",400)
    }
    return transactionSchema.find({
        userId
    })
    .lean()
}
// delete query
exports.deleteTransactions = (userId, idsToDelete)=>{

    return transactionSchema.deleteMany({userId, _id:{$in: idsToDelete}})
}