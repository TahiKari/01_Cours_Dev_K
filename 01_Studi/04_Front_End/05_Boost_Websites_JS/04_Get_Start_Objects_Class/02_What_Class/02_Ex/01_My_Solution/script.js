// Ma solution

// Version ES5 class Personne

function Personne (nom, prenom, age, sexe, adresse) {
  this.nom = nom
  this.prenom = prenom
  this.age = age
  this.sexe = sexe
  this.adresse = adresse
}

// Version ES6 class Humain

class Humain {
  constructor (nom, prenom, age, sexe, adresse) {
    this.nom = nom
    this.prenom = prenom
    this.age = age
    this.sexe = sexe
    this.adresse = adresse
  }
}

let personne1 = new Personne()
console.log(personne1)
let personne2 = new Humain()
console.log(personne2)
