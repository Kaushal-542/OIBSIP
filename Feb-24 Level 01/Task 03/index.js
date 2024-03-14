function convertTemperature() { 
    var fromUnit = document.getElementById("fromUnit").value;
    var toUnit = document.getElementById("toUnit").value;
    var temperatureInput = parseFloat(document.getElementById("temperatureInput").value);

    //temperature conversion
    var result;
    switch (fromUnit) {
        case "Fahrenheit":
            result = convertFromFahrenheit(temperatureInput, toUnit);
            break;
        case "Celsius":
            result = convertFromCelsius(temperatureInput, toUnit);
            break;
        case "Kelvin":
            result = convertFromKelvin(temperatureInput, toUnit);
            break;
        default:
            result = "Invalid unit";
    }
 
    document.getElementById("result").value = result.toString();
}

function convertFromFahrenheit(fahrenheit, toUnit) {
    switch (toUnit) {
        case "Fahrenheit":
            return fahrenheit;
        case "Celsius":
            return (fahrenheit - 32) * (5 / 9);
        case "Kelvin":
            return (fahrenheit - 32) * (5 / 9) + 273.15;
        default:
            return "Invalid unit";
    }
}

function convertFromCelsius(celsius, toUnit) {
    switch (toUnit) {
        case "Fahrenheit":
            return (celsius * 9 / 5) + 32;
        case "Celsius":
            return celsius;
        case "Kelvin":
            return celsius + 273.15;
        default:
            return "Invalid unit";
    }
}

function convertFromKelvin(kelvin, toUnit) {
    switch (toUnit) {
        case "Fahrenheit":
            return (kelvin - 273.15) * 9 / 5 + 32;
        case "Celsius":
            return kelvin - 273.15;
        case "Kelvin":
            return kelvin;
        default:
            return "Invalid unit";
    }
}