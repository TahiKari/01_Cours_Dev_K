// On déclare la fonction ici
function factorielle(nombre)
{
  let produit = 1;6,24,120
  for (let i = 1; i <= nombre; i++) {2,3,4,5
    produit *= i;
  }

  if (produit > 100) {
    console.log('Superieur');
  } else {
    console.log('Inferieur');
  }
}

// On appelle la fonction en lui donnant le paramètre 5
factorielle(5);