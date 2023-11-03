"use strict";
// Exemple 1
// Les fonctions
/*
function add(a: number, b: number): number {
  return a + b;
}
let result = add(4, 3); // result vaut 7
*/
console.log('----------------------------------------');
// Exemple 2
// Paramètres optionnels
/*
function greet(name?: string) {
  if (name) {
    console.log(`Bonjour, ${name} !`);
  } else {
    console.log("Bonjour !");
  }}
  greet(); // affiche "Bonjour !"
greet("Alice"); // affiche "Bonjour, Alice !"
*/
console.log('----------------------------------------');
// Exemple 3
/*
// Paramètres par défaut
function greet(name: string = "Monde") {
  console.log(`Bonjour, ${name} !`);
}
greet(); // affiche "Bonjour, Monde !"
greet("Alice"); // affiche "Bonjour, Alice !"
*/
console.log('----------------------------------------');
// Exemple 4
/*
// Fonctions avec des types de retour complexes
// Fonctions renvoyant un tableau
 function getColors(): string[] {
  return ["rouge", "vert", "bleu"];
}
let colors = getColors(); // colors vaut ["rouge", "vert", "bleu"]
*/
console.log('----------------------------------------');
// Exemple 5
/*
// Fonctions renvoyant un objet
function getPerson(): { name: string, age: number } {
  return {
    name: "Alice",
    age: 30
  };
}
let person = getPerson(); // person vaut { name: "Alice", age: 30 }
*/
console.log('----------------------------------------');
// Exemple 6
/*
// Fonctions renvoyant une fonction
function getMultiplier(factor: number): (x: number) => number {
  return function(x: number) {
    return x * factor;
  };
}
let multiplyBy2 = getMultiplier(2); // multiplyBy2 est une fonction qui multiplie par 2
let result = multiplyBy2(3); // result vaut 6
*/
console.log('----------------------------------------');
// Exemple 7
/*
// Fonctions anonymes
let sum = function(a: number, b: number): number {
  return a + b;
};
let result = sum(3, 4); // result vaut 7
*/
console.log('----------------------------------------');
// Exemple 8
/*
// Fonctions fléchées
let sum = (a: number, b: number): number => a + b;
let result = sum(3, 4); // result vaut 7
let double = (x: number) => x * 2;
*/
console.log('----------------------------------------');
// Exemple 9
/*
// Fonctions anonymes et fonctions fléchées
let numbers = [1, 2, 3, 4, 5];
// Utilisation d'une fonction anonyme pour filtrer les nombres pairs
let evenNumbers = numbers.filter(function(n) {
  return n % 2 == 0;
});
// Utilisation d'une fonction fléchée pour calculer le carré de chaque nombre
let squaredNumbers = numbers.map(n => n * n);
console.log(evenNumbers);     // Affiche [2, 4]
console.log(squaredNumbers);  // Affiche [1, 4, 9, 16, 25]
*/
console.log('----------------------------------------');
// Exemple 10
/*
// Fonctions génériques
function inverserTableau<T>(tableau: T[]): T[] {
  return tableau.reverse();
}
const tableau1 = [1, 2, 3, 4, 5]; // Tableau de nombre
const tableau2 = ["a", "b", "c", "d", "e"]; // Tableau de string
console.log(inverserTableau(tableau1)); // [5, 4, 3, 2, 1]
console.log(inverserTableau(tableau2)); // ["e", "d", "c", "b", "a"]
*/
console.log('----------------------------------------');
// Exemple 11 de la vidéo
/*
//Déclaration d'une fonction
function calLongChaine(chaine: string): number {
    return chaine.length
}

// Déclaration d'une fonction anonyme
const add = function (a: number, b: number): number {
    return a + b
}
console.log(add(2, 3))

// Déclaration d'une fonction fléchée
const multip = (a: number, b: number): number => a * b
console.log(multip(2, 3))

// Déclaration paramètre optionnels et paramètres avec valeurs par defauts
function direBonj(nom: string, age?: number, ville = "Paris"): void {
    console.log(`Bonjour, je m'appelle ${nom}.`)
}
// Appel de la fonction
direBonj("Alice")
*/
console.log('----------------------------------------');
// Exemple 12 de la vidéo
// Déclaration et l'appel d'une fonction
/*
// Déclaration d'une fonction
function calLong(chaine: string): number {
    return chaine.length
}

// Appel de la fonction et affectation du résultat à une variable
// Méthode 1
//console.log(calLong("Welcome"))
// Méthode 2
const longueur = calLong("Hi, world!")
console.log(`La longueur de la chaîne est ${longueur}.`)
*/
console.log('----------------------------------------');
// Exemple 13 de la vidéo
// Fonction Anonyme
/*
// déclaration d'une fonction anonyme
const addition = function (a: number, b: number): number {
    return a + b
}

// Appel de la fonction anonyme et affichage du résultat
console.log(`le résultat de l'addition est ${addition(2, 3)}.`)
*/
console.log('----------------------------------------');
// Exemple 14 de la vidéo
// Fonction fléchées
/*
// Déclaration d'une fonction fléchée
const multiplication = (a: number, b: number): number => a * b

// Appel de la fonction fléchée
console.log(`Le résultat de la musltiplication est ${multiplication(3, 7)}`)
*/
console.log('----------------------------------------');
// Exemple 15 de la vidéo
// Paramètres optionnels & paramètres par défauts
// Déclaration de la fonction
function direBonjour(nom, age, ville = "Paris") {
    console.log(`Bonjour, je m'appel ${nom}.`);
    if (age) {
        console.log(`Jai ${age} ans.`);
    }
    else {
        console.log(`Je viens de  ${ville}.`);
    }
}
// Appel de la fonction avec différents arguments
direBonjour("Elon");
direBonjour("Bob", 30);
direBonjour("Xavier");
