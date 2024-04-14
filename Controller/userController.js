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
        data: [userData.username],
        message: "You have logged in Successfully.",
      });
    } else {
      res.status(401).json({
        status: "failed",
        data: [],
        message: "Invalid Username or Password. Please try again.",
      });
    }
  } catch (error) {
    res.status(500).json({
      status: "error",
      data: [],
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
    const userData = await user.save();
    res.status(200).json({
      status: "Success",
      data: [userData.username],
      message: "User Created",
    });
  } catch (error) {
    res.status(500).json({
      status: "error",
      data: [],
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
      data: [],
      message: "Internal Server Error",
    });
  }
};

module.exports = { loginUser, signInUser, deleteUser };
