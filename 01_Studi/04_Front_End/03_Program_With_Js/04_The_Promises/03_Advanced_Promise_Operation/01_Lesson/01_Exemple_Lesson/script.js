// Exemple 1
/*
myPromise
  .then(result => {
    // Code à exécuter après la résolution de la première promesse
    return new Promise((resolve, reject) => {
      // Code asynchrone
    });
  })
  .then(result => {
    // Code à exécuter après la résolution de la deuxième promesse
  })
  .catch(error => {
    // Code à exécuter en cas d'erreur
  });

const { setTimeout } = require("timers/promises");
*/

// Exemple de la vidéo
/*
const maPromesse = new Promise((resolve, reject) => {
  let isOk = true;

  setTimeout(() => {
    resolve("Nous avon attendu 2 secondes");
  }, 1500);
});

const deuxiemePromesse = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Nous avons attendu 3 seconde (4,5 seconde au total)");
  }, 3000);
});

maPromesse
  .then((resultat) => {
    // Que faire en cas de réussite
    // Ce console.log va affiché "Nous avons attendu 2 secondes"
    console.log(resultat);
    return deuxiemePromesse
  })
  .then(result => {
    // Affiche "Nous avons attendu 3 seconde (4,5 seconde au total)"
    console.log(result)
  })
  .catch((erreur) => {
    // Que faire en cas d'échec
    console.log(erreur);
  })
  .finally(() => {
    // Que faire après le succès ou l'échec
    console.log("Deux promesse terminées");
  });
*/

console.log("----------------------------------------");

// Exemple 2
/*
const promise1 = new Promise((resolve, reject) => {
  // Code asynchrone
});

const promise2 = new Promise((resolve, reject) => {
  // Code asynchrone
});

Promise.all([promise1, promise2])
  .then((results) => {
    // Code à exécuter après la résolution de toutes les promesses
  })
  .catch((error) => {
    // Code à exécuter en cas d'erreur
  });
*/

/*
const myFirstPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Nous avons attendu 1,5 secondes");
  }, 1500);
});

const mySecondPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Nous avons attendu 3 secondes");
  }, 3000);
});

Promise.all([myFirstPromise, mySecondPromise]).then((results) => {
  console.log(results);
  results.forEach(results => {
    console.log('Résultat de la promesse : ' + results)
  })
});
*/

console.log("----------------------------------------");

// Exemple 3
/*
Promise.race([promise1, promise2])
  .then(result => {
    // Code à exécuter après la résolution de la première promesse
  })
  .catch(error => {
    // Code à exécuter en cas d'erreur
  });
*/

console.log("----------------------------------------");

// Exemple 4
/*
const promises = [
  Promise.reject('error 1'),
  Promise.resolve('success 1'),
  Promise.reject('error 2'),
  Promise.resolve('success 2')
];

Promise.any(promises)
  .then(result => {
    console.log(result); // 'success 1'
  })
  .catch(error => {
    console.log(error); // une exception ne sera pas lancée ici, car au moins une promesse a été résolue
  });
*/

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
