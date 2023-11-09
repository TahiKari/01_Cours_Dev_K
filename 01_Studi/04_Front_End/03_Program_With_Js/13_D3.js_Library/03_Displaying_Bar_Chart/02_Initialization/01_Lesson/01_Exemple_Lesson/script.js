// Exemple 1
const MARGIN_LEFT = 50
const MARGIN_RIGHT = 50
const MARGIN_TOP = 50
const MARGIN_BOTTOM = 50
const WIDTH = 600
const HEIGHT = 400

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
