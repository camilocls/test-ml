const express = require("express");
const router = express.Router();

const itemsService = require("../services/items");

router.get("/", itemsService.getRoot);

router.get("/items", itemsService.getItems);

router.get("/items/:id", itemsService.getItem);

module.exports = router;
