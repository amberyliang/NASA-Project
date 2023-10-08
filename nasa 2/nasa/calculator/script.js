document.getElementById("calculateBtn").addEventListener("click", calculateCO2Absorption);

function calculateCO2Absorption() {
  var initialPopulation = parseFloat(document.getElementById("initialPopulation").value);
  var growthRate = parseFloat(document.getElementById("growthRate").value);
  var timePeriod = parseFloat(document.getElementById("timePeriod").value);

  var finalPopulation = initialPopulation * Math.pow(1 + growthRate, timePeriod);
  var co2Absorption = finalPopulation * 0.1; // Assuming 0.1 units of CO2 absorption per phytoplankton

  var resultElement = document.getElementById("result");
  resultElement.innerHTML = "The estimated CO2 absorption after " + timePeriod + " days is: " + co2Absorption.toFixed(2) + " units.";
}