const convertToCelsius = function(fahrenheit) {
  celsium = Math.round((fahrenheit - 32) * (5 / 9) * 10) / 10;
  return celsium;
};

const convertToFahrenheit = function(celsium) {
  fahrenheit = Math.round(((celsium * 9) / 5 + 32)*10) / 10;
  return fahrenheit;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
