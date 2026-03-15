const express = require("express")
const { addTransaction, getAllTransactions } = require("../controllers/transactionController")
const asyncHandler = require("../utils/asyncHandler")
const router = express.Router()


router.post ("/",asyncHandler(addTransaction))
router.get("/",asyncHandler(getAllTransactions))
module.exports = router