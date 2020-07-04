var css = document.getElementsByTagName("h3")[0];
var colors = document.getElementsByClassName("colors");
var body = document.getElementById("gradient");
var randomButton = document.getElementById("random");
var color1 = colors.color1;
var color2 = colors.color2;

function changeGradient() {
	body.style.background = "linear-gradient(to right, " + color1.value + ", " + color2.value + ")";
	css.textContent = body.style.background + ";";
}

function randomColors() {
	color1.value = "#" + Math.floor(Math.random()*16777215).toString(16);
	color2.value = "#" + Math.floor(Math.random()*16777215).toString(16);
	changeGradient();
}

changeGradient();

color1.addEventListener("input", changeGradient);

color2.addEventListener("input", changeGradient);

randomButton.addEventListener("click", randomColors);