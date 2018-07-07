
var line = 1;

var amountOfLines = 13;

var selectorMoveDistance = 5;

var shutDownWheel;

var buttonsEnabled = true;

var keyFirstPressed = false;

function startBackgroundMusic(){
	
	if(keyFirstPressed == false){
		
		document.getElementById("backgroundNoise").play();
		
	}
	
}

function shutDown(){
	
	buttonsEnabled = false;
	
	document.getElementById("exitBox").innerHTML = "<p class='text' style='margin-top: 14%; color: red; text-shadow: 0 0 10px red, 0 0 10px red;'>SHUTTING DOWN |</p>";
	
	setTimeout(function(){document.getElementById("exitBox").innerHTML = "<p class='text' style='margin-top: 14%; color: red; text-shadow: 0 0 10px red, 0 0 10px red;'>SHUTTING DOWN /</p>";}, 250);
	
	setTimeout(function(){document.getElementById("exitBox").innerHTML = "<p class='text' style='margin-top: 14%; color: red; text-shadow: 0 0 10px red, 0 0 10px red;'>SHUTTING DOWN -</p>";}, 500);
	
	setTimeout(function(){document.getElementById("exitBox").innerHTML = "<p class='text' style='margin-top: 14%; color: red; text-shadow: 0 0 10px red, 0 0 10px red;'>SHUTTING DOWN \\</p>";}, 750);
	
	setTimeout(function(){document.getElementById("exitBox").innerHTML = "<p class='text' style='margin-top: 14%; color: red; text-shadow: 0 0 10px red, 0 0 10px red;'>SHUTTING DOWN |</p>";}, 1000);
	
	setTimeout(function(){document.getElementById("exitBox").innerHTML = "<p class='text' style='margin-top: 14%; color: red; text-shadow: 0 0 10px red, 0 0 10px red;'>SHUTTING DOWN /</p>";}, 1250);
	
	setTimeout(function(){document.getElementById("exitBox").innerHTML = "<p class='text' style='margin-top: 14%; color: red; text-shadow: 0 0 10px red, 0 0 10px red;'>SHUTTING DOWN -</p>";}, 1500);
	
	setTimeout(function(){document.getElementById("exitBox").innerHTML = "<p class='text' style='margin-top: 14%; color: red; text-shadow: 0 0 10px red, 0 0 10px red;'>SHUTTING DOWN \\</p>";}, 1750);
	
	setTimeout(function(){document.getElementById("exitBox").innerHTML = "<p class='text' style='margin-top: 14%; color: red; text-shadow: 0 0 10px red, 0 0 10px red;'>SHUTTING DOWN |</p>";}, 2000);
	
	setTimeout(function(){document.getElementById("exitBox").innerHTML = "<p class='text' style='margin-top: 14%; color: red; text-shadow: 0 0 10px red, 0 0 10px red;'>SHUTTING DOWN /</p>";}, 2250);
	
	setTimeout(function(){document.getElementById("exitBox").innerHTML = "<p class='text' style='margin-top: 14%; color: red; text-shadow: 0 0 10px red, 0 0 10px red;'>SHUTTING DOWN -</p>";}, 2500);
	
	setTimeout(function(){document.getElementById("exitBox").innerHTML = "<p class='text' style='margin-top: 14%; color: red; text-shadow: 0 0 10px red, 0 0 10px red;'>SHUTTING DOWN \\</p>";}, 2750);
	
	setTimeout(function(){document.getElementById("exitBox").innerHTML = "<p class='text' style='margin-top: 14%; color: red; text-shadow: 0 0 10px red, 0 0 10px red;'>SHUTTING DOWN |</p>";}, 3000);
	
	setTimeout(function(){document.getElementById("exitBox").innerHTML = "<p class='text' style='margin-top: 14%; color: red; text-shadow: 0 0 10px red, 0 0 10px red;'>SHUTTING DOWN /</p>";}, 3250);
	
	setTimeout(function(){document.getElementById("exitBox").innerHTML = "<p class='text' style='margin-top: 14%; color: red; text-shadow: 0 0 10px red, 0 0 10px red;'>SHUTTING DOWN -</p>";}, 3500);
	
	setTimeout(function(){document.getElementById("exitBox").innerHTML = "<p class='text' style='margin-top: 14%; color: red; text-shadow: 0 0 10px red, 0 0 10px red;'>SHUTTING DOWN \\</p>";}, 3750);
	
	setTimeout(function(){document.getElementById("exitBox").innerHTML = "<p class='text' style='margin-top: 14%; color: red; text-shadow: 0 0 10px red, 0 0 10px red;'>SHUTTING DOWN |</p>";}, 4000);
	
	setTimeout(function(){window.close();}, 4100);
	
}

function initiateStuff(){

	document.getElementById("selector").style.top = document.getElementById("option" + line).offsetTop - 14;

}

function clearViewWindow(){
	
	document.getElementById("viewWindow").innerHTML = "";
	
}

function keyPressed(event) {
	startBackgroundMusic();
	keyFirstPressed = true;
	if(buttonsEnabled == true){
		clearViewWindow();
		if (event.keyCode == 38 || event.keyCode == 87) {
			if(line > 1){
				line--;
				document.getElementById("reselect").play();
				clearViewWindow();
			}
		}
		if (event.keyCode == 40 || event.keyCode == 83) {
			if(line < amountOfLines){
				line++;
				document.getElementById("reselect").play();
				clearViewWindow();
			}
		}
		if (event.keyCode == 13) {
			
			document.getElementById("select").play();
			
			if(line == 3){
				
				if(document.getElementById("exitBox") == null){
					
					exitBoxBorder = document.createElement("div");
					
					exitBoxBorder.appendChild(document.createTextNode(""));
					
					document.getElementById("mainBox").appendChild(exitBoxBorder);
					
					exitBoxBorder.style.left = "25.5%";
					
					exitBoxBorder.style.top = "32%";
					
					exitBoxBorder.style.width = "51%";
					
					exitBoxBorder.style.height = "23.5%";
					
					exitBoxBorder.style.position = "absolute";
					
					exitBoxBorder.id = "exitBoxBorder";
					
					exitBoxBorder.style.background = "black";
				
					exitBox = document.createElement("div");
					
					exitBox.appendChild(document.createTextNode(""));
					
					document.getElementById("mainBox").appendChild(exitBox);
					
					exitBox.style.left = "26%";
					
					exitBox.style.top = "32.5%";
					
					exitBox.style.width = "50%";
					
					exitBox.style.height = "22%";
					
					exitBox.style.position = "absolute";
					
					exitBox.id = "exitBox";
					
					exitBox.style.border = "2px solid #db2020";
					
					exitBox.style.textAlign = "center";
					
					pressBox = document.createElement("div");
					
					pressBox.appendChild(document.createTextNode(""));
					
					document.getElementById("mainBox").appendChild(pressBox);
					
					pressBox.id = "pressBox";
					
					pressBox.style.position = "absolute";
					
					pressBox.style.left = "43.5%";
					
					pressBox.style.bottom = "42%";
					
					pressBox.style.width = "9%";
					
					pressBox.style.height = "6%";
					
					pressBox.style.background = "black";
					
					escBox = document.createElement("div");
					
					escBox.appendChild(document.createTextNode(""));
					
					document.getElementById("mainBox").appendChild(escBox);
					
					escBox.id = "escBox";
					
					escBox.style.position = "absolute";
					
					escBox.style.left = "53.25%";
					
					escBox.style.bottom = "42%";
					
					escBox.style.width = "5.25%";
					
					escBox.style.height = "6%";
					
					escBox.style.background = "black";
					
					toBox = document.createElement("div");
					
					toBox.appendChild(document.createTextNode(""));
					
					document.getElementById("mainBox").appendChild(toBox);
					
					toBox.id = "toBox";
					
					toBox.style.position = "absolute";
					
					toBox.style.left = "59.25%";
					
					toBox.style.bottom = "42%";
					
					toBox.style.width = "3.75%";
					
					toBox.style.height = "6%";
					
					toBox.style.background = "black";
					
					cancelBox = document.createElement("div");
					
					cancelBox.appendChild(document.createTextNode(""));
					
					document.getElementById("mainBox").appendChild(cancelBox);
					
					cancelBox.id = "cancelBox";
					
					cancelBox.style.position = "absolute";
					
					cancelBox.style.left = "63.75%";
					
					cancelBox.style.bottom = "42%";
					
					cancelBox.style.width = "10.25%";
					
					cancelBox.style.height = "6%";
					
					cancelBox.style.background = "black";
					
					pressText = document.createElement("p");
					
					pressText.appendChild(document.createTextNode("Press"));
					
					document.getElementById("mainBox").appendChild(pressText);
					
					pressText.id = "pressText";
					
					escText = document.createElement("p");
					
					escText.appendChild(document.createTextNode("ESC"));
					
					document.getElementById("mainBox").appendChild(escText);
					
					escText.id = "escText";
					
					toText = document.createElement("p");
					
					toText.appendChild(document.createTextNode("to"));
					
					document.getElementById("mainBox").appendChild(toText);
					
					toText.id = "toText";
					
					cancelText = document.createElement("p");
					
					cancelText.appendChild(document.createTextNode("cancel"));
					
					document.getElementById("mainBox").appendChild(cancelText);
					
					cancelText.id = "cancelText";
					
					pressText.style.position = "absolute";
					
					pressText.style.left = "39%";
					
					pressText.style.bottom = "40%";
					
					pressText.style.color = "red";
					
					pressText.className = "text";
					
					pressText.style.textShadow = "0 0 10px red, 0 0 10px red";
					
					pressText.lineHeight = "normal";
					
					pressText.backgroundColor = "yellow";
					
					escText.style.position = "absolute";
					
					escText.style.left = "48.5%";
					
					escText.style.top = "51%";
					
					escText.style.color = "red";
					
					escText.className = "text";
					
					escText.style.textShadow = "0 0 10px red, 0 0 10px red";
					
					escText.lineHeight = "normal";
					
					toText.style.position = "absolute";
					
					toText.style.left = "54.5%";
					
					toText.style.top = "51%";
					
					toText.style.color = "red";
					
					toText.className = "text";
					
					toText.style.textShadow = "0 0 10px red, 0 0 10px red";
					
					toText.lineHeight = "normal";
					
					cancelText.style.position = "absolute";
					
					cancelText.style.left = "59%";
					
					cancelText.style.top = "51%";
					
					cancelText.style.color = "red";
					
					cancelText.className = "text";
					
					cancelText.style.textShadow = "0 0 10px red, 0 0 10px red";
					
					cancelText.lineHeight = "normal";
					
					shutDown();
				
				}
			
			}
			
		}
		
		if(line == 1){
			
			superHotText = document.createElement("p");
				
			superHotText.appendChild(document.createTextNode("This feature is not available"));
				
			document.getElementById("viewWindow").appendChild(superHotText);
				
			superHotText.style.color = "white";
				
			superHotText.style.position = "absolute";
				
			superHotText.className = "text";
				
		}
		if(line == 2){
			
			readmeText = document.createElement("p");
			
			readmeText.appendChild(document.createTextNode(""));
				
			document.getElementById("viewWindow").appendChild(readmeText);
				
			readmeText.style.color = "white";
				
			readmeText.style.position = "absolute";
			
			readmeText.style.fontSize = "140%";
				
			readmeText.className = "text";
			
			readmeText.style.lineHeight = "30px";
			
			readmeText.style.lineBreak = "break-all";
			
			readmeText.style.top = "-3%";
			
			readmeText.innerHTML = "Jaksawesome10 proudly presents piOS, designed by Team Superhot";
			
		}
		if(line == 3){
			
			quitText = document.createElement("p");
				
			quitText.appendChild(document.createTextNode("app: quit.exe    |--file-> 50"));
				
			document.getElementById("viewWindow").appendChild(quitText);
				
			quitText.style.color = "white";
				
			quitText.style.position = "absolute";
			
			quitText.style.whiteSpace = "pre";
			
			quitText.style.fontSize = "140%";
				
			quitText.className = "text";
			
		}
		if(line == 4){
			
			console.log("Lol no");
			
		}
		if(line == 5){
			
			settingsText = document.createElement("p");
				
			settingsText.appendChild(document.createTextNode("directory:SETTINGS	|>FOLDER<"));
				
			document.getElementById("viewWindow").appendChild(settingsText);
				
			settingsText.style.color = "white";
				
			settingsText.style.position = "absolute";
			
			settingsText.style.whiteSpace = "pre";
			
			settingsText.style.fontSize = "140%";
			
			settingsText.className = "text";
			
		}
		if(line == 6){
			
			appsText = document.createElement("p");
				
			appsText.appendChild(document.createTextNode("directory:APPS		|>FOLDER<"));
				
			document.getElementById("viewWindow").appendChild(appsText);
				
			appsText.style.color = "white";
				
			appsText.style.position = "absolute";
			
			appsText.style.whiteSpace = "pre";
			
			appsText.style.fontSize = "140%";
				
			appsText.className = "text";
			
		}
		if(line == 7){
			
			demosText = document.createElement("p");
				
			demosText.appendChild(document.createTextNode("directory:DEMOS   	|>FOLDER<"));
				
			document.getElementById("viewWindow").appendChild(demosText);
				
			demosText.style.color = "white";
				
			demosText.style.position = "absolute";
			
			demosText.style.whiteSpace = "pre";
			
			demosText.style.fontSize = "140%";
			
			demosText.className = "text";
			
		}
		if(line == 8){
			
			cellularText = document.createElement("p");
				
			cellularText.appendChild(document.createTextNode("directory:CELLULAR      |>FOLDER<"));
				
			document.getElementById("viewWindow").appendChild(cellularText);
				
			cellularText.style.color = "white";
				
			cellularText.style.position = "absolute";
			
			cellularText.style.whiteSpace = "pre";
			
			cellularText.style.fontSize = "140%";
			
			cellularText.className = "text";
			
		}
		if(line == 9){
			
			wiresText = document.createElement("p");
				
			wiresText.appendChild(document.createTextNode("directory:WIRES         |>FOLDER<"));
				
			document.getElementById("viewWindow").appendChild(wiresText);
				
			wiresText.style.color = "white";
				
			wiresText.style.position = "absolute";
			
			wiresText.style.whiteSpace = "pre";
			
			wiresText.style.fontSize = "140%";
			
			wiresText.className = "text";
			
		}
		if(line == 10){
			
			gamesText = document.createElement("p");
				
			gamesText.appendChild(document.createTextNode("directory:GAMES         |>FOLDER<"));
				
			document.getElementById("viewWindow").appendChild(gamesText);
				
			gamesText.style.color = "white";
				
			gamesText.style.position = "absolute";
			
			gamesText.style.whiteSpace = "pre";
			
			gamesText.style.fontSize = "140%";
			
			gamesText.className = "text";
			
		}
		if(line == 11){
			
			vrText = document.createElement("p");
				
			vrText.appendChild(document.createTextNode("directory:VR            |>FOLDER<"));
				
			document.getElementById("viewWindow").appendChild(vrText);
				
			vrText.style.color = "white";
				
			vrText.style.position = "absolute";
			
			vrText.style.whiteSpace = "pre";
			
			vrText.style.fontSize = "140%";
			
			vrText.className = "text";
			
		}
		if(line == 12){
			
			artText = document.createElement("p");
				
			artText.appendChild(document.createTextNode("directory:ART           |>FOLDER<"));
				
			document.getElementById("viewWindow").appendChild(artText);
				
			artText.style.color = "white";
				
			artText.style.position = "absolute";
			
			artText.style.whiteSpace = "pre";
			
			artText.style.fontSize = "140%";
			
			artText.className = "text";
			
		}
		if(line == 13){
			
			videosText = document.createElement("p");
				
			videosText.appendChild(document.createTextNode("directory:VIDEOS        |>FOLDER<"));
				
			document.getElementById("viewWindow").appendChild(videosText);
				
			videosText.style.color = "white";
				
			videosText.style.position = "absolute";
			
			videosText.style.whiteSpace = "pre";
			
			videosText.style.fontSize = "140%";
			
			videosText.className = "text";
			
		}
	}
	if (event.keyCode == 27) {
		if(buttonsEnabled == false){
			
			buttonsEnabled = true;
			
			document.getElementById("exitBox").remove();
			document.getElementById("exitBoxBorder").remove();
			document.getElementById("pressText").remove();
			document.getElementById("pressBox").remove();
			document.getElementById("escText").remove();
			document.getElementById("escBox").remove();
			document.getElementById("toText").remove();
			document.getElementById("toBox").remove();
			document.getElementById("cancelText").remove();
			document.getElementById("cancelBox").remove();
			
			document.getElementById("select").play(); 
		
		}
    }
	
	document.getElementById("selector").style.top = document.getElementById("option" + line).offsetTop - 14;
	
}
