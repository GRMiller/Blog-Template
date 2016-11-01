var farenheit;
var celsius;


function toCelsius() {
	farenheit = Number(document.getElementById('farenheit').textContent);
	celsius = ((farenheit - 32) / 1.8);
	var elcelsius = document.getElementById ('celsius');
	elcelsius.innerHTML = celsius;
};

toCelsius();