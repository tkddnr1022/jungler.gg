var xMin = 358;
var xMax = 14589;
var yMin = 461;
var yMax = 14673;

var xPos;
var yPos;

exports.getLane = function(x, y){
	xPos = x;
	yPos = y;
	
	if((posRange(0, 35, 12.5, 100) || posRange(12.5, 50, 27.5, 85.5)) || (posRange(12.5, 71, 50, 85.5) || posRange(0, 85.5, 60, 100))){
		return 1;
	}
	if((posRange(40, 0, 100, 10) || posRange(50, 10, 87.5, 25)) || (posRange(75, 10, 87.5, 45.5) || posRange(87.5, 0, 100, 57.5))){
		return 3;
	}
	if(!posRange(0, 0, 24, 24) && !posRange(72, 72, 100, 100) && (yPos <= xPos+perToPos(9, "x") && yPos >= xPos-perToPos(12, "x"))){
		return 2;
	}
	
}

function posRange(x1, y1, x2, y2){
	if((xPos >= perToPos(x1, "x") && xPos <= perToPos(x2, "x")) && (yPos >= perToPos(y1, "y") && yPos <= perToPos(y2, "y"))){
		return true;
	}
	else{
		return false;
	}
}

function perToPos(per, dir){
	if(per == 0){
		return 0;
	}
	else if(dir == "x"){
		return xMax * (per/100);
	}
	else{
		return yMax * (per/100);
	}
}