require("./databaseConnection");
const express = require("express");
const cors = require("cors");
const router = require("./Routes/router");
const morgan = require("morgan");
const app = express();
const port = process.env.port || 3001;

//Middleware
app.use(express.json());
app.use(cors());
app.use(
  morgan(":method :url :status :res[content-length] - :response-time ms")
);

//Routes
app.use("/", router);

app.listen(port, () => {
  console.log(`Server is running on port : ${port}`);
});
