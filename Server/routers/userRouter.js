const express = require("express");
const router = express.Router();
const asyncHandler = require("../utils/asyncHandler.js")
const {getUser} = require("../controllers/userControllers.js")


router.get("/users",asyncHandler(getUser))

module.exports = router;