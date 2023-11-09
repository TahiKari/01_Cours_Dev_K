// Exemple 1
const MARGIN_LEFT = 50
const MARGIN_RIGHT = 50
const MARGIN_TOP = 50
const MARGIN_BOTTOM = 50
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
const svg = d3
  .select('body')
  .append('svg')
  .attr('width', WIDTH + MARGIN_LEFT + MARGIN_RIGHT)
  .attr('height', HEIGHT + MARGIN_TOP + MARGIN_BOTTOM)

// Ajouter un groupe à l'élément SVG pour le graphique
const graph = svg
  .append('g')
  .attr('transform', `translate(${MARGIN_LEFT}, ${MARGIN_TOP})`)

graph.selectAll('rect')
// lier les données
// récupérer la liste des éléments vides
// ajouter un élément rect pour chaque élément vide