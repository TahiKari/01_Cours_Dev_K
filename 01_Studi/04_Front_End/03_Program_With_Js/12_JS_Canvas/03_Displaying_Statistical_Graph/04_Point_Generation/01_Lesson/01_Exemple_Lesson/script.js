// Exemple cours pécédent
const canvasElement = document.getElementById('graph')
const ctx = canvasElement.getContext('2d')

const fillTextVertically = (text, x, y) => {
  const lineHeight = 10
  y = y - (lineHeight * text.length) / 2

  ctx.textAlign = 'center'
  for (var i = 0; i < text.length; i += 1) {
    ctx.fillText(text[i], x, y + i * lineHeight)
  }
}
const createAxeX = (marks, scale, unit, label) => {
  const distance = (ctx.canvas.width - 100) / marks
  ctx.beginPath()
  ctx.moveTo(50, ctx.canvas.height - 50)
  ctx.lineTo(ctx.canvas.width - 50, ctx.canvas.height - 50)
  ctx.stroke()

  if (label) {
    ctx.textAlign = 'center'
    ctx.fillText(label, ctx.canvas.width / 2, ctx.canvas.height - 10)
  }

  for (var i = 0; i <= marks; i += 1) {
    ctx.beginPath()
    ctx.moveTo(50 + distance * i, ctx.canvas.height - 50)
    ctx.lineTo(50 + distance * i, ctx.canvas.height - 45)
    ctx.stroke()

    ctx.textAling = 'center'
    if (unit)
      ctx.fillText(i * scale + unit, 50 + distance * i, ctx.canvas.height - 35)
    else ctx.fillText(i * scale, 50 + distance * i, ctx.canvas.height - 35)
  }
}

const createAxeY = (marks, scale, unit, label) => {
  const distance = (ctx.canvas.height - 100) / marks
  ctx.beginPath()
  ctx.moveTo(50, 50)
  ctx.lineTo(50, ctx.canvas.height - 50)
  ctx.stroke()

  if (label) {
    ctx.textAlign = 'center'
    fillTextVertically(label, 10, ctx.canvas.height / 2)
  }

  for (var i = 0; i <= marks; i += 1) {
    ctx.beginPath()
    ctx.moveTo(50, ctx.canvas.height - 50 - i * distance)
    ctx.lineTo(45, ctx.canvas.height - 50 - i * distance)
    ctx.stroke()

    ctx.textAling = 'center'
    if (unit)
      ctx.fillText(i * scale + unit, 35, ctx.canvas.height - 50 - i * distance)
    else ctx.fillText(i * scale, 35, ctx.canvas.height - 50 - i * distance)
  }
}

// Exemple 1
const generatePoints = (size, x_min, x_max, y_min, y_max, color) => {
  const points = []

  for (var i = 0; i < size; i += 1) {
    points.push({
      x: Math.random() * (x_max - x_min) + x_min,
      y: Math.random() * (y_max - y_min) + y_min,
      color: color
    })
  }
  return points
}

createAxeX(10, 100, '$', 'Income')
createAxeY(10, 10, '%', 'Happiness')

const points = generatePoints(50, 0, 1000, 50, 100, "red")

console.log(points)

