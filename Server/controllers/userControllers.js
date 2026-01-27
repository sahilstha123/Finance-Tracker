const { insertUser, AllUsers } = require("../models/user/UserModel");
const { hasPassword } = require("../utils/bcrypt");

exports.getUser = async (req, res) => {
  const users = await AllUsers();
  res.status(200).json({
    status: "success",
    message: "User fetched successfully",
    data: users
  });
};

exports.createUser = async(req,res)=>{
  const user = await insertUser(req.body)
  const hashPass = await hasPassword(req.body.password)
  console.log("hasPass", hashPass)
  user?._id?
  res.status(201).json({
    status:"success",
    message:"User created Successfully"
  })
  : res.status(400).json({
    status:"error",
    message:"Unable to create user"
  })
}