// Exemple 1
/*const canvas = document.getElementById('myFirstCanvas');
let ctx;

if (canvas1.getContext) {

  // Ajustement de la taille du canvas. Il faut pouvoir centrer le texte quelle que soit la taille du canvas
  // Ici le canvas sera toujour un carré, la taille de la hauteur sera toujours égale à la largeur.

  // On récupère la valeur de l'attribut width
  let sizeCanvas = canvas1.getAttribute('width');

  // Si l'attribut n'existe pas alors la valeur par défaut sera 150
  sizeCanvas  = sizeCanvas === '0' || sizeCanvas === null ? 150 : sizeCanvas;
  // On affecte ces valeurs aux attributs de l'élément HTML
  canvas1.setAttribute('height', sizeCanvas)
  canvas1.setAttribute('width', sizeCanvas)

  // Taille du texte par rapport à la taille du canvas
  const sizeText = sizeCanvas / 3
 
  ctx1 = canvas1.getContext('2d') ;
  // Mise en place du texte
  ctx1.fillStyle = 'red'
  ctx1.textAlign = 'center'
  ctx1.textBaseline = 'middle';
  ctx1.font = `${sizeText}px Arial`;
  // On ajuste la position du texte par rapport à la taille du canvas
  ctx1.fillText('JD', sizeCanvas/2, sizeCanvas/2);
}
*/

console.log('-----------------------------------------------')

// Exemple 2
/*const canvas = document.getElementById('myFirstCanvas')
let ctx

if (canvas.getContext) {
  function drawCanvas () {
    const img = new Image()
    let sizeCanvas = canvas.getAttribute('width')
    sizeCanvas = sizeCanvas === '0' || sizeCanvas === null ? 150 : sizeCanvas
    canvas.setAttribute('height', sizeCanvas)
    canvas.setAttribute('width', sizeCanvas)
    img.onload = () => {
      const newWidth = (img.width * sizeCanvas) / img.height // garde les proportions de l'image.
      ctx.drawImage(img, 0, 0, newWidth, sizeCanvas)
      ctx.fillRect(0, 0, sizeCanvas, sizeCanvas)
    }
    img.src = 'Voiture.jpg'
  }
}*/

const canvas = document.getElementById('myFirstCanvas')
let ctx

if (canvas.getContext) {
  const img = new Image()
  let sizeCanvas = canvas.getAttribute('width')
  sizeCanvas = sizeCanvas === '0' || sizeCanvas === null ? 150 : sizeCanvas
  canvas.setAttribute('height', sizeCanvas)
  canvas.setAttribute('width', sizeCanvas)
  img.addEventListener('load', () => {
    const newWidth = (img.width * sizeCanvas) / img.height
    ctx.drawImage(img, 0, 0, newWidth, sizeCanvas)
    ctx.rectfill(0, 0, sizeCanvas, sizeCanvas)
  })
  img.src = 'Voiture.jpg'
}

console.log('-----------------------------------------------')

// Exemple 3

// Afficher du texte
/*const canvas = document.getElementById('drawing')
const ctx = canvas.getContext('2d')

ctx.fillStyle = 'blue'
ctx.strokeStyle = 'red'

ctx.textAlign = 'center'
ctx.font = '50px segoe UI'
ctx.fillText('lorem ipsum dolor', 300, 280)
ctx.strokeText('lorem ipsum dolor', 300, 330)*/

console.log('-----------------------------------------------')

// Exemple 4
/*const canvas = document.getElementById('drawing')
const ctx = canvas.getContext('2d')

window.onload = () => {
  const image = new Image(400, 400)

  image.onload = () => {
    ctx.drawImage(image, 0, 0, 400, 400)
  }
  image.src = 'Voiture.jpg'
}*/
