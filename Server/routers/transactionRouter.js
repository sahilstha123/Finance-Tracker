const express = require("express")
const { addTransaction, getAllTransactions,  deleteData } = require("../controllers/transactionController")
const asyncHandler = require("../utils/asyncHandler")
const router = express.Router()


router.post ("/",asyncHandler(addTransaction))
router.get("/",asyncHandler(getAllTransactions))
router.delete("/",asyncHandler(deleteData))
module.exports = router