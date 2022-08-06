const mongoose = require("mongoose");

const ProductSchema = mongoose.Schema({
  code: { type: Number, require: true },
  name: { type: String, require: true },
  description: { type: String, require: true },
  price: { type: Number, require: true },
  specialPrice: { type: Number, require: true },
  discountPercentage: { type: Number, require: true },
  imagePath: { type: String, require: true },
});

const ProductModel = mongoose.model("products", ProductSchema);

module.exports = ProductModel;
