//test comment

"use strict";

var express = require('express');
var router = express.Router();
var fs = require('fs');
var myLibDB = require('../external/myLibraryDB');
var myModule = require('../external/module.js');

/*console.log(myLibDB);*/

/* GET Book form */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'ejs' });
});

router.get('/myLibrary',function(req,res,next){
	
	myLibDB.getBooksFromDB(function(err,results){
		if(err){
			throw err;
		}
		res.render('myLibrary',{title:'ejs',books:results});
		/*res.send(results);*/
	});

	/*console.log(x);*/
	
})



router.post('/',function(req,res){
	var bookForm = req.body;
	myLibDB.addBook(bookForm,function(err,req,res){
		if(err){
			throw err;
		}
		
	});
	res.redirect('/myLibrary');
})

/*exports.index = function(req, res){
res.render('index', { title: 'ejs' });};*/

module.exports = router;
