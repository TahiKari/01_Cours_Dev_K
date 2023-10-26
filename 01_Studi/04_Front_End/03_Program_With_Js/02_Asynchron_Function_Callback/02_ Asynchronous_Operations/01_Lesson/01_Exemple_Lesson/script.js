// Exemple 1
/*
let username = "";

//setTimeout qui exécute une fonction anonyme après 1 seconde en asynchrone

window.setTimeout(() => {
  username = "PeterParker"
}, 1000);

console.log('Bonjour ' + username); //affiche 'Bonjour', car exécuté en synchrone, directement après, username n’ayant pas encore été définie sur "PeterParker"

window.setTimeout(() => {
  console.log('Bonjour ' + username); //affiche 'Bonjour PeterParker' car exécuté en asynchrone 1 seconde après la fonction du setTimeout précédent
}, 2000);
*/

console.log('----------------------------------------')

// Exemple 2
/*
async function maFonctionAsynchrone() {
  // Code asynchrone ici
}
*/

console.log('----------------------------------------')

// Exemple 3
/*
async function maFonctionAsynchrone() {
  await maFonctionRetournantUnePromesse(); //nous attendons la résolution de la fonction asynchrone maFonctionRetournantUnePromesse()
}
*/

console.log('----------------------------------------')

// Exemple 4
/*
let username = "";

function wait(fonction, millisecondes) {
  return new Promise((resolve) => {
    setTimeout(() => {
      fonction();
      resolve()
    }, millisecondes);
  })
}


async function affUsername() {
  wait(() => {username="PeterParker"}, 2000);
  console.log('Bonjour ' + username);
}

console.log("Connexion...");

affUsername();
*/

/*
let username = "";

function wait(fonction, millisecondes) {
  return new Promise((resolve) => {
    setTimeout(() => {
      fonction();
      resolve()
    }, millisecondes);
  })
}


async function affUsername() {
  await wait(() => {username="PeterParker"}, 2000);
  console.log('Bonjour ' + username);
}

console.log("Connexion...");

affUsername();
*/

/*
let username = "";

function wait(fonction, millisecondes) {
  return new Promise((resolve) => {
    setTimeout(() => {
      fonction();
      resolve()
    }, millisecondes);
  })
}


async function affUsername() {
  await wait(() => {username="PeterParker"}, 2000);
  console.log('Bonjour ' + username);
}

console.log("Connexion...");

affUsername();

console.log("Connexion de l’utilisateur");
*/

console.log('----------------------------------------')

// Exemple 5

function wait() {
    return new Promise((resolve) => {
        window.setTimeout(resolve, 2000)
    })
}

async function affMessage() {
    await wait()
    console.log('message')
}

affMessage()