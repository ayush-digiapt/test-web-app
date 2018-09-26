var express = require('express');
var router = express.Router();

// get products
exports.getProducts = function(req, res) {
	console.log("inside products controller ==> getProducts function");
	console.log("resquest:", req);
	res.send("prods from controller");
}



