// Exemple
/*
console.log(Number.isNaN(62378)); //false
console.log(Number.isFinite(5817629)); //true
console.log(Number.isInteger(5817629.872)); //false
console.log(Number.isSafeInteger(5817629)); //true
*/

console.log("------------------------------------------");

// Exemple
/*
console.log(Object.getOwnPropertyNames(Number.prototype));
*/

console.log("------------------------------------------");

// Exemple
/*
const nombre = new Number(13578);
console.log(nombre.toExponential()); //1.3578e+4
console.log(nombre.toExponential(2)); //1.36e+4
*/

console.log("------------------------------------------");

// Exemple
/*
const nombre = new Number(13578);

let nombreChaine = nombre.toString();

console.log(nombreChaine); //13578
console.log(typeof nombreChaine); //string
*/

console.log("------------------------------------------");

// Exemple
/*
const nombre = new Number(13578);

let nombreRecup = nombre;

console.log(nombreRecup); //Number 13578
*/
console.log("------------------------------------------");

// Exemple
/*
const nombre = new Number(13578);

let nombreRecup = nombre.valueOf();

console.log(nombreRecup); //13578
console.log(typeof nombreRecup); //number
*/