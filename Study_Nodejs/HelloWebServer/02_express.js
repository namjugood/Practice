var express = require('express'), // express 모듈 실행
    http = require('http'), // http 모듈 실행
    app = express(),
    server = http.createServer(app); 
    // http.createServer(app)함수가 app객체 및 http서버 연결

app.get('/', function(req, res){ // HTTP의 get함수로 get메서드 처리
    // function내 객체 - req : 요청 / res : 응답
    res.send('Hello /'); // res.send : 명령어 출력
});

app.get('/world.html', function(req, res){  // app.get으로 주소 뒷자리 생성
    res.send('Hello World');
});

// app객체에서 POST, PUT DELETE, OPTION, HEAD 등의 메서드 처리 가능

/*
server.listen(8000, function(){
    console.log('Express server listening on port' + server.address().port);
});
*/
// express는 http모듈로 생성한 http서버와 연결하지 않고
// app 객체에서 바로 listen() 함수로 서버를 실행할 수도 있음
// http 모듈과 연결하면 express와 socket.io와 같은 실시간 모듈을 같은 포트에서 실행 가능
var server = app.listen(8000, function(){
    console.log('Express server listening on port' + server.address().port);
});
