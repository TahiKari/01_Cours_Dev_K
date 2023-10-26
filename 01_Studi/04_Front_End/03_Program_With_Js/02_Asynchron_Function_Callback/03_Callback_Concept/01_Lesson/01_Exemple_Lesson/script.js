// Exemple 1
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


async function affUsername(callback) {
  await wait(() => {username="PeterParker"}, 2000);
  callback();
}

console.log("Connexion...");

affUsername(() => {console.log('Bonjour ' + username)});

console.log("Connexion de l’utilisateur");
*/

/*
let num1 = 10;
let num2 = 20;

function wait(fonction, millisecondes) {
  return new Promise((resolve) => {
    setTimeout(() => {
      fonction();
      resolve()
    }, millisecondes);
  })
}

async function calcul(callback) {
  await wait(() => { num1 *= 2 }, 2000);
  await wait(() => { num2 += 5 }, 1000);
  callback();
}

console.log("Début du calcul...");

function affResultat() {
  console.log(`Résultat : ${num1 + num2}`);
}

calcul(affResultat);

console.log("Fin du calcul.");
*/

console.log("----------------------------------------");

// Exemple 2 (en vidéo)
/*
let username = ""

function wait(fonction, millisecondes) {
    return new Promise((resolve) => {
        setTimeout(() => {
            fonction()
            resolve()
        }, millisecondes)
    })
}

async function affUsername(callback) {
    await wait(() => {
        username = "PeterParker"
    }, 2000)
    callback()
}
affUsername(() => {
    console.log('Bonjour' + username)
})
console.log("Connexion de l'utilisateur")
*/

console.log("----------------------------------------");

// Exemple 3 (1ère code en vidéo)
const apiKey = "d408b2585e4efe44f7725a1691a98ff2";
async function recupDonnees(city, callback) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metrics`
    );
    const data = await response.json();
    callback(data)
  } catch {
    console.log("error");
  }
}

function affTemp(dt) {
    console.log(dt)
}

recupDonnees("Hyères", affTemp);
recupDonnees("Toulon", affTemp);
recupDonnees("Marseille", affTemp);
recupDonnees("Paris", affTemp);

console.log("----------------------------------------");

// Exemple 4
/*

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
