// Exemple 1
/*
// Création de l'événement personnalisé
const monEvenement = new CustomEvent('monEvenement');

// Ajout d'un écouteur d'événement pour l'événement personnalisé
document.addEventListener('monEvenement', () => {
  console.log('L\'événement personnalisé a été déclenché !');
});

// Déclenchement de l'événement personnalisé
document.dispatchEvent(monEvenement);
*/

console.log("----------------------------------------");

// Exemple 2
/*
// Création de l'événement personnalisé avec des données
const monEvenement = new CustomEvent('monEvenement', {
  detail: {
    message: 'Bonjour tout le monde !'
  }
});

// Ajout d'un écouteur d'événement pour l'événement personnalisé avec des données
document.addEventListener('monEvenement', (event) => {
  console.log(`Message reçu : ${event.detail.message}`);
});

// Déclenchement de l'événement personnalisé avec des données
document.dispatchEvent(monEvenement);
*/

console.log("----------------------------------------");

// Exemple 3
/*
<button onclick=“maFonction()“>cliquez ici</button>
*/