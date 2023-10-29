// Exemple 1
/*
const maPromesse = new Promise((resolve, reject) => {
  // Traitement asynchrone
  // Si le traitement réussit, on appelle resolve() avec la valeur de retour
  // Si le traitement échoue, on appelle reject() avec l'erreur
});

const { promises } = require("dns");
*/

console.log("----------------------------------------");

// Exemple 2
/*
maPromesse.then(resultat => {
  // Traitement à effectuer avec la valeur de retour de la promesse
}).catch(erreur => {
  // Traitement à effectuer en cas d'erreur
});
*/

console.log("----------------------------------------");

// Exemple 3
/*
const maPromesse = new Promise((resolve, reject) => {
  // On simule une opération asynchrone qui prend du temps, grâce au setTimeout qui va attendre ici 2000ms ou 2 secondes
  setTimeout(() => {
   //pour l’exemple, on génère un nombre entre 0 et 1
    const alea = Math.random();
   //pour l’exemple, on considère que la promesse réussit si le nombre est plus grand que 0.5
    if (alea > 0.5) {
      // Si l'opération réussit, on appelle resolve() avec une valeur
      resolve("L'opération a réussi !");
    } else {
      // Si l'opération échoue, on appelle reject() avec une erreur
      reject(new Error("L'opération a échoué."));
    }
  }, 2000);
});

maPromesse.then(resultat => {
  // Traitement à effectuer avec la valeur de retour de la promesse
  console.log(resultat);
  //Cela affichera L’operation a réussi
}).catch(erreur => {
  // Traitement à effectuer en cas d'erreur
  console.error(erreur);
}).finally(() => {
  // Traitement à effectuer une fois que la promesse est terminée, que ce soit avec succès ou en erreur
  console.log("La promesse est terminée.");
});
*/

console.log("----------------------------------------");

// Exemple 4 de la vidéo
const maPromesse = new Promise((resolve, reject) => {
  // Ici sera le code asynchrone de ma promesse
  let isOK = true;

  setTimeout(() => {
    if (isOK) {
      resolve("La promesse a bien fonctionné");
    } else {
      reject("La promesse n'a pas fonctione");
    }
  }, 2000);
});

maPromesse
  .then((resultat) => {
    // Que faire en cas de réussite
    console.log(resultat);
  })
  .catch((erreur) => {
    // Que faire en cas d'echec
    console.log(erreur);
  })
  .finally(() => {
    // Que en faire en cas de réussite ou d'échec
    console.log("Promesse terminée");
  });

console.log("----------------------------------------");

// Exemple 5
/*

*/

console.log("----------------------------------------");

// Exemple 6
/*

*/

console.log("----------------------------------------");

// Exemple 7
/*

*/

console.log("----------------------------------------");
