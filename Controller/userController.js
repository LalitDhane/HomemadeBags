//User Model
const userModel = require("../Models/userModel");

const getUser = (req, res) => {
  userModel.find({}, (err, userData) => {
    res.send(err || userData);
  });
};

const addUser = (req, res) => {
  const user = new userModel({
    username: req.body.username,
    password: req.body.password,
  });
  user.save((err, result) => {
    res.send(err || result);
  });
};

const deleteUser = (req, res) => {
  userModel.findByIdAndDelete(req.params.id, (err) => {
    res.send(err || `${req.params.id} deleted successfully.`);
  });
};

module.exports = { getUser, addUser, deleteUser };
