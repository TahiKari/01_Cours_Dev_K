// Ma solution 1
/*
class Rectangle {
  constructor (longueur, largeur) {
    this.longueur = longueur
    this.largeur = largeur
  }

  calculerPerimetre () {
    return 2 * (this.longueur + this.largeur)
  }
}
const monRectangle = new Rectangle(10, 8)
console.log(monRectangle.calculerPerimetre())
*/

console.log('------------------------------------')

// Ma solution 2
/*
class Cercle {
  constructor(rayon) {
    this.rayon = rayon;
  }

  aire() {
    return (Math.PI) * (this.rayon * this.rayon);
  }
}

cercle = new Cercle(4);

console.log(cercle.aire());
*/

console.log('------------------------------------')

// Ma solution 3
/*
class Cercle {
  constructor (rayon) {
    this.rayon = rayon
  }

  aire () {
    return Math.PI ** 2 * this.rayon
  }

  perimetre () {
    return Math.PI * 2 * this.rayon
  }
}

const cercle = new Cercle(4)

console.log(cercle.aire())
console.log(cercle.perimetre())
*/

console.log('------------------------------------')

// Ma solution 4
/*
class Produit {
  constructor (marque) {
    this._marque = marque
  }

  get marque () {
    return this._marque
  }
}

const produit = new Produit('HP')

console.log(produit.marque)
*/

console.log('------------------------------------')

// Ma solution 5

class Produit {
  constructor (marque) {
    this._marque = marque
  }

  get marque () {
    return this._marque
  }

  set marque(value) {
    this._marque = value;
  }
}

produit = new Produit('HP')

produit.marque = 'Acer'

console.log(produit.marque)
