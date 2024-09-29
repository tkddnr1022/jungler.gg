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
    "name": "아트록스",
    "key": 266,
    "image": "Aatrox.png"
  },
  {
    "name": "아리",
    "key": 103,
    "image": "Ahri.png"
  },
  {
    "name": "아칼리",
    "key": 84,
    "image": "Akali.png"
  },
  {
    "name": "알리스타",
    "key": 12,
    "image": "Alistar.png"
  },
  {
    "name": "아무무",
    "key": 32,
    "image": "Amumu.png"
  },
  {
    "name": "애니비아",
    "key": 34,
    "image": "Anivia.png"
  },
  {
    "name": "애니",
    "key": 1,
    "image": "Annie.png"
  },
  {
    "name": "아펠리오스",
    "key": 523,
    "image": "Aphelios.png"
  },
  {
    "name": "애쉬",
    "key": 22,
    "image": "Ashe.png"
  },
  {
    "name": "아우렐리온 솔",
    "key": 136,
    "image": "AurelionSol.png"
  },
  {
    "name": "아지르",
    "key": 268,
    "image": "Azir.png"
  },
  {
    "name": "바드",
    "key": 432,
    "image": "Bard.png"
  },
  {
    "name": "블리츠크랭크",
    "key": 53,
    "image": "Blitzcrank.png"
  },
  {
    "name": "브랜드",
    "key": 63,
    "image": "Brand.png"
  },
  {
    "name": "브라움",
    "key": 201,
    "image": "Braum.png"
  },
  {
    "name": "케이틀린",
    "key": 51,
    "image": "Caitlyn.png"
  },
  {
    "name": "카밀",
    "key": 164,
    "image": "Camille.png"
  },
  {
    "name": "카시오페아",
    "key": 69,
    "image": "Cassiopeia.png"
  },
  {
    "name": "초가스",
    "key": 31,
    "image": "Chogath.png"
  },
  {
    "name": "코르키",
    "key": 42,
    "image": "Corki.png"
  },
  {
    "name": "다리우스",
    "key": 122,
    "image": "Darius.png"
  },
  {
    "name": "다이애나",
    "key": 131,
    "image": "Diana.png"
  },
  {
    "name": "드레이븐",
    "key": 119,
    "image": "Draven.png"
  },
  {
    "name": "문도 박사",
    "key": 36,
    "image": "DrMundo.png"
  },
  {
    "name": "에코",
    "key": 245,
    "image": "Ekko.png"
  },
  {
    "name": "엘리스",
    "key": 60,
    "image": "Elise.png"
  },
  {
    "name": "이블린",
    "key": 28,
    "image": "Evelynn.png"
  },
  {
    "name": "이즈리얼",
    "key": 81,
    "image": "Ezreal.png"
  },
  {
    "name": "피들스틱",
    "key": 9,
    "image": "Fiddlesticks.png"
  },
  {
    "name": "피오라",
    "key": 114,
    "image": "Fiora.png"
  },
  {
    "name": "피즈",
    "key": 105,
    "image": "Fizz.png"
  },
  {
    "name": "갈리오",
    "key": 3,
    "image": "Galio.png"
  },
  {
    "name": "갱플랭크",
    "key": 41,
    "image": "Gangplank.png"
  },
  {
    "name": "가렌",
    "key": 86,
    "image": "Garen.png"
  },
  {
    "name": "나르",
    "key": 150,
    "image": "Gnar.png"
  },
  {
    "name": "그라가스",
    "key": 79,
    "image": "Gragas.png"
  },
  {
    "name": "그레이브즈",
    "key": 104,
    "image": "Graves.png"
  },
  {
    "name": "헤카림",
    "key": 120,
    "image": "Hecarim.png"
  },
  {
    "name": "하이머딩거",
    "key": 74,
    "image": "Heimerdinger.png"
  },
  {
    "name": "일라오이",
    "key": 420,
    "image": "Illaoi.png"
  },
  {
    "name": "이렐리아",
    "key": 39,
    "image": "Irelia.png"
  },
  {
    "name": "아이번",
    "key": 427,
    "image": "Ivern.png"
  },
  {
    "name": "잔나",
    "key": 40,
    "image": "Janna.png"
  },
  {
    "name": "자르반 4세",
    "key": 59,
    "image": "JarvanIV.png"
  },
  {
    "name": "잭스",
    "key": 24,
    "image": "Jax.png"
  },
  {
    "name": "제이스",
    "key": 126,
    "image": "Jayce.png"
  },
  {
    "name": "진",
    "key": 202,
    "image": "Jhin.png"
  },
  {
    "name": "징크스",
    "key": 222,
    "image": "Jinx.png"
  },
  {
    "name": "카이사",
    "key": 145,
    "image": "Kaisa.png"
  },
  {
    "name": "칼리스타",
    "key": 429,
    "image": "Kalista.png"
  },
  {
    "name": "카르마",
    "key": 43,
    "image": "Karma.png"
  },
  {
    "name": "카서스",
    "key": 30,
    "image": "Karthus.png"
  },
  {
    "name": "카사딘",
    "key": 38,
    "image": "Kassadin.png"
  },
  {
    "name": "카타리나",
    "key": 55,
    "image": "Katarina.png"
  },
  {
    "name": "케일",
    "key": 10,
    "image": "Kayle.png"
  },
  {
    "name": "케인",
    "key": 141,
    "image": "Kayn.png"
  },
  {
    "name": "케넨",
    "key": 85,
    "image": "Kennen.png"
  },
  {
    "name": "카직스",
    "key": 121,
    "image": "Khazix.png"
  },
  {
    "name": "킨드레드",
    "key": 203,
    "image": "Kindred.png"
  },
  {
    "name": "클레드",
    "key": 240,
    "image": "Kled.png"
  },
  {
    "name": "코그모",
    "key": 96,
    "image": "KogMaw.png"
  },
  {
    "name": "르블랑",
    "key": 7,
    "image": "Leblanc.png"
  },
  {
    "name": "리 신",
    "key": 64,
    "image": "LeeSin.png"
  },
  {
    "name": "레오나",
    "key": 89,
    "image": "Leona.png"
  },
  {
    "name": "릴리아",
    "key": 876,
    "image": "Lillia.png"
  },
  {
    "name": "리산드라",
    "key": 127,
    "image": "Lissandra.png"
  },
  {
    "name": "루시안",
    "key": 236,
    "image": "Lucian.png"
  },
  {
    "name": "룰루",
    "key": 117,
    "image": "Lulu.png"
  },
  {
    "name": "럭스",
    "key": 99,
    "image": "Lux.png"
  },
  {
    "name": "말파이트",
    "key": 54,
    "image": "Malphite.png"
  },
  {
    "name": "말자하",
    "key": 90,
    "image": "Malzahar.png"
  },
  {
    "name": "마오카이",
    "key": 57,
    "image": "Maokai.png"
  },
  {
    "name": "마스터 이",
    "key": 11,
    "image": "MasterYi.png"
  },
  {
    "name": "미스 포츈",
    "key": 21,
    "image": "MissFortune.png"
  },
  {
    "name": "오공",
    "key": 62,
    "image": "MonkeyKing.png"
  },
  {
    "name": "모데카이저",
    "key": 82,
    "image": "Mordekaiser.png"
  },
  {
    "name": "모르가나",
    "key": 25,
    "image": "Morgana.png"
  },
  {
    "name": "나미",
    "key": 267,
    "image": "Nami.png"
  },
  {
    "name": "나서스",
    "key": 75,
    "image": "Nasus.png"
  },
  {
    "name": "노틸러스",
    "key": 111,
    "image": "Nautilus.png"
  },
  {
    "name": "니코",
    "key": 518,
    "image": "Neeko.png"
  },
  {
    "name": "니달리",
    "key": 76,
    "image": "Nidalee.png"
  },
  {
    "name": "녹턴",
    "key": 56,
    "image": "Nocturne.png"
  },
  {
    "name": "누누와 윌럼프",
    "key": 20,
    "image": "Nunu.png"
  },
  {
    "name": "올라프",
    "key": 2,
    "image": "Olaf.png"
  },
  {
    "name": "오리아나",
    "key": 61,
    "image": "Orianna.png"
  },
  {
    "name": "오른",
    "key": 516,
    "image": "Ornn.png"
  },
  {
    "name": "판테온",
    "key": 80,
    "image": "Pantheon.png"
  },
  {
    "name": "뽀삐",
    "key": 78,
    "image": "Poppy.png"
  },
  {
    "name": "파이크",
    "key": 555,
    "image": "Pyke.png"
  },
  {
    "name": "키아나",
    "key": 246,
    "image": "Qiyana.png"
  },
  {
    "name": "퀸",
    "key": 133,
    "image": "Quinn.png"
  },
  {
    "name": "라칸",
    "key": 497,
    "image": "Rakan.png"
  },
  {
    "name": "람머스",
    "key": 33,
    "image": "Rammus.png"
  },
  {
    "name": "렉사이",
    "key": 421,
    "image": "RekSai.png"
  },
  {
    "name": "렐",
    "key": 526,
    "image": "Rell.png"
  },
  {
    "name": "레넥톤",
    "key": 58,
    "image": "Renekton.png"
  },
  {
    "name": "렝가",
    "key": 107,
    "image": "Rengar.png"
  },
  {
    "name": "리븐",
    "key": 92,
    "image": "Riven.png"
  },
  {
    "name": "럼블",
    "key": 68,
    "image": "Rumble.png"
  },
  {
    "name": "라이즈",
    "key": 13,
    "image": "Ryze.png"
  },
  {
    "name": "사미라",
    "key": 360,
    "image": "Samira.png"
  },
  {
    "name": "세주아니",
    "key": 113,
    "image": "Sejuani.png"
  },
  {
    "name": "세나",
    "key": 235,
    "image": "Senna.png"
  },
  {
    "name": "세라핀",
    "key": 147,
    "image": "Seraphine.png"
  },
  {
    "name": "세트",
    "key": 875,
    "image": "Sett.png"
  },
  {
    "name": "샤코",
    "key": 35,
    "image": "Shaco.png"
  },
  {
    "name": "쉔",
    "key": 98,
    "image": "Shen.png"
  },
  {
    "name": "쉬바나",
    "key": 102,
    "image": "Shyvana.png"
  },
  {
    "name": "신지드",
    "key": 27,
    "image": "Singed.png"
  },
  {
    "name": "사이온",
    "key": 14,
    "image": "Sion.png"
  },
  {
    "name": "시비르",
    "key": 15,
    "image": "Sivir.png"
  },
  {
    "name": "스카너",
    "key": 72,
    "image": "Skarner.png"
  },
  {
    "name": "소나",
    "key": 37,
    "image": "Sona.png"
  },
  {
    "name": "소라카",
    "key": 16,
    "image": "Soraka.png"
  },
  {
    "name": "스웨인",
    "key": 50,
    "image": "Swain.png"
  },
  {
    "name": "사일러스",
    "key": 517,
    "image": "Sylas.png"
  },
  {
    "name": "신드라",
    "key": 134,
    "image": "Syndra.png"
  },
  {
    "name": "탐 켄치",
    "key": 223,
    "image": "TahmKench.png"
  },
  {
    "name": "탈리야",
    "key": 163,
    "image": "Taliyah.png"
  },
  {
    "name": "탈론",
    "key": 91,
    "image": "Talon.png"
  },
  {
    "name": "타릭",
    "key": 44,
    "image": "Taric.png"
  },
  {
    "name": "티모",
    "key": 17,
    "image": "Teemo.png"
  },
  {
    "name": "쓰레쉬",
    "key": 412,
    "image": "Thresh.png"
  },
  {
    "name": "트리스타나",
    "key": 18,
    "image": "Tristana.png"
  },
  {
    "name": "트런들",
    "key": 48,
    "image": "Trundle.png"
  },
  {
    "name": "트린다미어",
    "key": 23,
    "image": "Tryndamere.png"
  },
  {
    "name": "트위스티드 페이트",
    "key": 4,
    "image": "TwistedFate.png"
  },
  {
    "name": "트위치",
    "key": 29,
    "image": "Twitch.png"
  },
  {
    "name": "우디르",
    "key": 77,
    "image": "Udyr.png"
  },
  {
    "name": "우르곳",
    "key": 6,
    "image": "Urgot.png"
  },
  {
    "name": "바루스",
    "key": 110,
    "image": "Varus.png"
  },
  {
    "name": "베인",
    "key": 67,
    "image": "Vayne.png"
  },
  {
    "name": "베이가",
    "key": 45,
    "image": "Veigar.png"
  },
  {
    "name": "벨코즈",
    "key": 161,
    "image": "Velkoz.png"
  },
  {
    "name": "바이",
    "key": 254,
    "image": "Vi.png"
  },
  {
    "name": "비에고",
    "key": 234,
    "image": "Viego.png"
  },
  {
    "name": "빅토르",
    "key": 112,
    "image": "Viktor.png"
  },
  {
    "name": "블라디미르",
    "key": 8,
    "image": "Vladimir.png"
  },
  {
    "name": "볼리베어",
    "key": 106,
    "image": "Volibear.png"
  },
  {
    "name": "워윅",
    "key": 19,
    "image": "Warwick.png"
  },
  {
    "name": "자야",
    "key": 498,
    "image": "Xayah.png"
  },
  {
    "name": "제라스",
    "key": 101,
    "image": "Xerath.png"
  },
  {
    "name": "신 짜오",
    "key": 5,
    "image": "XinZhao.png"
  },
  {
    "name": "야스오",
    "key": 157,
    "image": "Yasuo.png"
  },
  {
    "name": "요네",
    "key": 777,
    "image": "Yone.png"
  },
  {
    "name": "요릭",
    "key": 83,
    "image": "Yorick.png"
  },
  {
    "name": "유미",
    "key": 350,
    "image": "Yuumi.png"
  },
  {
    "name": "자크",
    "key": 154,
    "image": "Zac.png"
  },
  {
    "name": "제드",
    "key": 238,
    "image": "Zed.png"
  },
  {
    "name": "직스",
    "key": 115,
    "image": "Ziggs.png"
  },
  {
    "name": "질리언",
    "key": 26,
    "image": "Zilean.png"
  },
  {
    "name": "조이",
    "key": 142,
    "image": "Zoe.png"
  },
  {
    "name": "자이라",
    "key": 143,
    "image": "Zyra.png"
  }
]
;