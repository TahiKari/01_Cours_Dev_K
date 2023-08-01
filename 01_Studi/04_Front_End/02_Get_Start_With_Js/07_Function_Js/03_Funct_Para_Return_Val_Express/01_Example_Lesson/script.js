// Exemple 1

/*
let nombre = 100;

function calcDouble() {
  let double = nombre * 2;
  console.log("Le double du nombre " + nombre + " est " + double);
}

calcDouble();

nombre = 40;

calcDouble();
*/

console.log("------------------------------------------");

// Exemple 2

/*
function calcDouble(?) {
  let double = ? * 2;
  console.log("Le double du nombre " + ? + " est " + double);
}

calcDouble(?);

calcDouble(?);
*/

console.log("------------------------------------------");

// Exemple 3

/*
function calcDouble(nb) {
  let double = nb * 2;
  console.log("Le double du nombre " + nb + " est " + double);
}

calcDouble(100); //Le double du nombre 100 est 200

calcDouble(40); //Le double du nombre 40 est 80
*/

console.log("------------------------------------------");

// Exemple 4

/*
function perimetreRectangle(largeur, longueur) {
  let perimetre = 2 * largeur + 2 * longueur;
  console.log("Le perimetre du rectangle est de " + perimetre + " cm2");
}
*/

console.log("------------------------------------------");

// Exemple 5

/*
function perimetreRectangle(largeur, longueur) {
  let perimetre = 2 * largeur + 2 * longueur;
  console.log("Le perimetre du rectangle est de " + perimetre + " cm2");
}

perimetreRectangle(4, 5);

perimetreRectangle(2, 4);

perimetreRectangle(1, 2);

perimetreRectangle(18, 20);
*/

console.log("------------------------------------------");

// Exemple 6

/*
function perimetreRectangle(largeur, longueur) {
  let perimetre = 2 * largeur + 2 * longueur;
  console.log("Le perimetre du rectangle est de " + perimetre + " cm2");
}

console.log (perimetreRectangle(4, 5));
*/

console.log("------------------------------------------");

// Exemple 7

/*
function perimetreRectangle(largeur, longueur) {
  let perimetre = 2 * largeur + 2 * longueur;
  return perimetre;
}

console.log (perimetreRectangle(4, 5));
*/

console.log("------------------------------------------");

// Exemple 8

/*
function perimetreRectangle(largeur, longueur) {
  let perimetre = 2 * largeur + 2 * longueur;
  return perimetre;
}

console.log (perimetreRectangle(4, 5)); //18

console.log (perimetreRectangle(8, 5)); //26

console.log (perimetreRectangle(4.4, 1.67));//12.14

console.log (perimetreRectangle(64, 45)); //218
*/

console.log("------------------------------------------");

// Exemple 9

// 2 * 2

console.log("------------------------------------------");

// Exemple 10

// let a = 2 * 2 ; 

console.log("------------------------------------------");

// Exemple 11

// let racine = function racineCarree (nombre) {return Math.sqrt(nombre);};

console.log("------------------------------------------");

// Exemple 12

// let racine = function (nombre) {return Math.sqrt(nombre);};

console.log("------------------------------------------");

// Exemple 13

// console.log(racine(9));

let maFonction = function calcHypotenuse (a , b) {
  let hypotenuse = Math.sqrt((a ** 2) + (b ** 2));
  return hypotenuse;
}

console.log("Hypotenuse : " + maFonction(10, 11)); 