const searchBox = document.querySelector(".search input");
const celsius = document.getElementById("c");
const fahrenheit = document.getElementById("f");
const kelvin = document.getElementById("k");
let convertedTemp = 0;


function toCelsius() {
    const inputValue = parseFloat(searchBox.value);

    if (! isNaN(inputValue)) {
        convertedTemp = (inputValue - 32) * 5 / 9;
        document.querySelector(".content h1").innerHTML = convertedTemp.toFixed(2) + "C";
    }
    else {
        document.querySelector(".content h1").innerHTML = "Enter a valid value";

    } 
    setTimeout(
        searchBox.value = "";
    )
}


function toFahrenheit() {
    const inputValue = parseFloat(searchBox.value);

    if (! isNaN(inputValue)) {
        convertedTemp = (inputValue * 9/5)+32;
        document.querySelector(".content h1").innerHTML = convertedTemp.toFixed(2) + "F";
    }
    else {
        document.querySelector(".content h1").innerHTML = "Enter a valid value";

    }
    setTimeout(
        searchBox.value = "";
    )
    
}


function toKelvin() {
    const inputValue = parseFloat(searchBox.value);

    if (! isNaN(inputValue)) {
        convertedTemp = (inputValue * 9/5)+32;
        document.querySelector(".content h1").innerHTML = convertedTemp.toFixed(2) + "K";
    }
    else {
        document.querySelector(".content h1").innerHTML = "Enter a valid value";

    }
    setTimeout(
        searchBox.value = "";
    )
}
