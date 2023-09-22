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
}


let personne = new Personne('Tah', 'kar', 30, 'Mâle', '539 Chemin De Bellevis')
personne.age = 41
personne.adresse = '314 Chemin De Bellevis'
console.log(personne.nom, personne.prenom, personne.age, personne.sexe, personne.adresse)
