//sqlite codes
"use strict";

var sqlite3 = require('sqlite3').verbose();
/*var dbFile = '../database.db';*/
var db = new sqlite3.Database('database.db');
/*var fs = require('fs');*/

/*
var dbExists = fs.existsSync(dbFile);
*/

/*db.run("INSERT INTO Books (`ID`,`Title`,`Author`) VALUES(4,'Green Eggs','Seuss')");*/

module.exports = {

	addBook: function(data,cb){
		db.serialize(function(){
			db.run("INSERT INTO Books (`Title`,`Author`) VALUES($book_title,$book_author)",{
				$book_title: data.book_title,
				$book_author: data.book_author

			})
		})
			
	}

};




