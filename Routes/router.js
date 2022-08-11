const express = require("express");
const router = express.Router();

//Controllers
const userController = require("../Controller/userController");
const productController = require("../Controller/productController");

// ------------------------------  Product API Routes ----------------------------------- //

//@route    GET api/products
//@desc     Get all Products
//@access   Public
router.route("/api/products").get(productController.getProduct);

//@route    POST api/products
//@desc     post a product
//@access   Public
router.route("/api/products").post(productController.addNewProduct);

//@route    PUT api/products
//@desc     Update a specific Product
//@access   Public
router.route("/api/products/:productCode").put(productController.updateProduct);

//@route    Delete api/products
//@desc     Delete a specific Product
//@access   Public
router
  .route("/api/products/:productId")
  .delete(productController.deleteProduct);

// -------------------------------------- User API routes ------------------------------- //

//@route    Get api/users
//@desc     get all users
//@access   public
router.route("/api/users").get(userController.getUser);

//@route    Post api/users
//@desc     Create new user
//@access   public
router.route("/api/users").post(userController.addUser);

//@route    Delete api/user
//@desc     Delete a user
//@access   public
router.route("/api/users/:id").delete(userController.deleteUser);

//@route    *
//@desc     Default route
//@access   public
router.route("*").all((req, res) => {
  res.send("Invalid Route.");
});

module.exports = router;
