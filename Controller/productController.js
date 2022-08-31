//Utils
const ApiUtil = require("../Utils/apiUtil");
//Models
const productModel = require("../Models/productModel.js");

const getProduct = async (req, res) => {
  try {
    let user = await productModel.find({});
    res.send(user);
  } catch (error) {
    res.send(error);
  }
};

const addNewProduct = async (req, res) => {
  try {
    const newProduct = new productModel(ApiUtil.getProductObject(req));
    await newProduct.save();
    res.send("Product Inserted Successfully");
  } catch (error) {
    res.send(error);
  }
};

const updateProduct = async (req, res) => {
  try {
    await productModel.findOneAndUpdate(
      { code: req.params.productCode },
      { ...ApiUtil.getProductObject(req) },
      { new: true }
    );
    res.send(`${req.params.productCode} updated Successfully`);
  } catch (error) {
    res.send(error);
  }
};

const deleteProduct = async (req, res) => {
  try {
    await productModel.deleteOne({ _id: req.params.productId });
    res.send(`${req.params.productId} deleted Successfully`);
  } catch (error) {
    res.send(error);
  }
};

module.exports = { getProduct, addNewProduct, updateProduct, deleteProduct };
