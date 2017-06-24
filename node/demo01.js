var http = require('http');
var url = require('url');
var fs = require('fs');

var html = fs.readFileSync('../html/demo01.html');
// console.log(html);
http.createServer(function(req, res) {
	res.writeHead(200, {'Content-Type': 'text/plain;charset=utf8'});

	var params = url.parse(req.url, true).query;
	if (params.username && params.password) {
		res.write('用户名：' + params.username);
		res.write('<br>');
		res.write('密码：' + params.password);
	} else {
		res.write(html.toString());
	}
	res.end();
}).listen(3000);