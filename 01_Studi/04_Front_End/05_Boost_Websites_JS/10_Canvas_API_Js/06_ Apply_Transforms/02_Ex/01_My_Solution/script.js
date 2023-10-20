// Ma solution

const canvas = document.getElementById('hour')
let ctx
if (canvas.getContext) {
  ctx = canvas.getContext('2d')

  // Déplacement du point d'origine
  ctx.translate(125, 115)

  // cercle de l'horloge
  ctx.beginPath()
  ctx.arc(0, 0, 50, 0, 2 * Math.PI)
  ctx.stroke()

  // Mise en place des heures
  // On donne à la police une taille de 15% par rapport à la taille du rayon de l'horloge donc on multiplie le rayon par 0.15.
  ctx.font = 50 * 0.15 + 'px arial'
  ctx.textBaseline = 'middle'
  ctx.textAlign = 'center'
  for (num = 1; num < 13; num++) {
    ang = (num * Math.PI) / 6
    ctx.rotate(ang)
    ctx.translate(0, -45) // +45 pour revenir au centre
    ctx.rotate(-ang)
    ctx.fillText(num.toString(), 0, 0)
    ctx.rotate(ang)
    ctx.translate(0, 50 * (Math.PI / 3 - 0.15))
    ctx.rotate(-ang)
  }
} else {
  // code ancien navigateur
}
