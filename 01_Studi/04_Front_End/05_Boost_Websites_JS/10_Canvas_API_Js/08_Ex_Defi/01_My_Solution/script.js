// Ma solution

// fonction qui teste l'image
const checkImageExists = (imageUrl, callBack) => {
  const imageData = new Image();
  imageData.onload = () => {
    callBack(true);
  };
  imageData.onerror = () => {
    callBack(false);
  };
  imageData.src = imageUrl;
}

// fonction de création du badge
const createBadge = (canvas, urlImg = null) => {
  let sizeCanvas = canvas.getAttribute('width');
  sizeCanvas === '0' || sizeCanvas === null ? sizeCanvas = 150 : sizeCanvas
  canvas.setAttribute('height', sizeCanvas)
  canvas.setAttribute('width', sizeCanvas)
  let ctx;
  if (canvas.getContext) {
    ctx = canvas.getContext('2d') ;
    // On verifie si l'image existe
    checkImageExists(urlImg, (imageExit) => {
      if (imageExit) {
        // création du badge avec image
        const img = new Image();
        img.addEventListener('load', () => {
          const newWidth = img.width * sizeCanvas / img.height
          ctx.drawImage(img, 0, 0, newWidth, sizeCanvas);
          ctx.globalCompositeOperation='destination-in';
          ctx.beginPath();
          ctx.arc(sizeCanvas/2, sizeCanvas/2, sizeCanvas/2, 0, 2 * Math.PI);
          ctx.fill();
          ctx.globalCompositeOperation='source-over';
        })
        img.src = urlImg;
      } else {
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
    })
  }
}

const canvas1 = document.getElementById('badgeWithImage');
const img = "https://fotomelia.com/wp-content/uploads/edd/2015/05/main-fleur-paquerette-ciel-bleu-images-photos-gratuites.jpg";
createBadge(canvas1, img);

const canvas2 = document.getElementById('badgeWithText');
createBadge(canvas2);