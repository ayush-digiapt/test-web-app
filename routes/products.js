var express = require('express');
var router = express.Router();

var productsController = require('../controllers/products');
var mysqlController = require('mysql');
var db = require('../db/db');

/* GET products. */
router.get('/', productsController.getProducts);
router.get('/test', db.getTest);
//router.get('/', productsController.getfatch);

module.exports = router;