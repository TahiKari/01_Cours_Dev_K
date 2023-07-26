// Fonction nommée
console.log(``);

const lower = function(word1) {
  return word1.toLowerCase();
}

console.log('Mot ' + lower('Hello') + ' en minuscule grâce à une fonction nommée');

console.log(`---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----`);

// Fonction anonyme
const upper = (word) => {
  return word.toUpperCase();
}

console.log(`Mot ${upper('Hello')} en majuscule grâce a une fonction anonyme`);

const motEnMajuscules = mot => mot.toUpperCase();

const resultat = motEnMajuscules("exemple");
console.log(resultat); // Affiche "EXEMPLE"

const resultat2 = motEnMajuscules("bonjour");
console.log(resultat2); // Affiche "BONJOUR"

const resultat3 = motEnMajuscules("chat");
console.log(resultat3); // Affiche "CHAT"
