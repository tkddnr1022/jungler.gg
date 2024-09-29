var request = require('request'); // request module
var urlencode = require('urlencode'); // urlencode module
var summonerModel = require('./model/summoner.js'); // summoner data model
var async = require('async'); // async module

var key = "RGAPI-b5375250-3629-480b-9831-2ade1810b7c2"; // LOL API key

exports.create = function(name, encodedName){ // db에 소환사 정보 생성하기
		
		var url = "https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/"+ encodedName +"?api_key=" + key // URL 생성
		
		var instance = new summonerModel();
		var done = 0;
		
		function saveInstance(){ // 모든 비동기 request가 끝나면 db에 입력
			if(done==2){ // SUMMONER-V4 요청 완료 후 기다려야할 비동기 요청들 : LEAGUE-V4, MATCH-V4
				instance.save(function(err){
					if(err){
						console.log(err);
					}
				});
				console.log("db saved");
				console.log("-------------------------------");
			}
		}
		
		request(url, function(error, response, body) { // SUMMONER-V4
			if(response.statusCode == 200){
				var result = JSON.parse(body);
				instance.name = result['name'];
				instance.encodedName = encodedName;
				instance.id = result['id'];
				instance.accountId = result['accountId'];
				instance.level = result['summonerLevel'];
				instance.icon = result['profileIconId'];
				
				app.io.to(client).emit('summoner', instance); // 클라이언트에 뿌리기
				console.log("summoner info created");
				
				league(result['id']);
				matchList(result['accountId']);
			}
			else{
				app.io.to(client).emit('error', response.statusCode);
				console.log("error on requesting summoner-v4 : " + response.statusCode);
			}
		});
		
		
		function league(id){
			
			var url = "https://kr.api.riotgames.com/lol/league/v4/entries/by-summoner/"+ id +"?api_key=" + key; // URL 생성
			
			request(url, function(error, response, body) { // LEAGUE-V4
				if(response.statusCode == 200){
					var result = JSON.parse(body);
					for(i=0; i<result.length; i++){
						switch(result[i].queueType){
							case 'RANKED_SOLO_5x5':
								instance.solo.tier = result[i].tier;
								instance.solo.rank = result[i].rank;
								instance.solo.point = result[i].leaguePoints;
								instance.solo.win = result[i].wins;
								instance.solo.lose = result[i].losses;
								break;
							case 'RANKED_FLEX_SR':
								instance.free.tier = result[i].tier;
								instance.free.rank = result[i].rank;
								instance.free.point = result[i].leaguePoints;
								instance.free.win = result[i].wins;
								instance.free.lose = result[i].losses;
								break;
							default:
						}
					}
					
					done++;
					saveInstance();
					
					app.io.to(client).emit('league', instance); // 클라이언트에 뿌리기
					console.log("league info created");
				}
				else{
					app.io.to(client).emit('error', response.statusCode);
					console.log("error on requesting league-v4 : " + response.statusCode);
				}
			});
		}
		
		var matchLength;
		var created = 0; // 동기화
		function matchList(accountId){ // MATCH-V4_matchlist
			
			var endIndex = 10;
			var url = "https://kr.api.riotgames.com/lol/match/v4/matchlists/by-account/" + accountId + "?"+"endIndex=" + endIndex + "&queue=420" + "&api_key=" + key; 
			// URL 생성
			
			request(url, function(error, response, body) {
				if(response.statusCode == 200){
					var result = JSON.parse(body);
					matchLength = result.matches.length;
					for(i=0; i<result.matches.length; i++){
						instance.match.push({
							gameId: result.matches[i].gameId,
							champion: result.matches[i].champion,
							queue: result.matches[i].queue,
							season: result.matches[i].season,
							timestamp: result.matches[i].timestamp,
							role: result.matches[i].role,
							lane: result.matches[i].lane,
							position: getLane(result.matches[i].role, result.matches[i].lane)
						});
						match(result.matches[i].gameId, accountId, i);
					}
					
				}
				else{
					app.io.to(client).emit('error', response.statusCode);
					console.log("error on requesting match-v4_matchlist : " + response.statusCode);
				}
			});
		}
		
		function match(gameId, accountId, matchIndex){
			
			var url = "https://kr.api.riotgames.com/lol/match/v4/matches/" + gameId + "?api_key=" + key; // URL 생성
			
			request(url, function(error, response, body) { // MATCH-V4_match
				if(response.statusCode == 200){
					var result = JSON.parse(body);
					
					var data = {
						userInfo:{
							userPId: Number,
							userTeam: Number,
							userName: String
						},
						fPlayer:[],
						ePlayer:[],
						fTeam:[],
						eTeam:[],
						fJungler:[],
						eJungler:[]
					};

					
					async.waterfall([ // 각 게임 상세 정보는 동기화하여 모든 매치 정보가 정리된 후 db에 입력하도록 함
						function(callback){ // 유저, 팀 정보 콜백 1번째
							
							function teamData(index){ // 팀 데이터
								return {
									teamId: result.teams[index].teamId,
									win: result.teams[index].win,
									firstDragon: result.teams[index].firstDragon,
									firstRiftHerald: result.teams[index].firstRiftHerald,
									dragonKills: result.teams[index].dragonKills,
									riftHeraldKills: result.teams[index].riftHeraldKills
								};
							}
							
							for(i=0; i<10; i++){
								var userTeam;
								var enemyTeam;
								if(result.participantIdentities[i].player.accountId == accountId){ // 유저 데이터 입력
									data.userInfo.userPId = result.participantIdentities[i].participantId;
									data.userInfo.userName = result.participantIdentities[i].player.summonerName;
									data.userInfo.userTeam = result.participants[i].teamId;
									if(result.participants[i].teamId == result.teams[0].teamId){
										userTeam = 0;
										enemyTeam = 1;
									}
									else{
										userTeam = 1;
										enemyTeam = 0;
									}
									data.userInfo.userWin = result.teams[userTeam].win;
									// 팀 데이터 입력
									data.fTeam.push(teamData(userTeam));
									data.eTeam.push(teamData(enemyTeam));

									callback();
									break;
								}
							}
						},
						function(callback){ // 플레이어, 정글러 정보 콜백 2번째
							for(i=0; i<10; i++){
								var playerData = { // 플레이어 데이터
									name: result.participantIdentities[i].player.summonerName,
									pId: result.participantIdentities[i].participantId,
									teamId: result.participants[i].teamId,
									championId: result.participants[i].championId,
									champion: String,
									Spell1Id: result.participants[i].spell1Id,
									Spell2Id: result.participants[i].spell2Id,
									kill: result.participants[i].stats.kills,
									death: result.participants[i].stats.deaths,
									assist: result.participants[i].stats.assists
								}
								function junglerData(index){ // 정글러 데이터
									return {
										name: result.participantIdentities[index].player.summonerName,
										pId: result.participantIdentities[index].participantId,
										teamId: result.participants[index].teamId,
										championId: result.participants[index].championId,
										champion: String,
										Spell1Id: result.participants[index].spell1Id,
										Spell2Id: result.participants[index].spell2Id,
										kill: result.participants[index].stats.kills,
										death: result.participants[index].stats.deaths,
										assist: result.participants[index].stats.assists
									};
								}
								if(result.participants[i].teamId == data.userInfo.userTeam){
									if(result.participants[i].spell1Id == 11 || result.participants[i].spell2Id == 11){ // 정글러
										data.fJungler.push(junglerData(i));
									}
									data.fPlayer.push(playerData);
								}
								else{
									if(result.participants[i].spell1Id == 11 || result.participants[i].spell2Id == 11){ // 정글러
										data.eJungler.push(junglerData(i));
									}
									data.ePlayer.push(playerData);
								}
							}

							created++;
							callback();
						}
					],
						function(err){

							if(err){
								console.log(err);
							}
							else{
								instance.match[matchIndex].detail = data;

								if(created == matchLength){
									app.io.to(client).emit('match', instance); // 클라이언트에 뿌리기
									console.log("match info created");
									done++;
									saveInstance();
									console.log("여기서 모든작업이 끝나야함");
								}
							}
						}
					);
					
				}
				else{
					app.io.to(client).emit('error', response.statusCode);
					console.log("error on requesting match-v4_match : " + response.statusCode);
				}
			});
		}

	}