var express = require("express");
var productEntity = require("../entities/product");

var router = express.Router();

let products = [];

products.push(new productEntity(1, "test", "desc"));

router
  /* GET products page. */
  .get("/", function(req, res, next) {
    res.status(200).json(products);
  })
  .post("/", function(req, res, next) {
    var product = new productEntity(
      req.body.id,
      req.body.name,
      req.body.description
    );
    products.push(product);
    res.status(200).json(products);
  });

module.exports = router;
