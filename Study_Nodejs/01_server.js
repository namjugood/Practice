var http = require('http');

var server = http.createServer(
	function(req, res){
		res.writeHead(200, {'Content-Type' : 'text/plain'});
		res.end('Hello World');
	}
);

server.listen(8000);

// 8000번 포트로 서버가 접속을 계속 대기
