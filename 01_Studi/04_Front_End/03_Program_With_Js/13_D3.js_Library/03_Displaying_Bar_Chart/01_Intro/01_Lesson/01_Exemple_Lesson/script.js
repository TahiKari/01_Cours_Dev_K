// Exemple 1 de la video

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

const graph = d3
  .select('body')
  .append('svg')
  .attr('width', WIDTH + MARGIN_LEFT + MARGIN_RIGHT)
  .attr('height', HEIGHT + MARGIN_LEFT + MARGIN_RIGHT)
  .append('g')

  graph.selectAll("rect").data(data)
  .enter()
  .append("rect")