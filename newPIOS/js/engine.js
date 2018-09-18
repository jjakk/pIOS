
function keyPressed(event) {
	
	lineShift = document.getElementById("selector").style.top;
	
	//Up Key
	if (event.keyCode == 38 || event.keyCode == 87) {
		
		lineShift -= 30;
		
	}
	//Down Key
	if (event.keyCode == 40 || event.keyCode == 83) {
		
		console.log("dfghjk")
		
		lineShift += 33;
		
	}
	if (event.keyCode == 13) {
		
		
	}
	
	document.getElementById("selector").style.top = lineShift;
	
}
