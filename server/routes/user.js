var express = require('express');
var userEntity = require('../entities/user')

var router = express.Router();

let users = [];

router
    /* GET users page. */
    .get('/', function (req, res, next) {
        res.status(200).json(users);
    })
    .post('/', function (req, res, next) {
        var user = new userEntity(req.body.id, req.body.firstName, req.body.lastName, req.body.city);
        users.push(user);
        res.status(200).json(users);
    });

module.exports = router;