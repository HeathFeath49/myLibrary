"use strict";

var express = require('express');
var router = express.Router();
var fs = require('fs');
var myLibDB = require('../external/myLibraryDB');
var myModule = require('../external/module.js');

console.log(myLibDB);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ejs' });
});

router.post('/',function(req,res){
	var bookForm = req.body;
	myLibDB.addBook(bookForm,function(err,req,res){
		if(err){
			throw err;
		}
		
	});
	res.send('Book Added!');
})

/*exports.index = function(req, res){
res.render('index', { title: 'ejs' });};*/

module.exports = router;
