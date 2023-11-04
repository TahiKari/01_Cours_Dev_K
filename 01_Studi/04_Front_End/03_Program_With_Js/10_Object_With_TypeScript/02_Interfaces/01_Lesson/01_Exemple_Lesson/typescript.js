"use strict";
// Exemple 1
/*
// Concept d’interface en TypeScript
interface Person {
  name: string;
  age: number;
  sayHello: () => void;
}
*/
console.log("----------------------------------------");
// Exemple 2
/*
// Définir la structure d’objet en utilisant une interface
interface Produit {
  nom: string;
  prix: number;
// En TypeScript on utilise le signe “?” pour dire que la propriété est optionnelle
  description?: string;    // La propriété description est optionnelle
  disponible: boolean;
}

const tshirt: Produit = {
  nom: "T-shirt",
  prix: 19.99,
  disponible: true
};
*/
console.log("----------------------------------------");
// Exemple 3
/*
// Les alias
 type Age = number;
interface Person {
  name: string;
  age: Age;
  sayHello: () => void;
}
*/
/*
// Les alias de types peuvent également être utilisés pour définir des types génériques. Voici un exemple :
type Pair<T, U> = {
  first: T;
  second: U;
}
let pair: Pair<string, number> = {
  first: "one",
  second: 2
};
*/
console.log("----------------------------------------");
// Exemple 4
/*
// Interface VS Alias
//L’opérateur extends
// Exemple d’interface étendue
interface Animal {
  name: string;
  age: number;
}
interface Dog extends Animal {
  breed: string;
}
const myDog: Dog = { name: "Flipper", age: 3, breed: "Labrador" };
*/
/*
// Les interfaces peuvent définir des propriétés et des méthodes
interface Person {
  name: string;
  age: number;
//  Définir une méthode
  sayHello: () => void;
}
*/
/*
// Les interfaces sont utilisées pour décrire la forme d’un objet
// Exemple d’interface pour décrire la forme d’un objet :
interface Person {
  name: string;
  age: number;
  sayHello: () => void;
}
// Décrire la forme d’un objet
const person: Person = {
  name: 'John',
  age: 30,
  sayHello: function() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }};
person.sayHello(); // Output: "Hello, my name is John and I am 30 years old."
*/
/*
// Les alias de types sont utilisés pour créer des noms plus lisibles
type NumberMap = Map<string, number>;
const myMap: NumberMap = new Map();
myMap.set('one', 1);
myMap.set('two', 2);
console.log(myMap.get('one')); // Output: 1
*/
/*
// Les interfaces peuvent être implémentées par des classes
interface Animal {
  name: string;
  speak: () => string;
}
class Dog implements Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  speak() {
    return "Woof!";
  }}
const myDog: Animal = new Dog("Rufus");
console.log(myDog.speak()); // Output: "Woof!"
*/
/*
// Les interfaces peuvent être utilisées pour décrire des types génériques
interface Pair<T, U> {
  first: T;
  second: U;
}
let pair: Pair<string, number> = {
  first: "one",
  second: 2
};
console.log(pair.first); // Output: one
console.log(pair.second); // Output: 2
*/
console.log("----------------------------------------");
// Exemple 5 de la vidéo
// Les interfaces en TypeScript
/*
//Déclaration d'une interface
interface Personne {
    nom: string
    age: number
    adresse?: string
    saluer(): void
}

// Création d'un objet
const personne: Personne = {
  nom: "Steve Jobs",
  age: 30,
  adresse: "10 rue de la liberté",
  saluer() {
    console.log(`Bonjour, je m'appelle ${this.nom} et j'ai ${this.age} ans.`)
  },
}

// Appel de la méthode
personne.saluer()

// Définition d'une fonction
function saluerPersonne(personne: Personne) {
  console.log(`Bonjour ${personne.nom} !`)
}

// Appel de la fonction
saluerPersonne(personne) // Bonjour Steve Jobs !
*/
/*
//Déclaration interface Addition
interface Addition {
  (a: number, b: number): number
}

// Fonction add
const add: Addition = (a: number, b: number): number => {
  return a + b
}

console.log(add(2, 5)) // Affiche 7
*/
console.log("----------------------------------------");
// Exemple 6 de la vidéo
// Alias
/*
// Déclaration d'Alias de type
type Utilisateur = {
  nom: string
  age: number
  adresse?: string
  saluer(): void
}

// Déclaration d'un interface
interface Personne {
  nom: string,
  age: number,
  adresse?: string,
  saluer(): void
}

// Création d'un objet
const utilisateur: Utilisateur = {
  nom: "Steve Wozniak",
  age: 31,
  adresse: "10 rue de la Liberté",
  saluer() {
    console.log(`Bonjour, je m'appelle ${this.nom} et j'ai ${this.age} ans.`)
  }
}

// Appel de la méthode
utilisateur.saluer()

// Définition d'une fonction
function saluerUtilisateur(utilisateur: Utilisateur) {
  console.log(`Bonjour ${utilisateur.nom} !`)
}

// Appel de la fonction
saluerUtilisateur(utilisateur)
*/
console.log("----------------------------------------");
// Exemple 7
// Comment choisir entre l'utilisation d'une interface et un alias de type ?
/*
// Déclaration d'Alias de type
type Utilisateur = {
  nom: string
  age: number
  adresse?: string
  saluer(): void
}

// Déclaration d'une interface
interface Personne {
  nom: string,
  age: number,
  adresse?: string,
  saluer(): void
}

// Union
type MonUnion = string | number

// Intersection
type MonObjet = { nom: string } & { age: number }

// En général une Interface est plus adapter pour décrire la forme d'un objet et un Alias de type est plus adapté pour définir des types plus complexe comme des union et des intersections
*/
console.log("----------------------------------------");
// Exemple 8 de la vidéo
// Particularité des Alias et des Interfaces
/*
// Les interfaces peuvent être étendues
interface Animal {
  nom: string
  age: number
  son: string
}

interface Chien extends Animal {
  race: string
  aboyer(): void
}

interface Chat extends Animal {
  race: string
  miauler(): void
}

const monChien: Chien = {
  nom: "Rex",
  age: 3,
  son: "Woof",
  race: "Labrador",
  aboyer() {
    console.log(this.son)
  }
}

const monChat: Chat = {
  nom: "Tom",
  age: 5,
  son: "Miaou",
  race: "Main Coon",
  miauler() {
    console.log(this.son)
  }
}

monChien.aboyer() // Affiche "Woof"
monChat.miauler() // Affiche "Miaou"
*/
/*
// Les Alias de types permettent de créer des noms plus lisibles
type MonAge = string | number

interface Client {
  nom: string
  age: MonAge
}
*/
console.log("----------------------------------------");
// Implémentation de l'interface par une classe
class Voiture {
    constructor(marque, modele) {
        this.marque = marque;
        this.modele = modele;
    }
    rouler(distance) {
        console.log(`La voiture ${this.marque} a parcouru ${distance} km`);
    }
}
// Création d'un objet de type voiture
const maVoiture = new Voiture("Peugeot", "208");
