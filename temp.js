const searchBox = document.querySelector(".search input");
const celsius = document.getElementById("c");
const fahrenheit = document.getElementById("f");
let convertedTemp = 0;


function toCelsius() {
    const inputValue = parseFloat(searchBox.value);
