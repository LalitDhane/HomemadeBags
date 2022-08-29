//User Model
const userModel = require("../Models/userModel");

const getUser = async (req, res) => {
  try {
    let userData = await userModel.find({});
    res.send(userData);
  } catch (error) {
    res.send(error); 
  }
};

const addUser = async (req, res) => {
  const user = new userModel({
    username: req.body.username,
    password: req.body.password,
  });
  try {
    let result = await user.save();
    res.send(result); 
  } catch (error) {
    res.send(error);
  }
};

const deleteUser = async (req, res) => {
  try {
    await userModel.findByIdAndDelete(req.params.id);
    res.send(`${req.params.id} deleted successfully.`); 
  } catch (error) {
    res.send(error);
  }
};

module.exports = { getUser, addUser, deleteUser };
