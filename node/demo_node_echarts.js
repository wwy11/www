// var http = require('http');
var express = require('express');
var mysql = require('mysql');
var path = require('path');
var app = express();

app.use(express.static('../'));

app.get('/get_data', function(req, res) {
	var connection = mysql.createConnection({
		'host': '127.0.0.1',
		'user': 'root',
		'password': '19931015',
		'database': 'php'
	});
	connection.connect();

	connection.query('SELECT * FROM user WHERE name in ("吴伟泱", "龙梦常", "曹丹")', function(error, results, fields) {
		if (error) throw error;
		res.send(results);
	});
})

app.get('/demo_node_echarts.html', function(req, res) {
	var pathname = __dirname + '/../' + 'demo_node_echarts.html';
	res.sendFile(path.resolve(pathname));
})

var server = app.listen(8888, function() {
	console.log('Server running at http://127.0.0.1:8888/');
})