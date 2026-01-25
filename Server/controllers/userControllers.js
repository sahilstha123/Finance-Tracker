exports.getUser = async (req, res) => {
  res.status(200).json({
    status: "success",
    message: "User fetched successfully"
  });
};
