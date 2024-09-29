$( document ).ready(function() {

	// dom 정의
	const $timer = $('.timer');
	const $result = $('.result');
	const $resultImg = $result.children('img');
	const $record = $('.record');
	const $recordBody = $record.children('.card-body');
	const $recordbar = $('#recordbar').html();
	
	let done = 0;
	let socket = io();

	function discon() {
		// 소켓 통신 종료 후 동작
		socket.emit('discon', done);
	}
	
	socket.on('ladder', function(ladder){ // 사다리 정보 받아오기

		let time = ladder.time;
		let min;
		let sec;

		let timer = setInterval(function(){

			min = Math.floor(time/60);
			sec = time%60;
			
			if(time < 51){
				$timer.text(min + "분 " + sec + "초 후 추첨 시작");
			}
			
			if(time == 50){
				$resultImg.attr('src', 'images/ladder/standby.png');
				
				// 지난 회차 기록에 이번 기록 저장
				if($recordBody.children().length == 10){
					$recordBody.children('.recordbar:eq(9)').remove();
				}
				$recordBody.prepend($recordbar);
				let recordbar = $recordBody.children('.recordbar:eq(0)');
				recordbar.children('img:eq(0)').attr('src', 'images/ladder/'+ladder.side+'.png');
				recordbar.children('img:eq(1)').attr('src', 'images/ladder/'+ladder.line+'.png');
				recordbar.children('img:eq(2)').attr('src', 'images/ladder/'+ladder.result+'.png');
			}
			
			if(time <= 0){
				clearInterval(timer);
				$timer.text("스피드사다리 추첨 시작");
				$resultImg.attr('src', 'images/ladder/' + ladder.img + '.gif');
			}
			
			time--;

		}, 1000);

		done++;
	})
	
	socket.on('resRec', function(record){
		record = JSON.parse(JSON.stringify(record));
		console.log(record);
		for(let i=0; i<record.length; i++){
			$recordBody.prepend($recordbar);
			let recordbar = $recordBody.children('.recordbar:eq(0)');
			recordbar.children('img:eq(0)').attr('src', 'images/ladder/'+record[i].side+'.png');
			recordbar.children('img:eq(1)').attr('src', 'images/ladder/'+record[i].line+'.png');
			recordbar.children('img:eq(2)').attr('src', 'images/ladder/'+record[i].result+'.png');
		}
	})

	done++;

	socket.emit('load');
	socket.emit('reqRec');
	
});