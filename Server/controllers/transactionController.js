exports.addTransaction = async (req,res,next) => {

    const {_id} = req.userInfo
    req.body.userId = _id
    console.log(req.body)
    return res.json({
            status : "success",
            message: "This is a transaction"
    })
}