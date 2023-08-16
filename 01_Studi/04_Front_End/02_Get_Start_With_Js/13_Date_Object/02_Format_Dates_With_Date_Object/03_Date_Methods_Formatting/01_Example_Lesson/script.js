// Exemple 1
/*
console.log(Date.now()); //nombre de millisecondes écoulées depuis la date repère

console.log(Date.parse("2023-01-17T12:30:00+02:00")); //1673951400000

console.log(Date.UTC(2023, 11, 1, 10, 14, 10, 58)); //1701425650058
*/

console.log("---------------------------------------")

// Exemple 2
/*
const date = new Date(2023, 11, 1, 10, 14, 10, 58);

console.log(date.toDateString()); //Tue Jan 17 2023

console.log(date.toTimeString()); //11:30:00 GMT+0100 (heure normale d’Europe centrale)

console.log(date.toISOString()); //2023-12-01T09:14:10.058Z

console.log(date.toUTCString()); //Fri, 01 Dec 2023 09:14:10 GMT
*/

console.log("---------------------------------------")

// Exemple 3
/*
const date = new Date(2023, 11, 1, 10, 14, 10, 58);

console.log(date.valueOf()); //1701422050058
*/

console.log("---------------------------------------")

// Exemple 4
/*
const date = new Date(2023, 11, 1, 10, 14, 10, 58);

console.log(date.toLocaleDateString()); //01/12/2023

console.log(date.toLocaleTimeString()); //10:14:10

console.log(date.toLocaleString()); //01/12/2023 10:14:10
*/

console.log("---------------------------------------")

// Exemple 5
/*
const date = new Date(2023, 11, 1, 10, 14, 10, 58);

console.log(date.toLocaleDateString("fr-CA")); //2023-12-01

console.log(date.toLocaleTimeString("fr-CA")); //10:14:10

console.log(date.toLocaleString("fr-CA")); //2023-12-01 10:14:10
*/

console.log("---------------------------------------")

// Exemple 6
/*
const date = new Date(2023, 11, 1, 10, 14, 10, 58);

let options = {day: 'numeric', weekday: 'short', month: 'long', year: 'numeric'};
*/

console.log("---------------------------------------")

// Exemple 7
/*
const date = new Date(2023, 11, 1, 10, 14, 10, 58);

let options = {day: 'numeric', weekday: 'short', month: 'long', year: 'numeric'};

console.log(date.toLocaleDateString("fr-FR", options)); //ven. 1 décembre 2023
*/

console.log("---------------------------------------")

// Exemple 8
/*
const date = new Date(2023, 11, 1, 10, 14, 10, 58);

let options = {day: 'numeric'};

console.log(date.toLocaleDateString("fr-FR", options)); //1
*/