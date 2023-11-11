// Exemple 1
/*
try {
  let x = 10;
  let y = x.toUpperCase();
  console.log(y);
} catch (error) {
  console.log("Une erreur s'est produite : " + error.message);
}
*/

console.log('----------------------------------------')

// Exemple 2
/*
function diviser(a, b) {
  if (b === 0) {
    throw new Error("Division par zéro impossible");
  }
  return a / b;
}

try {
  let resultat = diviser(10, 0);
  console.log(resultat);
} catch (error) {
  console.log("Une erreur s'est produite : " + error.message);
}
*/

console.log('----------------------------------------')

// Exemple 3
/*
class AgeInvalideError extends Error {
  constructor(message) {
    super(message);
    this.name = "AgeInvalideError";
    this.date = new Date();
  }
}

function verifierAge(age) {
  if (age < 18) {
    throw new AgeInvalideError("L'âge doit être supérieur ou égal à 18 ans");
  }
  console.log("L'âge est valide");
}

try {
  verifierAge(15);
} catch (error) {
  if (error instanceof AgeInvalideError) {
    console.error(`${error.name} : ${error.message} (${error.date})`);
  } else {
    console.error(`Une erreur s'est produite : ${error.message}`);
  }
}
*/

console.log('----------------------------------------')

// Exemple 4
/*
try {
  let x = 10;
  let y = x.toUpperCase();
  console.log(y);
} catch (error) {
  console.log("Une erreur s'est produite : " + error.message);
} finally {
  console.log("Fin de l'exécution du bloc try...catch.");
}
*/

console.log('----------------------------------------')

// Exemple 5
/*

*/

console.log('----------------------------------------')

// Exemple 6
/*

*/

console.log('----------------------------------------')

// Exemple 7
/*

*/

console.log('----------------------------------------')
