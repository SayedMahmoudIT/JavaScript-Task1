// CelsiusAndFahrenheit

window.alert('Case4 ---> convert temperatures to and from Celsius, Fahrenheit.')

var temperature = Number(prompt('Enter temperature to convert'));
var changeModeEntered = prompt('Enter C to convert to Celsius or F to convert to Fahrenheit');
var changeMode =changeModeEntered.toUpperCase();
var Fahrenheit_result = 0;
var Celsius_result = 0;

if (changeMode !== 'C' && changeMode !== 'F') {
    console.log('enter C to convert to Celsius or F to convert to Fahrenheit');
    document.getElementById('case4').innerText='enter C to convert to Celsius or F to convert to Fahrenheit';
} else {
    if (changeMode == 'C') {
        Celsius_result = (temperature - 32) * 5 / 9;
        console.log(temperature + ' Fahrenheit = ' + Celsius_result + ' Celsius');
        document.getElementById('case4').innerText=temperature + ' Fahrenheit = ' + Celsius_result + ' Celsius';
    } else {
        Fahrenheit_result = (temperature * 9 / 5) + 32;
        console.log(temperature + ' Celsius = ' + Fahrenheit_result + ' Fahrenheit');
        document.getElementById('case4').innerText=temperature + ' Celsius = ' + Fahrenheit_result + ' Fahrenheit';
    }
}







