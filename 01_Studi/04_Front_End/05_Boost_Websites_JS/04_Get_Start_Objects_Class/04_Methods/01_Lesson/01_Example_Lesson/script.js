// Exemple 1
/*
// Version ES5
function Voiture(moteur, roues, carroserie) {
  this.moteur = moteur
  this.roues = roues
  this.carroserie = carroserie
  this.volant = 'sport'
  this.vitesse = 0

  // Méthode permettant à une voiture de rouler
  this.accelere = function(vitesse) {
    this.vitesse += vitesse
    console.log(`Nous roulons à ${this.vitesse} Km/h.`)
  }

  // Méthode permettant d'afficher les caractéristiques d'une voiture
  this.affiche = function() {
    console.log(this.moteur,this.roues, this.carroserie, this.volant)
  }
}


let voiture = new Voiture('1.6L', 4, 'Berline')
voiture.affiche()
voiture.accelere(50)
*/
/*
// Version ES6
class Voiture{
  constructor(moteur, roues, carroserie) {
    this.moteur = moteur
    this.roues = roues
    this.carroserie = carroserie
    this.volant = 'sport'
    this.vitesse = 0
  }

  accelere(vitesse) {
    this.vitesse += vitesse
    console.log(`Nous roulons à ${this.vitesse} Km/h.`)
  }

  affiche() {
    console.log(this.moteur,this.roues, this.carroserie, this.volant)
  }
}

let voiture = new Voiture('1.8L', 4, 'Break')
voiture.affiche()
voiture.accelere(80)
*/

console.log('-----------------------------------------------')

// Exemple 2
/*
// Objet voiture1
{
  moteur: '1.6L',
  roues: 4,
  carroserie: 'Berline',
  volant: 'Sport',
  vitesse: 0,

  accelere: function(vitesse) {
    this.vitesse = vitesse
    console.log(`Nous roulons à ${this.vitesse} Km/h.`)
  }
}

//Objet voiture2
{
  moteur: '1.8L',
  roues: 4,
  carroserie: 'Break',
  volant: 'Sport',
  vitesse: 0,

  accelere: function(vitesse) {
    this.vitesse = vitesse
    console.log(`Nous roulons à ${this.vitesse} Km/h.`)
  }
}
*/

console.log('-----------------------------------------------')

// Exemple 3
/*
Voiture.prototype.accelere = function(vitesse) {
  this.vitesse = vitesse
  console.log(`Nous roulons à ${this.vitesse} Km/h.`)
}
*/