const transactionSchema = require("./transactionSchema")

exports.insertNewTransaction = (transactionData)=>{
    return transactionSchema(transactionData).save()
}