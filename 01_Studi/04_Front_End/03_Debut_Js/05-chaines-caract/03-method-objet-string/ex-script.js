// On créer une variable name
let name = 'rOmAin deLaNoix';
console.log(name);

// On met le nom et le prénom en minuscule
let nameFormated = name.toLowerCase();
console.log(nameFormated);

// On met la première lettre du prénom en majuscule
let firstNameLetterUpper = nameFormated.substring(0, 1).toUpperCase();
console.log(firstNameLetterUpper);

// On créer une variable avec les autres lettre du prénom
let firstNameletterLower = nameFormated.substring(1, 6);
console.log(firstNameletterLower);

// On met la première lettre du nom en majuscule

let lastNameLetterUpper = nameFormated.substring(7, 8).toUpperCase();
console.log(lastNameLetterUpper);

// On créer une variable avec les autres lettre du nom
let lastNameLetterLower = nameFormated.substring(8);
console.log(lastNameLetterLower);

// On concatène
nameFormated = `${firstNameLetterUpper + firstNameletterLower} ${lastNameLetterUpper + lastNameLetterLower}`;

console.log(nameFormated);