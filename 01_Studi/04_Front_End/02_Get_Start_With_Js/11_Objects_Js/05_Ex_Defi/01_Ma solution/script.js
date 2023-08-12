// Ma solution
let produit = new Object()
produit = {
  marque: new String('Apple'),
  modele: new String('IPhone 11'),
  ram: new Number(4),
  stockage: new Number(128),
  prix: new Number(500),

  addPrice: function (montant) {
    return (this.prix += montant)
  },
  moinsPrice: function (montant) {
    return (this.prix -= montant)
  },
  affPrice: function() {
    console.log(this.prix)
  }
}

produit.moinsPrice(40);

produit.addPrice(80);

produit.affPrice();

console.log(produit.marque.valueOf())
console.log(produit.ram.valueOf())
