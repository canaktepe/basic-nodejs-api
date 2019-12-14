const express = require("express");

var usersController = require("./controller/user");
var productsController = require("./controller/product");

const router = express.Router();

router.use("/users", usersController);
router.use("/products", productsController);

module.exports = router;
