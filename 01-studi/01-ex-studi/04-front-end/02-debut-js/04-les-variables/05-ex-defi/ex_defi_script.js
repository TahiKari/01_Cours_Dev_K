const APPLE = 0.32;
const PEAR = 0.44;

let numberApple = prompt('Entrez le nombre de pomme vendu :');
let numberPear = prompt('Entrez le nombre de poire vendu :');

const APPLETURNOVER = numberApple * APPLE;
const PEARTURNOVER = numberPear * PEAR;

const TOTALTURNOVER = APPLETURNOVER + PEARTURNOVER;

alert('Pomme => Quantité vendu : ' + numberApple + ' | Chiffre d\'affaire : ' + Math.round(APPLETURNOVER * 100) / 100 + '€\n' + 'Poire => Quantité vendu : ' + numberPear + ' | Chiffre d\'affaire : ' + Math.round(PEARTURNOVER * 100) / 100 + '€\n' + 'Chiffre d\'affaire totale => ' +  Math.round(TOTALTURNOVER * 100) / 100 + '€');

// Quantité pomme
//Chiffre d'affaire Pomme

//Quantité Poire
//Chiffre d'affaire Poire

//Chiffre d'affaire totale