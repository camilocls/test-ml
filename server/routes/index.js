const express = require("express");
const { getRoot, getItemsBySearch, getItem } = require("../services/items");
const router = express.Router();

router.get("/", getRoot);

router.get("/items", getItemsBySearch);

router.get("/items/:id", getItem);

module.exports = router;
