var mysql = require('mysql');
console.log(mysql);

var connection = mysql.createConnection({
	host:'localhost',
	user:'root',
	password:'H1110H0211L0317N0226mAx',
	database:'my_library',
	port:3306
});

connection.connect();


connection.query('SELECT * FROM books',function(err,rows){
	if(err) throw err;

	console.log("Data received!");
	console.log(rows);
})
