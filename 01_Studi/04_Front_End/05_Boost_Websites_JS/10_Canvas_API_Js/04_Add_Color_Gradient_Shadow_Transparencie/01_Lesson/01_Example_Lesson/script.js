// Exemple 1

const canvas1 = document.getElementById('myFirstCanvas')
let ctx1
if (canvas1.getContext) {
  ctx1 = canvas1.getContext('2d')
  ctx1.fillStyle = 'red'
  ctx1.fillRect(10, 10, 130, 130)
}

console.log('-----------------------------------------------')

// Exemple 2

const canvas2 = document.getElementById('mySecondCanvas')
let ctx2
if (canvas2.getContext) {
  ctx2 = canvas2.getContext('2d')
  ctx2.fillStyle = 'green'
  ctx2.fillRect(10, 10, 130, 130)

  ctx2.fillStyle = 'white'
  ctx2.globalAlpha = 0.5
  ctx2.fillRect(60, 60, 30, 30)
}

console.log('-----------------------------------------------')

// Exemple 3
const canvas3 = document.getElementById('mythirdCanvas')
let ctx3
if (canvas3.getContext) {
  ctx3 = canvas3.getContext('2d')
  const lingrad = ctx3.createLinearGradient(0, 0, 0, 150)
  lingrad.addColorStop(0, 'blue')
  lingrad.addColorStop(1, 'white')

  ctx3.fillStyle = lingrad
  ctx3.fillRect(10, 10, 130, 130)
}

console.log('-----------------------------------------------')

// Exemple 4
const canvas4 = document.getElementById('myfourthCanvas')
let ctx4
if (canvas4.getContext) {
  ctx4 = canvas4.getContext('2d')
  ctx4.shadowOffsetX = 1
  ctx4.shadowOffsetY = 3
  ctx4.shadowBlur = 1
  ctx4.shadowColor = 'black'

  ctx4.font = '30px Arial'
  ctx4.fillText('Hello world', 30, 30)
}

console.log('-----------------------------------------------')

// Exemple 5
const canvas5 = document.getElementById('drawing')
let ctx5
if (canvas5.getContext) {
  ctx5 = canvas5.getContext('2d')

  // Dessin du smiley
  ctx5.beginPath()
  ctx5.arc(75, 75, 50, 0, Math.PI * 2)
  ctx5.fillStyle = 'yellow'
  ctx5.fill()
  ctx5.moveTo(110, 75)
  ctx5.arc(75, 75, 35, 0, Math.PI)
  ctx5.moveTo(65, 65)
  ctx5.arc(60, 65, 5, 0, Math.PI * 2)
  ctx5.moveTo(85, 65)
  ctx5.lineTo(98, 65)
  ctx5.lineWidth = 4
  ctx5.strokeStyle = 'red'
  ctx5.stroke()
  ctx5.closePath()

  // Dessin des carré sous le smiley

  // Ajout d'un dégrader sur carré 1
  const linearGradient = ctx5.createLinearGradient(20, 170, 120, 270)
  linearGradient.addColorStop(0, '#ff4757')
  linearGradient.addColorStop(1, '#5352ed')
  ctx5.fillStyle = linearGradient
  ctx5.fillRect(25, 170, 100, 100)

  // Ajout d'ombre sur carré 2
  ctx5.shadowColor = 'gray' // Couleur
  ctx5.shadowBlur = 15 // Intensité de l'ombre
  ctx5.shadowOffsetX = 4 // Déplacement orizontale
  ctx5.shadowOffsetY = 4 // Déplacement verticale

  ctx5.fillRect(140, 170, 100, 100)
}

console.log('-----------------------------------------------')
