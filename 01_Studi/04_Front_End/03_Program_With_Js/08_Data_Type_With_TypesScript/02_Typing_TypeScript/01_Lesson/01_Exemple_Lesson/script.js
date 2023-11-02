// Exemple 1
/*
nom = "Orange",
nom = 17
console.log(nom); // 17
*/

console.log("----------------------------------------");

// Exemple 2
/*
let fruit : string = "Orange";
fruit = "Cerise";
fruit = 14; // On a une erreur de type qui dit (Type 'number' is not assignable to type 'string')
let age : number = 30;
age = "Abricot"; //On a une erreur de type qui dit(Type 'string' is not assignable to type 'number')
*/

console.log("----------------------------------------");

// Exemple 3
// Typage dynamique
/*
let fruit1 = {
      naame : 'Orange', // Faute de frappe non détectée
}
let fruit2 = {
      name : 'Cerise',
}
console.log(fruit1.name); // Pas de message d’erreur
console.log(fruit2.name);
*/

// Typage statique
/*
let fruit1 = {
      naame : 'Orange', // Faute de frappe détectée
}
let fruit2 = {
      name : 'Cerise',
}
console.log(fruit1.name); // Message d’erreur : Propriété name n’existe pas dans l’objet fruit1
console.log(fruit2.name);
*/

console.log("----------------------------------------");

// Exemple 4
/*
 let x = 10; // la variable x est de type number
console.log(x); // 10
console.log(typeof x); // number
*/

/*
 let x = 10;
x = "S10"; // la variable x est de type string
console.log(x); // S10
console.log(typeof x); // string
*/

/*
let stagiaire = {
  nom : "Lola",
  age : 25
};
console.log(stagiaire.nom); // Lola
console.log(stagiaire.age); // 25
stagiaire.adresse = "12 Avenue de la Victoire";
console.log(stagiaire.adresse); // 12 Avenue de la Victoire
*/

console.log("----------------------------------------");

// Exemple 5 de la vidéo

console.log("Déclaration et initialisation des variables : ");
let x = 15;
console.log(typeof(x))

console.log("Affectation d'une autre valeur : ")
x = "Salut"
console.log(typeof(x))

console.log("----------------------------------------");

// Exemple 6
/*

*/

console.log("----------------------------------------");

// Exemple 7
/*

*/

console.log("----------------------------------------");
