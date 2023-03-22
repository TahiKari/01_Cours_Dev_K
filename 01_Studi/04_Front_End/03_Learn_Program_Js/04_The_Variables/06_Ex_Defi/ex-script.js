// On affiche les prix de chaque article
const priceApple = 0.32;
const pricePear = 0.44;

//  On permet a l'utilisateur d'ajouter les quantités
let quantityApple = prompt('Saisissez le nombre de pommes vendus');
let quantityPear = prompt('Saisissez le nombre de poire vendus');

// On calcule la rectte réaliser pour chaque  variétés de fruit
const priceTotalApple = quantityApple * priceApple;
const priceTotalPear = quantityPear * pricePear;

// On calcule le chiffre d'affaire total
const turnover = priceTotalApple + priceTotalPear;

// On créer l'alerte qui affichera les informations à l'utilisateur 
alert('Pommes => quantité : ' + quantityApple + ' | Chiffre d\'affaire : ' + Math.round(priceTotalApple * 100) / 100 + '€ \n' + 'Poire => quantité : ' + quantityPear + ' | Chiffre d\'affaire : ' + Math.round(priceTotalPear * 100) / 100 + '€ \n' + 'Chiffre d\'affaire totale => ' + Math.round(turnover * 100) / 100 + '€ \n');
