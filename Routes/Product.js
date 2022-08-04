const express = require("express");
const router = express.Router();

//Models
const productModel = require("../Models/product.js");

// Product Api Routes

//@route    GET api/products
//@desc     Get all Products
//@access   Public

router.route("/").get((req, res) => {
  productModel.find({}, (err, productData) => {
    res.send(err || productData);
  });
});

//@route    POST api/products
//@desc     post a product
//@access   Public

router.route("/").post((req, res) => {
  const newProduct = new productModel({
    name: req.body.name,
    price: req.body.price,
  });
  newProduct.save((err) => res.json(err || "Product Inserted Successfully"));
});

//@route    PUT api/products
//@desc     Update a specific Product
//@access   Public

router.route("/:productName").put((req, res) => {
  productModel.findOneAndUpdate(
    { name: req.params.productName },
    { name: req.body.name, price: req.body.price },
    { new: true },
    (err) => res.send(err || `${req.params.productName} updated Successfully`)
  );
});

//@route    Delete api/products
//@desc     Delete a specific Product
//@access   Public

router.route("/:productId").delete((req, res) => {
  productModel.deleteOne({ _id: req.params.productId }, (err) =>
    res.send(err || `${req.params.productId} deleted Successfully`)
  );
});

module.exports = router;
