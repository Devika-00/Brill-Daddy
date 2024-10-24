const express = require("express");
const dotenv = require("dotenv");
dotenv.config();
const cors = require("cors");
const ENV = require("./Config/ENV");
const connectDb = require("./Config/Connection");

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: true,
    methods: ["GET", "POST", "PUT", "DELETE"],
  })
);

const port = ENV.PORT || 5000;

app.listen(port, () => {
  connectDb();
  console.log(`Server is running at port ${port}`);
});
