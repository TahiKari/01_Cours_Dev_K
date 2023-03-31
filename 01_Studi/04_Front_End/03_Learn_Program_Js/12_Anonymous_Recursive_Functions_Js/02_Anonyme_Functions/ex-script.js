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

