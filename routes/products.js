var express = require('express');
var router = express.Router();
var productsController = require('../controllers/products');

/* GET products. */
router.get('/', productsController.getProducts);

module.exports = router;
