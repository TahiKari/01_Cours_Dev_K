// Exemple 1

const canvasElement = document.getElementById('example'); // Récupération de l'élément canvas par son "id, class ou autres"
const ctx = canvasElement.getContext('2d'); // Récupération du contexte c'est à dire le type de l'API

ctx.beginPath(); // Ouverture d'un nouveau chemin
ctx.moveTo(75, 50); // Rajout d'un point positionner en x et y
ctx.lineTo(75, 75); // Créer une ligne en rajoutant un point qui le connectera au précédent point
ctx.moveTo(100, 50); // Rajoute un nouveau qui ne sera pas connecter au précendent point car on comptre créer une ligne en parallèle
ctx.lineTo(100, 75); // Comme on veut faire un triangle on rajoute cette ligne

ctx.moveTo(150, 50); // 
ctx.lineTo(175, 75); // 
ctx.lineTo(125, 75); // 
ctx.stroke(); // Déssine la ligne qui connecte les points autre points
ctx.fill() // Dessine l'interieur du triangle


ctx.closePath(); // Connecte le dernier point avec le dernier point moveTo en date

