const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  code: Number,
  name: String,
  description: String,
  price: Number,
  specialPrice: Number,
  discountPercentage: Number,
  imagePath: String,
});

const ProductModel = mongoose.model("products", ProductSchema);

module.exports = ProductModel;
