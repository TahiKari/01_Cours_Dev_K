// Exemple 1 de la vidéo
const data = [10, 20, 30]

// Méthode 1 pour sélectionner le framework d3
const bodyElement = d3.select('body')

// Méthode 2 pour sélectionner le framework d3
//const divElement = d3.selectAll("div")

const svgElement = bodyElement
  .append('svg') // Rajoute un svg en tant élément enfant de body
  //bodyElement.append("svg").append("svg") // Rajoute un svg en tant élément enfant de body et un autre svg en tant qu'élement enfant de "svg"
  .attr('width', '500px') // Cette méthode permet de rajouter un attribut à l'élément sur lequel il est appellé
  .attr('height', '100px') // On peut utilisé a la chaîne cette fonctionnalité car c'est une méthode récursive qui renvoie l'élément sur lequel l'attribut est appliqué

svgElement.append('rect')

svgElement
  .selectAll('rect')
  .data(data)
  .enter()
  .append('rect')
  .attr('width', d => d)

console.log('-----------------------------------------------')

// Exemple 2
/*
const bodyElement = d3.select('body')

const divElementList = bodyElement.selectAll('div')
*/