function estPair(nombre) {
  if (nombre % 2 === 0) {
    console.log(nombre + ' est pair');
  } else {
    console.log(nombre + ' est impair');
  }
}

let cpt = 1;

while (cpt <= 1000) {
  estPair(cpt);
  cpt = cpt + 1;
}