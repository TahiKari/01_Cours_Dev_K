// Exemple 1

const canvas1 = document.getElementById('rectangle')
let ctx1
if (canvas1.getContext) {
  ctx1 = canvas1.getContext('2d')
  // On indique au contexte de constuire un rectangle à 10px du top, 10px du left, 50px de largeur et 30px de hauteur
  ctx1.fillRect(10, 10, 50, 30)
} else {
  // code pour les anciens navigateurs
}

console.log('-----------------------------------------------')

// Exemple 2

const canvas2 = document.getElementById('trait')
let ctx2
if (canvas2.getContext) {
  ctx2 = canvas2.getContext('2d')
  // On indique au contexte de tracer un trait  qui démarre aux coordonnées 50px, 25px et qui fini aux coordonnées 250px, 125px
  ctx2.beginPath()
  ctx2.moveTo(50, 25)
  ctx2.lineTo(250, 125)
  ctx2.stroke()
} else {
  // code pour les anciens navigateurs
}

console.log('-----------------------------------------------')

// Exemple 3

const canvas3 = document.getElementById('triangle')
let ctx3
if (canvas3.getContext) {
  ctx3 = canvas3.getContext('2d')
  ctx3.beginPath()
  ctx3.moveTo(25, 25)
  ctx3.lineTo(25, 125)
  ctx3.lineTo(125, 125)
  ctx3.closePath()
  ctx3.stroke()
} else {
  // code pour les anciens navigateurs
}

console.log('-----------------------------------------------')

// Exemple 4
const canvas4 = document.getElementById('triangle-TraitVertical')
let ctx4
if (canvas4.getContext) {
  ctx4 = canvas4.getContext('2d')
  ctx4.beginPath()
  ctx4.moveTo(25, 25)
  ctx4.lineTo(25, 125)
  ctx4.lineTo(125, 125)
  ctx4.closePath()
  ctx4.stroke()

  ctx4.beginPath()
  ctx4.moveTo(150, 25)
  ctx4.lineTo(150, 125)
  ctx4.stroke()
} else {
  // code pour les anciens navigateurs
}

console.log('-----------------------------------------------')

// Exemple 5
const canvas5 = document.getElementById('arc')
let ctx5
if (canvas5.getContext) {
  ctx5 = canvas5.getContext('2d')
  // construction de l'arc
  ctx5.beginPath()
  ctx5.moveTo(20, 20)
  //ctx.arcTo(70, 50, 10, 80, 30)
  ctx5.arcTo(70, 70, 20, 120, 70)

  // corde de l'arc
  //ctx.moveTo(20,20);
  ctx5.moveTo(20, 20)
  ctx5.lineTo(20, 120)

  // bois de la fleche
  ctx5.moveTo(20, 70)
  ctx5.lineTo(60, 70)

  ctx5.stroke()

  // pointe de la fleche
  ctx5.beginPath()
  ctx5.moveTo(60, 65)
  ctx5.lineTo(64, 70)
  ctx5.lineTo(60, 75)
  ctx5.fill()
} else {
  // code pour les anciens navigateurs
}

console.log('-----------------------------------------------')

// Exemple 6

const canvas6 = document.getElementById('cercle');
const ctx6 = canvas6.getContext('2d');
// arc vide
ctx6.beginPath();
ctx6.arc(100, 100, 50, 0, Math.PI * 2);
ctx6.stroke();

// arc plein
ctx6.beginPath();
ctx6.arc(100, 100, 20, 0, Math.PI * 2);
ctx6.fill();

console.log('-----------------------------------------------')

// Exemple 7

const canvas7 = document.getElementById('smiley')
const ctx7 = canvas7.getContext('2d')

ctx7.beginPath()
ctx7.arc(75, 75, 50, 0, Math.PI * 2)
ctx7.moveTo(110, 75)
ctx7.arc(75, 75, 35, 0, Math.PI)
ctx7.moveTo(65, 65)
ctx7.arc(60, 65, 5, 0, Math.PI * 2)
ctx7.moveTo(85, 65)
ctx7.lineTo(98, 65)
ctx7.stroke()
ctx7.closePath()