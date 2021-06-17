const express = require("express");
const router = express.Router();

const { getRoot } = require("../services/getRoot")
const { getItem } = require("../services/getItem")
const { getItemsBySearch } = require("../services/getItemsBySearch")

router.get("/", getRoot);
router.get("/items", getItemsBySearch);
router.get("/items/:id", getItem);

module.exports = router;
