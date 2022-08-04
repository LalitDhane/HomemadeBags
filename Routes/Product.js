const express = require("express");
const router = express.Router();
const calculateDiscountPercentage = require("../Utils/Calulator");
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
  const discountPercentage = calculateDiscountPercentage(
    req.body.price,
    req.body.specialPrice
  );
  const newProduct = new productModel({
    code: req.body.code,
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    specialPrice: req.body.specialPrice,
    discountPercentage: discountPercentage,
    imagePath: req.body.imagePath,
  });
  newProduct.save((err) => res.json(err || "Product Inserted Successfully"));
});

//@route    PUT api/products
//@desc     Update a specific Product
//@access   Public

router.route("/:productCode").put((req, res) => {
  const discountPercentage = calculateDiscountPercentage(
    req.body.price,
    req.body.specialPrice
  );
  productModel.findOneAndUpdate(
    { code: req.params.productCode },
    {
      code: req.body.code,
      name: req.body.name,
      description: req.body.description,
      price: req.body.price,
      specialPrice: req.body.specialPrice,
      discountPercentage: discountPercentage,
      imagePath: req.body.imagePath,
    },
    { new: true },
    (err) => res.send(err || `${req.params.productCode} updated Successfully`)
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
