const { insertNewTransaction, getTransactions, deleteTransactions } = require("../models/transaction/transactiobModel")

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
    const userId = req.userInfo?._id
    const transaction = await getTransactions(userId) || []
    res.status(200).json({
        status: "success",
        message: "Transaction fetched successfully",
        data: transaction
    })
}

// delete transactions
exports.deleteData = async (req, res) => {
    const { ids } = req.body
    const { _id } = req.userInfo

    if (!ids || !Array.isArray(ids) || ids.length === 0) {
        return res.status(400).json({
            status: "error",
            message: "ids array is required"

        })
    }
    const result = await deleteTransactions(_id, ids)

    if (result.deletedCount === 0) {
        return res.status(404).json({
            status: "error",
            message: "No transactions found"
        })
    }
    res.status(200).json({
        status: "success",
        message: result.deletedCount + " " + "Transaction deleted successfully",

    })
}