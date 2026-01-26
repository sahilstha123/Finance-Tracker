exports.getUser = async (req, res) => {
  res.status(200).json({
    status: "success",
    message: "User fetched successfully"
  });
};

exports.createUser = async(req,res)=>{
  console.log(req.body)
  res.status(201).json({
    status:"success",
    message:"User created Successfully"
  })
}