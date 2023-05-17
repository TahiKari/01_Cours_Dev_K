// Impérative
function factorielle(nombre)
{
let produit = 1;
for (let i = 1; i <= nombre; i++) {
produit *= i;
}
return produit
}

// Fonctionnelle
function factorielle(nombre)
{
  if (nombre === 0) {
    return 1;
  }

  return nombre * factorielle(nombre - 1);
}

console.log(factorielle(5));