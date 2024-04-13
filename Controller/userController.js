//User Model
const userModel = require("../Models/userModel");

const loginUser = async (req, res) => {
  try {
    const userData = await userModel.findOne({
      username: req.body.username,
      password: req.body.password,
    });
    if (userData) {
      res.status(200).json({
        status: "success",
        message: "You have logged in Successfully.",
      });
    } else {
      res.status(401).json({
        status: "failed",
        message: "Invalid Username or Password. Please try again.",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
};

const signInUser = async (req, res) => {
  const user = new userModel({
    username: req.body.username,
    password: req.body.password,
  });
  try {
    const result = await user.save();
    res.send("User Created");
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
};

const deleteUser = async (req, res) => {
  try {
    await userModel.findByIdAndDelete(req.params.id);
    res.send(`${req.params.id} deleted successfully.`);
  } catch (error) {
    res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
};

module.exports = { loginUser, signInUser, deleteUser };
