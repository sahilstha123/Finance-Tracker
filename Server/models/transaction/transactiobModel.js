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