const express = require("express");
const router = express.Router();
const asyncHandler = require("../utils/asyncHandler.js")
const {createUser, loginUser} = require("../controllers/userControllers.js")


router.post("/users/signup",asyncHandler(createUser))
router.post("/users/login",asyncHandler(loginUser))

module.exports = router;