var express = require('express');
var router = express.Router();
var db = require('../db/db');
var mysql = require('mysql');

// get products
exports.getProducts = function(req, res) {
//exports.getDbConnection =  function () {
    db.getDbConnection();
    //db.getTest
    connection = db.getDbConnection();
    console.log("Conection: ", connection);
    console.log("inside products controller ==> getProducts function - 1");
    var queryStatement = "select * from products";
    connection.query(queryStatement,function(err,result){
        if(err) {
            console.log("error: ",err);
            res.status(500).send(err);      
        } else {
            console.log("success: ",result);
            res.status(200).send(result);       
        }
    });
}
exports.getmysql = function(req, res) {
    console.log("inside products controller ==> getProducts function");
    console.log("resquest:", req);
    res.send("prods from controller");
}

// select data
exports.getfatch= function(req, res) {
    console.log("inside products controller ==> getProducts function");
    console.log("resquest:", req);
    res.send("prods from controller");
}


