const express = require("express");
const router = express.Router();

//User Model
const userModel = require("../Models/userModel");

//@route    Get api/users
//@desc     get all users
//@access   public

router.route("/").get((req, res) => {
  userModel.find({}, (err, userData) => {
    res.send(err || userData);
  });
});

//@route    Post api/users
//@desc     Create new user
//@access   public

router.route("/").post((req, res) => {
  const user = new userModel({
    username: req.body.username,
    password: req.body.password,
  });
  user.save((err, result) => {
    res.send(err || result);
  });
});

//@route    Delete api/user
//@desc     Delete a user
//@access   public

router.route("/:id").delete((req, res) => {
  userModel.findByIdAndDelete(req.params.id, (err) => {
    res.send(err || `${req.params.id} deleted successfully.`);
  });
});
module.exports = router;
