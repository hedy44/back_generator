var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var randomButton = document.getElementById("random");


function setGradient(){
	body.style.background = 
	"linear-gradient(to right, " 
	+ color1.value 
	+ ", " 
	+ color2.value 
	+ ")"; 

	css.textContent = body.style.background + ";";
}

function randomColor(){
	var letters = '0123456789ABCDEF';
	var color = '#';
	for (var i=0; i<6; i++){
		color += letters[Math.floor(Math.random() * 16)];
		}
		return color;

}

function randomColors(){
	color1.value = randomColor();
	color2.value = randomColor();

	setGradient();
}

// Initial background gradient displayed on load
setGradient();



// console.log(css);
// console.log(color1);
// console.log(color2);


color1.addEventListener("input", setGradient);

color2.addEventListener("input", setGradient);

randomButton.addEventListener("click", randomColors);


