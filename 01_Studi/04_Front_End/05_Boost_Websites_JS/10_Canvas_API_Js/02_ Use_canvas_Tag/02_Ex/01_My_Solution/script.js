// Ma solution
// déclaration du canvas
const canvas = document.getElementById('redSquare')

let ctx
if (canvas.getContext) {
  ctx = canvas.getContext('2d')
  ctx.fillStyle = 'red'
  ctx.fillRect(0, 0, 150, 150)
} else {
  console.log('canevas non supporté')
}
ctx.fillStyle = 'red'
ctx.fillRect(0, 0, 150, 150)
