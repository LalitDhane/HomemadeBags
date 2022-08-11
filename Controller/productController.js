//Utils
const ApiUtil = require("../Utils/apiUtil");
//Models
const productModel = require("../Models/productModel.js");

const getProduct = (req, res) => {
  productModel.find({}, (err, productData) => {
    res.send(err || productData);
  });
};

const addNewProduct = (req, res) => {
  const newProduct = new productModel(ApiUtil.getProductObject(req));
  newProduct.save((err) => res.json(err || "Product Inserted Successfully"));
};

const updateProduct = (req, res) => {
  productModel.findOneAndUpdate(
    { code: req.params.productCode },
    { ...ApiUtil.getProductObject(req) },
    { new: true },
    (err) => res.send(err || `${req.params.productCode} updated Successfully`)
  );
};

const deleteProduct = (req, res) => {
  productModel.deleteOne({ _id: req.params.productId }, (err) =>
    res.send(err || `${req.params.productId} deleted Successfully`)
  );
};

module.exports = { getProduct, addNewProduct, updateProduct, deleteProduct };
