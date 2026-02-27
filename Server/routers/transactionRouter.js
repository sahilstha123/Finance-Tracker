const express = require("express")
const { addTransaction } = require("../controllers/transactionController")
const asyncHandler = require("../utils/asyncHandler")
const router = express.Router()


router.post ("/",asyncHandler(addTransaction))
module.exports = router