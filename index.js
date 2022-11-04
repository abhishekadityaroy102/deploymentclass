const express = require("express");
require("dotenv").config;
const { connection } = require("./db");
const port = process.env.PORT || 8080;
const app = express();
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Welcome to my world!");
});
app.listen(port, async () => {
  try {
    await connection();
    console.log("connected");
  } catch {
    console.log(err.message);
  }
  console.log("listening on port no : 8080");
});
