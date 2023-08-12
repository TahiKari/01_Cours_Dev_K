// Exemple 1
/*
let monObjet = new Object();
*/

console.log("--------------------------------------");

// Exemple 2
//let monObjet = {/*définition des propriétés*/} ;

console.log("--------------------------------------");

// Exemple 3
/*
//Nous créons un objet en enveloppant la valeur "undefined"

let monObjet = new Object();

//On crée 2 propriétés dans notre objet

monObjet = {
  nom:"mon objet",
  caracteristiques:"aucune"
};

//Quelques méthodes statiques

console.log(Object.keys(monObjet)); //renvoie les clés des propriétés définies
console.log(Object.values(monObjet)); //renvoie les valeurs des propriétés définies
console.log(Object.entries(monObjet)); //renvoie les paires clés/valeurs des propriétés définies

//Quelques méthodes d'instance

console.log(monObjet.valueOf()); //renvoie la valeur primitive de l'objet, donc l'objet même
console.log(monObjet.toString()); //renvoie une chaîne représentant l'objet
console.log(monObjet.hasOwnProperty("nom")); //renvoie un booléen si l'objet a la propriété passée comme argument. Ne prend pas en compte les propriétés héritées "par défaut" du prototype Object.prototype 
*/

console.log("--------------------------------------");

// Exemple 4
/*
let monObjet = new Boolean(true);
*/

console.log("--------------------------------------");

// Exemple 5
/*
//Début du listing informatique – JavaScript
//Nous créons un Boolean en enveloppant la valeur "true"

let monObjet = new Boolean(true);

//Quelques méthodes d'instance héritées de Boolean.prototype

console.log(monObjet.valueOf()); //renvoie la valeur enveloppée

console.log(monObjet.toString()); // renvoie une chaîne contenant la valeur enveloppée

//Quelques méthodes statiques de Object :

//Ces méthodes renvoient un tableau vide car nous n'avons défini aucune propriété

console.log(Object.keys(monObjet)); //renvoie les clés des propriétés définies

console.log(Object.values(monObjet)); //renvoie les valeurs des propriétés définies

console.log(Object.entries(monObjet)); //renvoie les paires clé/valeur des propriétés définies
*/

console.log("--------------------------------------");

// Exemple 6
/*
let monObjet = new Number(12467);
*/

console.log("--------------------------------------");

// Exemple 7
/*
//Nous créons un Number en enveloppant la valeur "12467"

let monObjet = new Number(12467.28);

//Quelques méthodes statiques

console.log(Number.isInteger(16)); //renvoie un booléen indiquant si le nombre est un entier
console.log(Number.isSafeInteger(121152172716642751675821627)); //renvoie un booléen indiquant si le nombre est un entier représentable de manière safe avec Number
console.log(Number.parseFloat("16278.12")); //convertit une chaîne en nombre à virgule flottante

//Une méthode d'instance

console.log(monObjet.toFixed(1)); //renvoie une chaîne contenant la valeur du nombre arrondi avec un nombre de chiffres décimaux passés comme argument 
*/

console.log("--------------------------------------");

// Exemple 8
/*
let monObjet = new Number(12467.28);

console.log(monObjet.valueOf()); //renvoie la valeur primitive stockée dans l'objet

console.log(monObjet.toString()); //renvoie une chaîne contenant la valeur primitive stockée dans l'objet
*/

console.log("--------------------------------------");

// Exemple 9
/*
let monObjet = new String("chaîne de caractères");
*/

console.log("--------------------------------------");

// Exemple 10
/*
let monObjet = new String("chaîne de caractères"); 

console.log(Object.keys(monObjet));

console.log(Object.values(monObjet)); 
*/

console.log("--------------------------------------");

// Exemple 11
/*
monObjet = new String("chaîne de caractères");

//Un exemple de méthode statique

console.log(String.fromCharCode(67, 72, 65, 73, 78, 69)); //renvoie une chaîne composée des caractères unicode passés comme arguments, dans cet exemple : "CHAINE"

//Quelques méthodes d'instance

console.log(monObjet.charAt(4)); //renvoie le caractère de la chaîne stockée ayant l'index passé comme argument
console.log(monObjet.slice(7, 9)); //renvoie une sous-chaîne de la chaîne d'origine, en utilisant l'index de début et de fin spécifiés
*/

console.log("--------------------------------------");

// Exemple 12
/*
let monObjet = new Array(); //appel du constructeur

let monObjet2 = []; //utilisation de la syntaxe de tableau
*/

console.log("--------------------------------------");

// Exemple 13
/*
let monObjet = new Array(1, 2); //appel du constructeur en créant un tableau avec deux éléments

//Une méthode statique

console.log(Array.from("test")); //renvoie un tableau à partir d'un objet itérable ou d'une chaîne de caractères

//Quelques méthodes d'instance

console.log(monObjet.push(3)); //rajoute un (ou plusieurs) élément à la fin du tableau

console.log(monObjet.pop()); //supprime le dernier élément du tableau

console.log(monObjet.unshift(0)); //ajoute un (ou plusieurs) élément au début du tableau

console.log (monObjet);
*/

console.log("--------------------------------------");

// Exemple 14
/*
let monObjet = new Date(); //date actuelle

let date = new Date('2000-12-18T03:24:00'); //date spécifiée
*/

console.log("--------------------------------------");

// Exemple 15
/*
monObjet = new Date('2000-12-18T03:24:00');

console.log(monObjet.valueOf());

console.log(monObjet.toString());
*/

console.log("--------------------------------------");

// Exemple 16
/*
console.log(Math.sqrt(9)) //renvoie la racine carrée du nombre.

console.log(Math.random()) //renvoie un nombre aléatoire entre 0 et 1

console.log(Math.max(1, 12, 13, 52)) //renvoie le nombre max dans un ensemble de nombres

console.log(Math.min(1, 12, 13, 52)) //renvoie le nombre min dans un ensemble de nombres

console.log(Math.round(26178.516)) //renvoie le nombre arrondi à l'entier le plus proche
*/