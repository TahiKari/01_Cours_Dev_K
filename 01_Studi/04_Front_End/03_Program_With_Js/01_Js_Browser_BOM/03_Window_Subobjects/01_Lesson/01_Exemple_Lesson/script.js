// Exemple 1
/*
console.log(screen.width);
console.log(screen.height);
console.log(screen.availWidth);
console.log(screen.availHeight);
console.log(screen.colorDepth);
console.log(screen.pixelDepth);
*/

/*
console.log(window.screen.width);
console.log(window.screen.height);
console.log(window.screen.availWidth);
console.log(window.screen.availHeight);
console.log(window.screen.colorDepth);
console.log(window.screen.pixelDepth);
*/

console.log('----------------------------------------')

// Exemple 2
/*
//Affichage de propriétés de window.location (le mot window est facultatif)

console.log(window.location.href);
console.log(window.location.protocol);
console.log(window.location.host);
console.log(window.location.pathname);
*/

/*
window.location.assign('destination.html');
*/

/*
window.location.replace('destination.html');
*/

/*
console.log(location.toString());
*/

console.log('----------------------------------------')

// Exemple 3

let destination = document.getElementById('destination');

const forward = document.getElementById('forward');

destination.addEventListener('click', () => {
destination = window.location.assign('destination.html');
});

forward.addEventListener('click', () => {
window.history.forward();
});


console.log('----------------------------------------')

// Exemple 4
/*
document.cookie = "clé=value ; expires=date_d'expiration ; path=chemin ; domain=domaine ; secure"
*/
/*
const destination = document.getElementById('destination');

const forward = document.getElementById('forward');

destination.addEventListener('click', () => {
  const destination = window.location.assign('destination.html');
});

forward.addEventListener('click', () => {
  window.history.forward();
});

//création d’un objet Date pour créer une date d’expiration :

const dateExp = new Date();

dateExp.setMonth(dateExp.getMonth() + 1); //nous ajoutons 1 mois à la date

//nous interrogeons l’utilisateur sur son username et son mdp avec window.prompt()

const username = prompt("Username");

const mdp = prompt("Mot de passe");

//creation des cookies

document.cookie = `username=${username} ; expires=${dateExp.toUTCString()}`;

document.cookie = `mdp=${mdp} ; expires=${dateExp.toUTCString()}`;
*/

console.log('----------------------------------------')

// Exemple 5
/*

*/

console.log('----------------------------------------')

// Exemple 6
/*

*/

console.log('----------------------------------------')

// Exemple 7
/*

*/

console.log('----------------------------------------')