const express = require("express");
const router = express.Router();
const asyncHandler = require("../utils/asyncHandler.js")
const {getUser,createUser} = require("../controllers/userControllers.js")


router.get("/users",asyncHandler(getUser))
router.post("/users",asyncHandler(createUser))

module.exports = router;