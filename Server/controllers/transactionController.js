const { insertNewTransaction } = require("../models/transaction/transactiobModel")

exports.addTransaction = async (req, res, next) => {
    
    const transactionData = {
        ...req.body,
        userId: req.userInfo._id
    }
    const transaction = await insertNewTransaction(transactionData)
    res.json({
        status: "success",
        message: "New Transaction added Successfully",
        data: transaction
    })
    
}