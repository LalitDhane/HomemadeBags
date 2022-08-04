const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const productModel = require(__dirname + "/Models/product.js");
const app = express();
const port = process.env.port || 3001;
require("dotenv").config();

//Middleware
app.use(express.json());
app.use(cors());

//Connecting to the Database
mongoose
  .connect(process.env.DBURL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to DB.");
    app.listen(port, () => {
      console.log(`Server is running on port : ${port}`);
    });
  })
  .catch((err) => {
    console.log("Error : " + err);
  });

// Api Routes

//get all Products
app.get("/", (req, res) => {
  productModel.find({}, (err, productData) => {
    res.send(err || productData);
  });
});

//Add new Product
app.post("/", (req, res) => {
  const newProduct = new productModel({
    name: req.body.name,
    price: req.body.price,
  });
  newProduct.save((err) => res.json(err || "Product Inserted Successfully"));
});

//Update an existing Product

app.put("/:productName", (req, res) => {
  productModel.findOneAndUpdate(
    { name: req.params.productName },
    { name: req.body.name, price: req.body.price },
    { new: true },
    (err) => res.send(err || `${req.params.productName} updated Successfully`)
  );
});

//Delete an existing Product

app.delete("/:productId", (req, res) => {
  productModel.deleteOne({ _id: req.params.productId }, (err) =>
    res.send(err || `${req.params.productId} deleted Successfully`)
  );
});
