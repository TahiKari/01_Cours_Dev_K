// Exemple 1 de la vidéo

const svg = d3
  .select('body')
  .append('svg')
  .attr('width', '550px')
  .attr('height', '100px')

const scale = d3.scaleLinear().domain([0, 20]).range([0, 500])

const axisX = d3.axisBottom(scale)

svg.append("g").attr("transform", "translate(25, 25)").call(axisX)


console.log('----------------------------------------')

// Exemple 2
/*
// Create a linear scale
var scale = d3.scaleLinear(
    [0, 10], // Input range
    [0, 100] // Output range
)

// Usage example
console.log(scale(5)); // Output: 50
*/

console.log('----------------------------------------')

// Exemple 3
/*
var scale = d3.scaleLinear()
  .domain([0, 10]) // Input range
  .range([0, 100]); // Output range
*/

console.log('----------------------------------------')

// Exemple 4
/*
// Create scale for x axis
var scaleX = d3.scaleLinear()
    .domain([0, 10])
    .range([0, 500])

// Create axis for x axis
var axisX = d3.axisBottom(scaleX);

// Create SVG element
    var svg = d3.select("body")
        .append("svg")
        .attr("width", 600)
        .attr("height", 200);

// Append axis to svg
svg.append("g")
    .attr("transform", 'translate(25, 25)')
    .call(axisX);
*/

console.log('----------------------------------------')

// Exemple 5
/*

*/

console.log('----------------------------------------')

// Exemple 6
/*

*/

console.log('----------------------------------------')

// Exemple 7
/*

*/

console.log('----------------------------------------')
