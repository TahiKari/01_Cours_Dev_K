function pairImpair(nbre) {
  if (nbre % 2 === 0) {
    console.log(nbre + ' est pair');
  } else {
    console.log(nbre + ' est impair');
  }
}

let cpt = 1;

while (cpt <= 100) {
  pairImpair(cpt);
  cpt = cpt + 1;
}

// Définir cpt qui est égal à 1
// Tant que cpt est inferieur à 100
// Appler la function pairImpair
// Ajouter 1 a cpt
// Fin tant que
