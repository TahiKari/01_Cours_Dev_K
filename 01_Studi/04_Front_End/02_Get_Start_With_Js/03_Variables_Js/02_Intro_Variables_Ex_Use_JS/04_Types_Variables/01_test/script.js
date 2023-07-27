// Utilisation de 'var'

/*// Déclaration et initialisation d'une variable avec 'var'
var age = 25;

// Réaffectation d'une nouvelle valeur à la variable
age = 26;
console.log(age); // Affiche "26"*/

console.log('----------------------------------------');

/*function testFunction() {
  if (false) {
     var testVariable = "Hello world";
  }
  console.log(testVariable);
}

testFunction(); // Résultat : "undefined"*/

console.log('----------------------------------------');

/*if (true) {
  var prenom = "Alice";
}
console.log(prenom); // Affiche "Alice" même si la variable est déclarée dans le bloc if*/

console.log('----------------------------------------');

/*console.log(monNom); // Affiche "undefined" au lieu de générer une erreur
var monNom = "Alice";*/

console.log('----------------------------------------');

// Utilisation de 'let'

/*// Déclaration et initialisation d'une variable avec 'let'
let age = 25;

// Réaffectation d'une nouvelle valeur à la variable
age = 26;
console.log(age); // Affiche "26"*/

console.log('----------------------------------------');

/*if (true) {
  let prenom = "Alice";
}
console.log(prenom); // Erreur : prenom n'est pas défini à l'extérieur du bloc if*/

console.log('----------------------------------------');

/*console.log(monNom); // Erreur : monNom n'est pas défini
let monNom = "Alice";*/

console.log('----------------------------------------');

// Utilisation de 'const'

/*// Déclaration et initialisation d'une variable avec 'const'
const age = 25;

// Tentative de réaffectation d'une nouvelle valeur à la variable
age = 26; // Erreur : tentative de réaffecter une valeur à une constante*/

console.log('----------------------------------------');

/*if (true) {
  const prenom = "Alice";
}
console.log(prenom); // Erreur : prenom n'est pas défini à l'extérieur du bloc if*/

console.log('----------------------------------------');

/*console.log(monNom); // Erreur : monNom n'est pas défini
const monNom = "Alice";*/