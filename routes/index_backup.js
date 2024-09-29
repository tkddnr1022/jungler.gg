var express = require('express');
var request = require('request');
var urlencode = require('urlencode');  
var router = express.Router();

var key = "RGAPI-c60e8610-4a2f-4d06-8335-9a31ab8be8b4"; // LOL API key

/* GET home page. */
router.get('/', function(req, res, next) {
	var responseError = false;
	var requestDone = 0;
	var name = req.query.name;
	var url = "https://kr.api.riotgames.com/lol/summoner/v4/summoners/by-name/"+ urlencode(name) +"?api_key=" + key // URL 생성
	
	var summonerInfo = {'name': '', 'summonerLevel': '', 'tier': '', 'rank': ''};
	
	request(url, function(error, response, body) {
		if(response.statusCode != 200){
			console.log(response.statusCode);
			responseError = true;
			res.render('requestError', { responseCode: response.statusCode });
		}
		else{
          	var result = JSON.parse(body);
			console.log("response code: " + response.statusCode);
			console.log("name: " + result['name']);
			summonerInfo.name = result['name'];
			summonerInfo.summonerLevel = result['summonerLevel'];
			requestDone++;
			tryRender();
	}}); 
	
	function tryRender(){
		if(requestDone == 1){
			res.render('index', { title: 'Summoner', name: summonerInfo.name, level: summonerInfo.summonerLevel });
		}
	}
	
});

module.exports = router;
