const express = require("express");

var usersRouter = require('./routes/user');
var productsRouter = require('./routes/product');

const router = express.Router();

router.use('/users', usersRouter)
router.use('/products', productsRouter)

module.exports = router;