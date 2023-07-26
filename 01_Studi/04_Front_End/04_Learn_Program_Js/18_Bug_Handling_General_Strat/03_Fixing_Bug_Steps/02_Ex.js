let tableTemp = [];

for (let counter = 0; counter < listTemperature.tempPerDay.length; counter++) {
  if (listTemperature.tempPerDay[counter].temp > 20) {
    tableTemp.push(listTemperature.tempPerDay[counter].temp);
  }
}

console.log(tableTemp)