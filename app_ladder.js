let createError = require('http-errors');
let express = require('express');
let path = require('path');
let cookieParser = require('cookie-parser');
let logger = require('morgan');

let request = require('request'); // request module
let urlencode = require('urlencode'); // urlencode module
let mongoose = require('mongoose'); // mongoose module
let async = require('async'); // async model
let userModel = require('./model/user.js'); // db model
let recordModel = require('./model/record.js'); // db model

let indexRouter = require('./routes/index');
let usersRouter = require('./routes/users');

let app = express();
appSet();
mongoSet();

const LADDER_DELAY = 60; // 사다리 딜레이

function appSet(){
	// view engine setup
	app.set('views', path.join(__dirname, 'views'));
	app.set('view engine', 'jade');

	app.use(logger('dev'));
	app.use(express.json());
	app.use(express.urlencoded({ extended: false }));
	app.use(cookieParser());
	app.use(express.static(path.join(__dirname, 'public')));

	app.use('/', indexRouter);
	app.use('/users', usersRouter);



	// catch 404 and forward to error handler
	app.use(function(req, res, next) {
	  next(createError(404));
	});

	// error handler
	app.use(function(err, req, res, next) {
	  // set locals, only providing error in development
	  res.locals.message = err.message;
	  res.locals.error = req.app.get('env') === 'development' ? err : {};

	  // render the error page
	  res.participantus(err.status || 500);
	  res.render('error');
	});
}

function mongoSet(){
	// mongoDB
	mongoose.connect("mongodb://127.0.0.1:27017/ladder", { useUnifiedTopology: true, useNewUrlParser: true });
	const db = mongoose.connection;
	db.on('error', console.error);  // mongoDB 연동 실패 시 에러 메시지 출력
	db.once('open', () =>{
	  console.log('connected to mongoDB server'); // mongoDB 연동 성공 시 메시지 출력
	});
}

app.io = require('socket.io')(); // socket.io 

app.io.on('connection', function(socket){
	client = socket.id; 
	console.log("client id " + client + " connected");
	socket.join("ladder");
	
	socket.on('discon', function(done){ // socket 연결 해제
		socket.disconnect();
		console.log("client id " + client + " disconnected, requests done: " + done);
	});
	
	socket.on('load', function(){
		app.io.to(client).emit("ladder", ladder);
	});
	
	socket.on('reqRec', function(){ // 회차 정보 뿌려주기
		let record;
		recordModel.find(function(err, result){
			app.io.to(client).emit("resRec", result);
		}).sort({"_id": -1}).limit(10);
	});
	
	socket.on('idCheck', function(id){
		userModel.findOne({"id": id}, function(err, result){
			if(result == null){
				console.log("id checked(not using)");
				app.io.to(client).emit('idCheck', true); // db에 정보가 있을 경우 로드
			}
			else{
				console.log("id checked(already using)");
				app.io.to(client).emit('idCheck', false); // db에 정보가 있을 경우 로드
			}
		}); // db에서 소환사 정보 찾기
	});
	
	socket.on('register', function(data){
		
	});
	
});

// 회원가입

// 회차 기록 
function saveRecord(){
	let instance = new recordModel();
	instance.side = ladder.side;
	instance.line = ladder.line;
	instance.result = ladder.result;
	instance.save(function(err){
		if(err){
			console.log(err);
		}
	});
	console.log("ladder record saved");
}

// 사다리

let ladder = {"side": String, "line": Number, "result": String, "time": LADDER_DELAY};
let working = false;

let timer = setInterval(function(){
	
	ladder.time--;
	
	if(ladder.time < 0 && !working){
		working = true;
		ladder = roll(); // 사다리 생성
		app.io.to("ladder").emit('ladder', ladder); // 접속자들에게 뿌려주기
		saveRecord(); // 회차 기록 저장
		working = false;
	}
	
}, 1000);

function roll(){ // 사다리 생성
	let newLadder = {"side": String, "line": Number, "result": String, "time": LADDER_DELAY, "img": String};
	let imgName = "";
	
	if(Math.random() <= 0.5){ // 좌우
		newLadder.side = "l";
		imgName += "l_";
	}
	else{
		newLadder.side = "r";
		imgName += "r_";
	}
	
	if(Math.random() <= 0.5){ // 줄개수
		newLadder.line = 3;
		imgName += "3_";
	}
	else{
		newLadder.line = 4;
		imgName += "4_";
	}
	
	if(newLadder.side == "l"){ // 사다리 시작이 좌 일 경우
		if(newLadder.line == 3){
			newLadder.result = "e";
			imgName += "e";
		}
		else{
			newLadder.result = "o";
			imgName += "o";
		}
	}
	else{ // 사다리 시작이 우 일 경우
		if(newLadder.line == 3){
			newLadder.result = "o";
			imgName += "o";
		}
		else{
			newLadder.result = "e";
			imgName += "e";
		}
	}
	
	newLadder.img = imgName;
	
	return newLadder;
}

module.exports = app;