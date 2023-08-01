// Exercice 1

const list = [24, 67, 18];

let resultat = "";

for(nb of list) {
  resultat += "Multiples de " + nb + " : ";
  let compteur = 1;
  while (compteur <= nb) {
    if(nb % compteur == 0) {
      resultat += compteur + ", ";
    }
    compteur++;
  }
  resultat += "\n \n";
}

console.log(resultat);

console.log("-------------------------------------------");

// Exercice 2

const list1 = [24, 67, 18];

let resultat1 = "";

for(nb of list) {
  resultat1 += "Multiples de " + nb + " : ";
  for(let compteur = 1; compteur <= nb; compteur++) {
    if(nb % compteur == 0) {
      resultat1 += compteur + ", ";
    }
  }
  resultat1 += "\n \n";
}

console.log(resultat1);