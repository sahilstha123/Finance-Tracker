const { insertUser, findUserByEmail } = require("../models/user/UserModel");
const { hashPassword, comparePassword } = require("../utils/bcrypt");
const { signJwt } = require("../utils/jwt");


exports.createUser = async (req, res) => {
  const { email, password } = req.body

  // email and password are required
  if (!email || !password) {
    return res.status(400).json({
      status: "error",
      message: "Email and Password are required"
    })
  }

  const existingUser = await findUserByEmail(email)
  // checking if user already exists
  if (existingUser?._id) {
    return res.status(409).json({
      status: "error",
      message: "User already exists with this email"
    })
  }

  // hasing password
  const hashPass = await hashPassword(password)
  const user = await insertUser({
    ...req.body
    , password: hashPass
  })

  user?._id ?
    res.status(201).json({
      status: "success",
      message: "User created Successfully",
    })
    : res.status(400).json({
      status: "error",
      message: "Unable to create user"
    })
}

// login Api 

exports.loginUser = async (req, res) => {
  const { email, password } = req.body
  // email and password are required
  if (!email || !password) {
    return res.status(400).json({
      status: "error",
      message: "Email and Password are required"
    })
  }
  const user = await findUserByEmail(email)
  if (!user) {
    return res.status(401).json({
      status: "error",
      message: "Invalid Email or Password"
    })
  }
const matchUser = await comparePassword(password, user.password)
  if (!matchUser) {
    return res.status(401).json({
      status: "error",
      message: "Invalid Email or Password"
    })
  }
  const accessJwt = signJwt({
    email
  })
  return res.json({
    status: "success",
    message: "Login successfully",
    user:{
      _id: user._id,
      name: user.name,
      email: user.email,
      accessJwt
    }
  })
}