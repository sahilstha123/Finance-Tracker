const { insertUser, AllUsers,findUserByEmail } = require("../models/user/UserModel");
const { hasPassword } = require("../utils/bcrypt");

exports.getUser = async (req, res) => {
  const users = await AllUsers();
  res.status(200).json({
    status: "success",
    message: "User fetched successfully",
    data: users
  });
};

exports.createUser = async (req, res) => {
  const { email, password } = req.body
  const existingUser = await findUserByEmail(email)

  // email and password are required
  if(!email || !password){
    return res.status(400).json({
      status:"error",
      message:"Email and Password are required"
    })
  }

  // checking if user already exists
  if (existingUser?._id) {
    return res.status(409).json({
      status: "error",
      message: "User already exists with this email"
    })
  }

// hasing password
  const hashPass = await hasPassword(password)
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