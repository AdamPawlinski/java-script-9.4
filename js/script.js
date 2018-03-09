function drawTree (height) {
  for (var i = 1; i <= height; i++) {
	var star = "*";
	var space = "";
	for (var k = height; k > i; k--){
		space += " ";
	}
	for (var j = 2; j <= i; j++){
		star += "**";
	}
	console.log(space + star);
  }
}
drawTree(5);
