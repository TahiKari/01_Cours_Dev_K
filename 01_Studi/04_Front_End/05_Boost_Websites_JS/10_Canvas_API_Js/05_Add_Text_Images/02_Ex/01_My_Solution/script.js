// Ma solution
const canvas = document.getElementById('badge');
  let sizeCanvas = canvas.getAttribute('width');
  sizeCanvas === '0' || sizeCanvas === null ? sizeCanvas = 150 : sizeCanvas
  canvas.setAttribute('height', sizeCanvas)
  canvas.setAttribute('width', sizeCanvas)
  let ctx;
  if (canvas.getContext) {
    ctx = canvas.getContext('2d') ;
    
    // création du badge avec texte
    ctx.fillStyle = 'grey'
    ctx.beginPath();
    ctx.arc(sizeCanvas/2, sizeCanvas/2, sizeCanvas/2, 0, 2 * Math.PI);
    ctx.fill();

    const sizeText = sizeCanvas / 2
    ctx.fillStyle = 'orange'
    ctx.textAlign = 'center'
    ctx.textBaseline = 'middle';
    ctx.font = `${sizeText}px Arial`;
    // On ajuste la position du texte par rapport à la taille du canvas
    ctx.fillText('JD', sizeCanvas/2, sizeCanvas/2);
}
