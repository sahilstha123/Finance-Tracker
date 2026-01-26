const { insertUser } = require("../models/user/UserModel");

exports.getUser = async (req, res) => {
  res.status(200).json({
    status: "success",
    message: "User fetched successfully"
  });
};

exports.createUser = async(req,res)=>{
  const user = await insertUser(req.body)
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