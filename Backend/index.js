const express = require("express");
const router = require('./router')
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv")

dotenv.config();

let PORT = 7777;

const app = express();

app.use(cors());

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.listen(PORT, async () => {
  console.log(`server up on port ${PORT}`);
});

app.use(router)

mongoose
  .connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to MongoDB");
  })
  .catch((err) => {
    console.log(err);
  });