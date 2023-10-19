// Ma solution

const canvas = document.getElementById('target')
let ctx
if (canvas.getContext) {
  ctx = canvas.getContext('2d')
  let size = 196 / 2
  for (let cercle = 0; cercle < 8; cercle++) {
    ctx.beginPath()
    ctx.arc(98, 98, size - cercle * 14, 0, Math.PI * 2)
    ctx.stroke()
    switch (cercle) {
      case 1:
        ctx.fillStyle = 'blue'
        ctx.fill()
        break
      case 3:
        ctx.fillStyle = 'red'
        ctx.fill()
        break
      case 5:
        ctx.fillStyle = 'yellow'
        ctx.fill()
        break
    }
  }
} else {
  // code pour les anciens navigateurs
}
