const express = require("express");
const cors = require("cors");
const menu = require("./routes");

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cors());

app.use("/api", menu);

module.exports = app;
