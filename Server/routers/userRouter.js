const express = require("express");
const router = express.Router();
const asyncHandler = require("../utils/asyncHandler.js")
const { createUser, loginUser, getUser } = require("../controllers/userControllers.js")
const {auth} = require("../middleware/authMiddleware.js")


router.post("/signup", asyncHandler(createUser))
router.post("/login", asyncHandler(loginUser))
router.get("/", auth, asyncHandler(getUser))

module.exports = router;