require("./databaseConnection");
const express = require("express");
const cors = require("cors");
const app = express();
const productRoute = require(__dirname + "/Routes/productRoute");
const userRoute = require(__dirname + "/Routes/userRoute");
const port = process.env.port || 3001;

//Middleware
app.use(express.json());
app.use(cors());

//Using Routes
app.use("/api/products", productRoute);
app.use("/api/users", userRoute);

app.listen(port, () => {
  console.log(`Server is running on port : ${port}`);
});
