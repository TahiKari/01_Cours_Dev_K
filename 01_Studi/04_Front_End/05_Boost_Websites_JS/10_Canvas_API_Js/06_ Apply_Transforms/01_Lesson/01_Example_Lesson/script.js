// Exemple 1
const canvas1 = document.getElementById('canvas1')
let ctx1
if (canvas1.getContext) {
  ctx1 = canvas1.getContext('2d')
  ctx1.fillStyle = 'red'
  ctx1.fillRect(200, 30, 30, 30)
  ctx1.save() // Sauvegarde l'atat

  ctx1.fillStyle = 'blue'
  ctx1.fillRect(240, 30, 30, 30)
  ctx1.save() // Sauvegarde l'état

  ctx1.fillStyle = 'yellow'
  ctx1.fillRect(280, 30, 30, 30)

  ctx1.restore() // restaure le dernier état sauvegardé et efface la sauvegarde
  ctx1.fillRect(320, 30, 30, 30)

  ctx1.restore() // restaure le premier état sauvegardé et efface la sauvegarde
  ctx1.fillRect(360, 30, 30, 30)
} else {
  // code pour les anciens navigateurs
}

console.log('-----------------------------------------------')

// Exemple 2
const canvas2 = document.getElementById('canvas2')
let ctx2
if (canvas2.getContext) {
  ctx2 = canvas2.getContext('2d')
  ctx2.fillStyle = 'red'
  ctx2.fillRect(230, 15, 50, 50)

  // On déplace le point d'origine du canevas
  ctx2.translate(320, 60)

  ctx2.fillStyle = 'blue'
  ctx2.fillRect(10, 15, 50, 50)
}

console.log('-----------------------------------------------')

// Exemple 3
const canvas3 = document.getElementById('canvas3')
let ctx3

if (canvas3.getContext) {
  ctx3 = canvas3.getContext('2d')
  // Rotation
  ctx3.rotate(Math.PI / 2)
  ctx3.font = '30px Arial'
  ctx3.fillText('Hello world', 15, -290)
}

console.log('-----------------------------------------------')

// Exemple 4
const canvas4 = document.getElementById('canvas4')
let ctx4
if (canvas4.getContext) {
  ctx4 = canvas4.getContext('2d')

  // Déplacement du point d'origine
  ctx4.translate(300, 75)

  // cercle de l'horloge
  ctx4.beginPath()
  ctx4.arc(0, 0, 50, 0, 2 * Math.PI)
  ctx4.stroke()

  // Mise en place des heures
  ctx4.textAlign = 'center'
  ctx4.fillText('12', 0, -40)
  for (let i = 1; i < 12; i++) {
    ctx4.rotate(Math.PI / 6)
    ctx4.fillText(`${i}`, 0, -40)
  }
}

console.log('-----------------------------------------------')

// Exemple 5
const canvas5 = document.getElementById('canvas5');
let ctx5;
if (canvas5.getContext) {
  ctx5 = canvas5.getContext('2d') ;
  ctx5.fillStyle = 'red'
  ctx5.fillRect(200, 30, 30, 30)
  ctx5.save()

  ctx5.fillStyle = 'blue'
  ctx5.transform(1, 0, 0, 1, 40, 0) // déplace de 40px sur l'axe des x
  ctx5.fillRect(200, 30, 30, 30)
  ctx5.save()

  ctx5.fillStyle = 'yellow'
  ctx5.transform(1, 0, 0, 1, 40, 0) // déplace de 40px sur l'axe des x
  ctx5.fillRect(200, 30, 30, 30)

  ctx5.restore()
  ctx5.transform(1, 0, 0, 1, 80, 0) // déplace de 80px sur l'axe des x à partir du dernier état sauvegardé
  ctx5.fillRect(200, 30, 30, 30)

  ctx5.restore()
  ctx5.transform(1, 0, 0, 1, 160, 0) // déplace de 160px sur l'axe des x à partir du premier état sauvegardé
  ctx5.fillRect(200, 30, 30, 30)

} else {
  // code pour les anciens navigateurs
}

console.log('-----------------------------------------------')

// Exemple 6

const canvas6 = document.getElementById('canvas6')
let ctx6
if (canvas6.getContext) {
  ctx6 = canvas6.getContext('2d')

  ctx6.fillStyle = 'lightblue'
  ctx6.fillRect(150, 120, 100, 100)

  ctx6.translate(100, 0) // Déplace les élément déclarer ci dessous 

  ctx6.fillStyle = 'lightpink'
  ctx6.fillRect(150, 230, 100, 100)

  ctx6.fillStyle = 'lightgreen'
  ctx6.fillRect(150, 340, 100, 100)

  ctx6.rotate(180 * Math.PI / 420)
  ctx6.fillRect(300, 10, 100, 100)
}
