// Exemple 1 de la vidéo
/*
const MARGIN_TOP = 50
const MARGIN_BOTTOM = 50
const MARGIN_LEFT = 50
const MARGIN_RIGHT = 50

const WIDTH = 600
const HEIGHT = 400

const data = [
  {
    language: 'C++',
    happiness: 80
  },
  {
    language: 'JavaScript',
    happiness: 50
  },
  {
    language: 'Haskell',
    happiness: 70
  },
  {
    language: 'Python',
    happiness: 80
  },
  {
    language: 'Java',
    happiness: 40
  }
]

// Créer l'élément SVG avec les attributs width et height
const graph = d3
  .select('body')
  .append('svg')
  .attr('width', WIDTH + MARGIN_LEFT + MARGIN_RIGHT)
  .attr('height', HEIGHT + MARGIN_TOP + MARGIN_BOTTOM)
  .append('g')

const scaleX = d3
  .scaleBand()
  .domain(data.map(d => d.language))
  .range([MARGIN_LEFT, WIDTH - MARGIN_RIGHT])
  .padding(0.1)

const scaleY = d3
  .scaleLinear()
  .domain([0, 100])
  .range([HEIGHT, MARGIN_TOP])

const axisX = d3.axisBottom(scaleX)
const axisY = d3.axisLeft(scaleY)

graph
  .selectAll('rect')
  .data(data)
  .enter()
  .append('rect')
  .attr('width', scaleX.bandwidth())
  .attr('height', d => HEIGHT - scaleY(d.happiness))
  .attr('x', d => scaleX(d.language))
  .attr('y', d => scaleY(d.happiness))
  .attr('fill', 'purple')

graph.append('g').attr('transform', `translate(0, ${HEIGHT})`).call(axisX)
graph.append('g').attr('transform', `translate(0, ${MARGIN_LEFT})`).call(axisY)

graph
  .append('text')
  .attr('x', WIDTH / 2)
  .attr('y', HEIGHT + 40)
  .attr('text-anchor', 'middle')
  .text('Programming Language')

graph
  .append('text')
  .attr('x', HEIGHT / 2 + MARGIN_TOP / 2)
  .attr('y', -5)
  .attr('text-anchor', 'middle')
  attr("transform", "rotate(90")
  .text('Happiness (%)')
*/

console.log('----------------------------------------')

// Exemple 2
/*
const scaleX = d3.scaleBand()
    .domain(data.map((d) => d.language))
    .range([0, WIDTH])
    .padding(0.1);
*/

console.log('----------------------------------------')

// Exemple 3
/*
const scaleY = d3.scaleLinear()
    .domain([0, d3.max(data, (d) => d.happiness)])
    .range([HEIGHT, 0]);
*/

console.log('----------------------------------------')

// Exemple 4
/*
const axisX = d3.axisBottom(scaleX)
*/

console.log('----------------------------------------')

// Exemple 5
/*
graph.append("g")
    .attr("transform", `translate(0, ${HEIGHT})`)
    .call(axisX)
*/

console.log('----------------------------------------')

// Exemple 6
/*
graph.append("text")
    .attr("x", WIDTH / 2)
    .attr("y", HEIGHT + MARGIN_BOTTOM - 10)
    .style("text-anchor", "middle")
    .text("Programming languages");

graph.append("text")
    .attr("x", -HEIGHT / 2)
    .attr("y", -MARGIN_LEFT + 10)
    .style("text-anchor", "middle")
    .attr("transform", "rotate(-90)")
    .text("Happiness (%)");
*/

console.log('----------------------------------------')

// Exemple 7
/*

*/

console.log('----------------------------------------')
