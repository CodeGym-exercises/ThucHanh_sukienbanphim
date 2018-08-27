let nobita = document.getElementById("nobita");
let cn = document.getElementById("console");
function up(){
	console.log("top");
	cn.innerHTML = "top";
	nobita.style.top = parseInt(nobita.style.top) - 20 + "px";
}
function down(){
	console.log("down");
	cn.innerHTML = "down";
	nobita.style.top = parseInt(nobita.style.top) + 20 + "px";
}
function left(){
	console.log("left");
	cn.innerHTML = "left";
	nobita.style.left = parseInt(nobita.style.left) - 20 + "px";
}
function right(){
	console.log("right");
	cn.innerHTML = "right";
	nobita.style.left = parseInt(nobita.style.left) + 20 + "px";
}

function moveSelection(evt){
	switch(evt.keyCode){
		case 37:
			left();
			break;
		case 39:
			right();
			break;
		case 38:
			up();
			break;
		case 40:
			down();
			break;
	}
}

function docReady(){
	window.addEventListener('keydown', moveSelection);
}	
