// Vous êtes gérant d’un magasin d’informatique et vous missionnez des employés de générer des étiquettes de prix pour plusieurs produits. Vous souhaitez créer un programme permettant aux employés de savoir si un prix est valide ou non.

// Vos articles doivent avoir un prix entier, et être compris entre 500 (inclus) et 1 500 € (inclus).

// Ma Solution
const prix = new Number(500);

function verifPrice(pr) {
  if (typeof pr == "object" && Number.isInteger(pr.valueOf()) && pr.valueOf() >= 500 && pr.valueOf() <= 2000) {
    console.log("Le prix est valide");
  }
  else {
    console.log("Le prix n'est pas valide");
  }
}
verifPrice(prix)

console.log("------------------------------------------");

// Exemple

