require("./databaseConnection");
const express = require("express");
const cors = require("cors");
const router = require("./Routes/router");
const app = express();
const port = process.env.port || 3001;

//Middleware
app.use(express.json());
app.use(cors());

//Routes
app.use("/", router);

app.listen(port, () => {
  console.log(`Server is running on port : ${port}`);
});
