const { insertNewTransaction, getTransactions } = require("../models/transaction/transactiobModel")

exports.addTransaction = async (req, res, next) => {

    const transactionData = {
        ...req.body,
        userId: req.userInfo._id
    }
    const transaction = await insertNewTransaction(transactionData)
    res.status(200).json({
        status: "success",
        message: "New Transaction added Successfully",
        data: transaction
    })

}
// return all the transactions for the specific users
exports.getAllTransactions = async (req, res) => {
    const  userId  = req.userInfo?._id
    const transaction = await getTransactions(userId) || []
    res.status(200).json({
        status: "success",
        message: "Transaction fetched successfully",
        data: transaction
    })
}