// Exemple 1
/*
monObj.nomPropriete = "valeur"
*/
console.log("--------------------------------------");

// Exemple 2
/*
monObj.nomPropriete = new Object();
*/
console.log("--------------------------------------");

// Exemple 3
/*
let telephone = {

  //propriétés définies sur une valeur primitive
  
  marque: "Apple", 
  ram: 4,
  stockage: 32,

  //propriétés définies sur une méthode

  activateModeAvion: function() {
    console.log("Mode avion activé");
  },

  desactivateModeAvion: function() {
    console.log("Mode avion désactivé");
  }
}
*/
console.log("--------------------------------------");

// Exemple 4
/*
let telephone = {

  //proprietes definies sur une valeur primitive
  
  marque: "Apple", 
  ram: new Number(4),
  stockage: 32,

  //proprietes definies sur une méthode

  activateModeAvion: function() {
    console.log("Mode avion activé");
  },

  desactivateModeAvion: function() {
    console.log("Mode avion désactivé");
  }
}
*/
console.log("--------------------------------------");

// Exemple 5
/*
let nombre = new Number(5216);

//Number = type

//nombre = instance de Number

//Number() = constructeur du type Number
*/
console.log("--------------------------------------");

// Exemple 6
/*
let nombre = new Number(5216);

console.log(Number.MAX_VALUE) //propriété statique

console.log(Number.isInteger(1)) //méthode statique

console.log(nombre.valueOf()) //méthode d'instance
*/