// Exemple 1
/*
// Version ES5
function Voiture() {
  this.moteur // Accès à la propriété moteur dans la classe
}

let voiture = new Voiture();
voiture.moteur // Accès à la propriété moteur en dehors de la classe
*/

console.log("-----------------------------------------------")

// Exemple 2
/*
class Voiture{
  constructor() {
    this.moteur
  }
}

let voiture = new Voiture();
voiture.moteur // Accès à la propriété moteur en dehors de la classe
*/

console.log("-----------------------------------------------")

// Exemple 3
/*
// Version ES5
function Voiture(moteur, roues, carroserie) {
  this.moteur = moteur
  this.roues = roues
  this.carroserie = carroserie
  this.volant = 'sport'
}

let voiture = new Voiture('1.6L', 4, 'Berline')
*/

console.log("-----------------------------------------------")

// Exemple 4
/*
// Version ES6
class Voiture{
  constructor(moteur, roues, carroserie) {
    this.moteur = moteur
    this.roues = roues
    this.carroserie = carroserie
    this.volant = 'sport'
  }
}

let voiture = new Voiture('1.8L', 4, 'Break')
*/

console.log("-----------------------------------------------")

// Exemple 5
/*
function Voiture(moteur, roues, carroserie) {
  this.moteur = moteur
  this.roues = roues
  this.carroserie = carroserie
  this.vitesse = 0

  // la fonction affiche() est rattachée à l’objet voiture 
	// grâce au mot-clé this.
  this.affiche = function() {
    console.log(this.moteur,this.roues, this.carroserie, this.volant)
  }
}

// La propriété volant est partagée entre tous les objets Voiture.
Voiture.prototype.volant = 'Sport'

let voiture1 = new Voiture('1.6L', 4, 'Berline')
let voiture2 = new Voiture('1.8L', 4, 'Break')
voiture1.affiche() // 1.6L 4 Berline Sport
voiture2.affiche() // 1.8L 4 Break Sport

*/

console.log("-----------------------------------------------")