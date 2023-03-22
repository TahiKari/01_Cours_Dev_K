const objet = prompt('Entrez le motif de la convocation');

let lastName = prompt('Entrez un nom');
let lastNameLetterUpper = lastName.substring(0, 1).toUpperCase();
let lastNameLetterLower = lastName.substring(1).toLowerCase();
lastName = lastNameLetterUpper + lastNameLetterLower;

let firstName = prompt('Entrez un prénom');
let firstNameLetterUpper = firstName.substring(0, 1).toUpperCase();
let firstNameLetterLower = firstName.substring(1).toLowerCase();
firstName = firstNameLetterUpper + firstNameLetterLower;

let gender = prompt('M ou Mme');
let genderLetterUpper = gender.substring(0, 1).toUpperCase();
let genderLetterLower = gender.substring(1).toLowerCase();
gender = genderLetterUpper + genderLetterLower;

const dateAppointement = prompt('Entrez une date de convocation (dd/mm/yyyy)');
let place = prompt('Entrez un numéro de bureau');
let placeLetterUpper = place.substring(0, 1).toUpperCase();
let placeLetterLower = place.substring(1).toLowerCase();
place = placeLetterUpper + placeLetterLower;

const signature = 'Votre agent administratif';

let body = `
À ${lastName} ${firstName}
  
        Objet de la convocation: ${objet}
    
        ${gender} ${lastName} ${firstName}, vous êtes convoqué(e) le ${dateAppointement} dans le bureau ${place} pour le motif suivant: ${objet}.
    
En vous remerciant.
    
${signature}
`
console.log(body);

