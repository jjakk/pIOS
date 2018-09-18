
function initiateStuff(){
	
	document.getElementById("selector").style.top = 9;
	
}

function keyPressed(event) {
	
	lineShift = parseInt(document.getElementById("selector").style.top);
	
	//Up Key
	if (event.keyCode == 38 || event.keyCode == 87) {
		
		if(lineShift != 9){
		
			lineShift -= 25;
		
		}
		
	}
	//Down Key
	if (event.keyCode == 40 || event.keyCode == 83) {
		
		if(lineShift != 309){
		
			lineShift += 25;
		
		}
		
	}
	//Enter Key
	if (event.keyCode == 13) {
		
		
		
	}
	
	document.getElementById("selector").style.top = lineShift;
	
}
