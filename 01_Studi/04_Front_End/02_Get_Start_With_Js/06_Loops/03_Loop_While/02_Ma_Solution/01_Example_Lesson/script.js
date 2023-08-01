// Exercice

/*let nombre = 28;
let compteur = 1;

while (nombre * compteur < 200) {
  console.log(nombre * compteur);
  compteur ++;
}*/

console.log('------------------------------------------')

// Exercice

/*let prix = 100
let tabPrix = []

do {
  tabPrix.push(prix)
  prix++
} while (prix > 100 && prix <= 110)

console.log(tabPrix[2])*/

console.log('------------------------------------------')

// Exercice

/*let prix = 101;
let tabPrix = [];

while (prix > 100 && prix <= 110) {
  tabPrix.push(prix);
  if (prix == 108) {
    break;
  }
  prix ++;
}

console.log(tabPrix[8]);*/

console.log('------------------------------------------')

// Exercice

/*let compteur = 0;

let nombres = "";

while (compteur < 20) {
  nombres += compteur + " ";
  compteur++;
}

console.log (nombres);*/

console.log('------------------------------------------')

// Exercice

let nombre = 15;
let cpt = 1;

while (cpt < nombre) {
  if(cpt % 2 == 0) {
    console.log("Multiple de 2");
  } else {
    console.log("Pas de multiple de 2")
  }
  cpt++;
}

