var farenheit = Number(document.getElementById('farenheit').textContent);
var celsius = (farenheit - 32 * (5/9));
console.log(farenheit);
console.log(celsius);


function toCelsius() {
var elcelsius = document.getElementById ('celsius');
elcelsius.innerHTML = celsius;
};

toCelsius();