// Exemple 1
/*
// Bonne pratique
const PI = 3.14159;
let message = "Bonjour";

// Mauvaise pratique
var x = 10;
*/

// Exemple 2
/*
// Bonne pratique
const add = (a, b) => a + b;

// Mauvaise pratique
function add(a, b) {
return a + b;
}
*/

// Exemple 3
/*
// Bonne pratique
const name = "John";
const message = `Bonjour, ${name}!`;

// Mauvaise pratique
const name = "John";
const message = "Bonjour, " + name + "!";
*/

// Exemple 4
/*
// Bonne pratique
const fruits = ["pomme", "banane", "orange"];

for (const fruit of fruits) {
console.log(fruit);
}

fruits.forEach(fruit => console.log(fruit));
*/

// Exemple 5
/*
// Mauvaise pratique
const fruits2 = ["pomme", "banane", "orange"];

for (const index in fruits2) {
console.log(fruits2[index]);
}
*/

/*
// Bonne pratique
class Person {
constructor(name) {
this.name = name;
}
}

const john = new Person("John");

const person = { name: "John" };

// Mauvaise pratique
function Person(name) {
this.name = name;
}

const john = new Person("John");

const person = new Object({ name: "John" });
*/

// Exemple 6
/*
// filter : permet de filtrer les éléments d’un tableau selon un critère
const numbers1 = [1, 2, 3, 4, 5];

const evenNumbers = numbers1.filter(number => number % 2 === 0)
console.log(evenNumbers); // [2, 4]

// map : permet de transformer chaque élément d’un tableau en un autre élément
const numbers2 = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map(number => number * 2);
console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// reduce : permet de réduire les éléments d’un tableau en une seule valeur
const numbers3 = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, number) => accumulator + number, 0);
console.log(sum); // 15
*/

// Exemple 7
/*
// Bonne pratique
const matrix = [[1, 2], [3, 4], [5, 6]];

const flattenedMatrix = matrix.flatMap(row => row);
console.log(flattenedMatrix); // [1, 2, 3, 4, 5, 6]
*/

/*
// Mauvaise pratique
const matrix = [[1, 2], [3, 4], [5, 6]];
const flattenedMatrix = [];

for (let i = 0; i < matrix.length; i++) {
for (let j = 0; j < matrix[i].length; j++) {
flattenedMatrix.push(matrix[i][j]);
}
}

console.log(flattenedMatrix); // [1, 2, 3, 4, 5, 6]
*/

// Exemple 8
/*
// Bonne pratique
const person = {
name: "John",
age: 30,
address: {
city: "Paris",
country: "France"
}
};

const country = person.address?.country;

// Mauvaise pratique
const person = {
name: "John",
age: 30,
address: {
city: "Paris",
country: "France"
}
};

const country = person.address && person.address.country;
*/
