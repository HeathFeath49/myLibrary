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
			
	},

	getBooksFromDB: function(cb){
		db.run("UPDATE Books SET `Title` = TRIM(REPLACE(REPLACE(REPLACE(`Title`, '\n', ' '), '\r', ' '), '\t', ' '))");
		db.run("UPDATE Books SET `Author` = TRIM(REPLACE(REPLACE(REPLACE(`Author`, '\n', ' '), '\r', ' '), '\t', ' '))");
		db.all("SELECT * FROM Books",function(err,results){
			if(err){
				return cb(err);
			}

			cb(null,results);
		});
	}

};

/*
getSurvey: function(cb){
		db.all("SELECT * FROM Survey", function(err,rows){
			if(err){
				return cb(err);
			}

			var survey = [];

			for(var i in rows){
				var q = rows[i];

				survey.push({
					qNum: q.id,
					question: q.question,
					answers: [
						q.answer1,
						q.answer2,
						q.answer3,
						q.answer4
					]
				});
			}

			cb(null,survey);
		});
	}
*/
