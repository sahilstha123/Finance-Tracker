exports.addTransaction = async (req,res,next) => {
    return res.json({
            status : "success",
            message: "This is a transaction"
    })
}