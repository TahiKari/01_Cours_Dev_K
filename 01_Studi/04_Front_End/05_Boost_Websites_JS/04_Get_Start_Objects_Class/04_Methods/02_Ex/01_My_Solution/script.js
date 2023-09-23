// Ma solution
// Version ES6
class Personne {
  constructor (nom, prenom, age, sexe, adresse) {
    this.nom = nom
    this.prenom = prenom
    this.age = age
    this.sexe = sexe
    this.adresse = adresse
  }

  identite () {
    let identite = `${this.prenom.substring(0, 1)}. ${this.nom}`
    console.log(identite)
  }

  gender () {
    if (this.sexe === 'Mr') {
      console.log(`Monsieur ${this.nom}`)
    } else {
      console.log(`Madame ${this.nom}`)
    }
  }
}

Personne.prototype.changeAge = function (age) {
  this.age = age
  console.log(`${this.prenom} a ${this.age} ans`)
}

let personne1 = new Personne('Doe', 'John', 31, 'M', 'Rue du JavaScript')
let personne2 = new Personne(
  'Doe',
  'Ann',
  28,
  'F',
  'Avenue des classes et objets'
)

personne1.identite()
personne2.identite()
console.log('-----------------------------------')
personne1.gender()
personne2.gender()
console.log('-----------------------------------')
personne1.changeAge(41)
