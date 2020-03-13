
function initiateStuff(){
	
	document.getElementById("selector").style.top = 9;
	
}

function clearWindow(windowToClear){
	
	windowToClear.innerHTML = "";
	
}

function makeObject(objectType, objectId, parentObject){
	
	object = document.createElement(objectType);
	
	parentObject.appendChild(object);
	
	object.id = objectId;
	
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
	
	//Making what is in each window
	
	clearWindow(document.getElementById("previewWindow"));
	
	//superhot.exe
	if(lineShift == 9){
		
		makeObject("p", "superhotPreviewText", document.getElementById("previewWindow"));
		
		document.getElementById("superhotPreviewText").className = "text";
		
		document.getElementById("superhotPreviewText").className += " previewText";
		
		document.getElementById("superhotPreviewText").innerHTML = '"Superhot is the most innovative game I' + "'" + 've played in years" - Team Superhot';
		
	}
	
	//readme.txt
	if(lineShift == 34){
		
		makeObject("p", "readmePreviewText", document.getElementById("previewWindow"));
		
		document.getElementById("readmePreviewText").className = "text";
		
		document.getElementById("readmePreviewText").className += " previewText";
		
		document.getElementById("readmePreviewText").innerHTML = "JJakk proudly presents piOS, designed by Team Superhot";
		
	}
	
	//quite.exe
	if(lineShift == 59){
		
		makeObject("p", "quitePreviewText", document.getElementById("previewWindow"));
		
		document.getElementById("quitePreviewText").className = "text previewText";
		
		document.getElementById("quitePreviewText").innerHTML = "app: quit.exe    |--file-> 50";
		
		document.getElementById("quitePreviewText").style.whiteSpace = "pre";
		
	}
	
	//settings
	if(lineShift == 109){
		
		makeObject("p", "settingsPreviewText", document.getElementById("previewWindow"));
		
		document.getElementById("settingsPreviewText").className = "text previewText";
		
		document.getElementById("settingsPreviewText").innerHTML = "directory:SETTINGS     |>FOLDER<";
		
		document.getElementById("settingsPreviewText").style.whiteSpace = "pre";
		
	}
	
	//apps
	if(lineShift == 134){
		
		makeObject("p", "appsPreviewText", document.getElementById("previewWindow"));
		
		document.getElementById("appsPreviewText").className = "text previewText";
		
		document.getElementById("appsPreviewText").innerHTML = "directory:APPS         |>FOLDER<";
		
		document.getElementById("appsPreviewText").style.whiteSpace = "pre";
		
	}
	
	//demos
	if(lineShift == 159){
		
		makeObject("p", "demosPreviewText", document.getElementById("previewWindow"));
		
		document.getElementById("demosPreviewText").className = "text previewText";
		
		document.getElementById("demosPreviewText").innerHTML = "directory:DEMOS        |>FOLDER<";
		
		document.getElementById("demosPreviewText").style.whiteSpace = "pre";
		
	}
	
	//cellular
	if(lineShift == 184){
		
		makeObject("p", "cellularPreviewText", document.getElementById("previewWindow"));
		
		document.getElementById("cellularPreviewText").className = "text previewText";
		
		document.getElementById("cellularPreviewText").innerHTML = "directory:CELLULAR     |>FOLDER<";
		
		document.getElementById("cellularPreviewText").style.whiteSpace = "pre";
		
	}
	
	//wires
	if(lineShift == 209){
		
		makeObject("p", "wiresPreviewText", document.getElementById("previewWindow"));
		
		document.getElementById("wiresPreviewText").className = "text previewText";
		
		document.getElementById("wiresPreviewText").innerHTML = "directory:WIRES        |>FOLDER<";
		
		document.getElementById("wiresPreviewText").style.whiteSpace = "pre";
		
	}
	
	//games
	if(lineShift == 234){
		
		makeObject("p", "gamesPreviewText", document.getElementById("previewWindow"));
		
		document.getElementById("gamesPreviewText").className = "text previewText";
		
		document.getElementById("gamesPreviewText").innerHTML = "directory:GAMES        |>FOLDER<";
		
		document.getElementById("gamesPreviewText").style.whiteSpace = "pre";
		
	}
	
	//vr
	if(lineShift == 259){
		
		makeObject("p", "vrPreviewText", document.getElementById("previewWindow"));
		
		document.getElementById("vrPreviewText").className = "text previewText";
		
		document.getElementById("vrPreviewText").innerHTML = "directory:VR           |>FOLDER<";
		
		document.getElementById("vrPreviewText").style.whiteSpace = "pre";
		
	}
	
	//art
	if(lineShift == 284){
		
		makeObject("p", "artPreviewText", document.getElementById("previewWindow"));
		
		document.getElementById("artPreviewText").className = "text previewText";
		
		document.getElementById("artPreviewText").innerHTML = "directory:ART          |>FOLDER<";
		
		document.getElementById("artPreviewText").style.whiteSpace = "pre";
		
	}
	
	//videos
	if(lineShift == 309){
		
		makeObject("p", "videosPreviewText", document.getElementById("previewWindow"));
		
		document.getElementById("videosPreviewText").className = "text previewText";
		
		document.getElementById("videosPreviewText").innerHTML = "directory:VIDEOS       |>FOLDER<";
		
		document.getElementById("videosPreviewText").style.whiteSpace = "pre";
		
	}
	
	document.getElementById("selector").style.top = lineShift;
	
}
