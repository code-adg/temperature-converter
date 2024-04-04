function convertTemperature() {
    var inputTemp = parseFloat(document.getElementById('inputTemp').value);
    var selectUnit = document.getElementById('selectUnit').value;
    var result = document.getElementById('result');
    
    if (selectUnit === 'celsius') {
      var fahrenheit = (inputTemp * 9/5) + 32;
      result.innerHTML = inputTemp + ' Celsius is ' + fahrenheit + ' Fahrenheit';
    } else if (selectUnit === 'fahrenheit') {
      var celsius = (inputTemp - 32) * 5/9;
      result.innerHTML = inputTemp + ' Fahrenheit is ' + celsius + ' Celsius';
    }
  }
  