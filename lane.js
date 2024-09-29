exports.getLane = function(role, lane){ // role, lane 으로 포지션 구하기 // 미완성
	switch(lane){
		case "TOP":
			return "TOP LANER";
			break;
		case "MID":
			return "MID LANER";
			break;
		case "BOTTOM":
			switch(role){
				case "DUO_CARRY":
					return "AD CARRY";
					break;
				case "DUO_SUPPORT":
					return "SUPPORTER";
					break;
				default:
					return "NONE";
			}
			break;
		case "JUNGLE":
			return "JUNGLER";
			break;
		default:
			switch(role){
				case "DUO_CARRY":
					return "AD CARRY";
					break;
				default:
					return "NONE";
			}
	}
}