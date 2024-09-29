exports.findName = function(id){
	for (var i in data){
		if(data[i].key == id){
			return data[i].name;
		}
	}
	return "Unknown";
}

exports.findImage = function(id){
	for (var i in data){
		if(data[i].key == id){
			return data[i].image;
		}
	}
	return "Unknown";
}

var data =
[
  {
    "name": "방어막",
    "key": 21,
    "image": "SummonerBarrier.png"
  },
  {
    "name": "정화",
    "key": 1,
    "image": "SummonerBoost.png"
  },
  {
    "name": "점화",
    "key": 14,
    "image": "SummonerDot.png"
  },
  {
    "name": "탈진",
    "key": 3,
    "image": "SummonerExhaust.png"
  },
  {
    "name": "점멸",
    "key": 4,
    "image": "SummonerFlash.png"
  },
  {
    "name": "유체화",
    "key": 6,
    "image": "SummonerHaste.png"
  },
  {
    "name": "회복",
    "key": 7,
    "image": "SummonerHeal.png"
  },
  {
    "name": "총명",
    "key": 13,
    "image": "SummonerMana.png"
  },
  {
    "name": "왕을 향해!",
    "key": 30,
    "image": "SummonerPoroRecall.png"
  },
  {
    "name": "포로 던지기",
    "key": 31,
    "image": "SummonerPoroThrow.png"
  },
  {
    "name": "강타",
    "key": 11,
    "image": "SummonerSmite.png"
  },
  {
    "name": "표식",
    "key": 39,
    "image": "SummonerSnowURFSnowball_Mark.png"
  },
  {
    "name": "표식",
    "key": 32,
    "image": "SummonerSnowball.png"
  },
  {
    "name": "순간이동",
    "key": 12,
    "image": "SummonerTeleport.png"
  }
]
;