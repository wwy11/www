var http = require('http');
var querystring = require('querystring');
var fs = require('fs');

var postHTML = fs.readFileSync('../html/demo02.html');

http.createServer(function(req, res) {
	var data = '';
	req.on('data', function(chunk) {
		data += chunk;
	});
	req.on('end', function() {
		data = querystring.parse(data);
		res.writeHead(200, {'Content-Type': 'text/html; charset=utf8'});
		if (data.username && data.password) {
			res.write('用户名：' + data.username);
			res.write('<br>');
			res.write('密码：' + data.password);
		} else {
			res.write(postHTML);
		}
		res.end();
	});
}).listen(3000);