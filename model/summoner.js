const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var playerSchema = new Schema({
	name: String,
	pId: Number,
	teamId: Number,
	champion: String,
	championImage: String,
	spell1: String,
	spell2: String,
	kill: Number,
	death: Number,
	assist: Number
});

var dragonSchema = new Schema({
	name: String,
	timestamp: Number
});

var teamSchema = new Schema({
	teamId: Number,
	win: String,
	firstDragon: Boolean,
	firstRiftHerald: Boolean,
	dragonKills: Number,
	dragon: [dragonSchema],
	riftHeraldKills: Number
});

var eventSchema = new Schema({
	type: String,
	killerId: Number,
	victimId: Number,
	assistId: [Number],
	timestamp: Number
});

var teamFightSchema = new Schema({
	started: Number,
	ended: Number,
	event: [eventSchema],
	participantId: [Number]
});

var junglerSchema = new Schema({
	// 기본정보
	name: String,
	pId: Number,
	teamId: Number,
	teamIndex: Number,
	champion: String,
	championImage: String,
	spell1Image: String,
	spell2Image: String,
	item0: Number,
	item1: Number,
	item2: Number,
	item3: Number,
	item4: Number,
	item5: Number,
	item6: Number,
	// KDA
	kill: Number,
	death: Number,
	assist: Number,
	kda: Number,
	largestMultiKill: Number,
	// 성장
	goldEarned: Number,
	champLevel: Number,
	csPerMin: Number,
	xpPerMin: Number,
	goldPerMin: Number,
	// 미니언, 정글몹
	totalCs: Number,
	neutralMinionsKilled: Number,
	neutralMinionsKilledEnemyJungleRatio: Number,
	// 시야 기여
	visionScore: Number,
	visionWardsBoughtInGame: Number,
	wardsPlaced: Number,
	wardsKilled: Number,
	// 딜량
	totalDamageDealt: Number,
	damageDealtToObjectives: Number,
	damageDealtToTurrets: Number,
	damageSelfMitigated: Number,
	// CC 기여
	timeCCingOthers: Number,
	totalTimeCrowdControlDealt: Number,
	// 퍼블
	firstBloodKill: Boolean,
	firstBloodAssist: Boolean,
	// 포지션 분포
	posTop: Number,
	posMid: Number,
	posBot: Number,
	// 별
	star: Boolean,
});

var matchSchema = new Schema({
    gameId: Number,
    champion: String,
	championImage: String,
    queue: Number,
    season: Number,
    timestamp: Number,
	role: String,
    lane: String,
	position: String,
	detail:{
		error: Number,
		gameVersion: String,
		gameCreation: Number,
		gameDuration: Number,
		userInfo:{
			userPId: Number,
			userTeam: Number,
			userName: String,
			userWin: String,
			userSpell1: String,
			userSpell2: String
		},
		player:[playerSchema],
		team:[teamSchema],
		jungler:[junglerSchema],
		teamFight: [teamFightSchema]
	}
});

var summonerSchema = new Schema({
	created: Number,
	name: String,
	encodedName: String,
	id: String,
	accountId: String,
	puuid: String,
	level: Number,
	icon: Number,
	solo:{
		tier: String,
		rank: String,
		point: Number,
		win: Number,
		lose: Number
	},
	free:{
		tier: String,
		rank: String,
		point: Number,
		win: Number,
		lose: Number
	},
	match:[matchSchema]
});

module.exports = mongoose.model('summonerInfo', summonerSchema);