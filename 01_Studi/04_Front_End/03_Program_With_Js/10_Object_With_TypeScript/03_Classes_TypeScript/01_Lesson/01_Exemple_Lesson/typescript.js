"use strict";
// Exemple 1
/*
// Implémentation de classes en TypeScript
class Car {
  make: string;
  model: string;
  year: number;
  constructor(make: string, model: string, year: number) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  drive(): void {
    console.log(`Driving a ${this.make} ${this.model} from ${this.year}`);
  }}
*/
Object.defineProperty(exports, "__esModule", { value: true });
console.log('----------------------------------------');
// Exemple 2
/*
// Instanciation de classes (création d’objets)
 const myCar = new Car('Tesla', 'Model S', 2022);
 myCar.drive(); // affiche "Driving a Tesla Model S from 2022"
*/
console.log('----------------------------------------');
// Exemple 3
/*
// Les constructeurs en TypeScript
class Person {
  nom: string;
  age: number;

  constructor(nom: string, age: number) {
    this.nom = nom;
    this.age = age;
  }
}

let personne = new Person("Jordan", 30);
class Employe extends Person {
  salaire: number;

  constructor(nom: string, age: number, salaire: number) {
    super(nom, age);
    this.salaire = salaire;
  }
}
*/
console.log('----------------------------------------');
// Exemple 4
/*
// Les méthodes statiques dans une classe

class MathUtils {
  static add(a: number, b: number): number {
    return a + b;
  }}
const sum = MathUtils.add(2, 3);
console.log (sum); // 5
*/
console.log('----------------------------------------');
// Exemple 5
/*
// L’héritage en TypeScript
class Animal {
  name: string;
  constructor(name: string) {
    this.name = name;
  }
  makeSound() {
    console.log("The animal makes a sound");
  }}

  class Dog extends Animal {
  bark() {
    console.log("The dog barks");
  }}

  // Crée une instance de la classe Dog
const myDog = new Dog("Flipper");
console.log(myDog.name); // Output: Flipper
myDog.makeSound(); // Output: The animal makes a sound
myDog.bark(); // Output: The dog barks
*/
console.log('----------------------------------------');
// Exemple 6
/*
// Implémentation d’interface en TypeScript
interface Animal {
  name: string;
  numberOfLegs: number;
  makeSound: () => void;
}
class Cat implements Animal {
  name: string;
  numberOfLegs: number;
  constructor(name: string) {
    this.name = name;
    this.numberOfLegs = 4;
  }
  makeSound() {
    console.log("Meow");
  }}
*/
console.log('----------------------------------------');
// Exemple 7 de la vidéo
/*
// Création de la classe
class Animal {
    nom: string;
    age: number;
    
    constructor(nom: string, age: number) {
        this.nom = nom;
        this.age = age;
    }

    parler(): void {
        console.log(`${this.nom} miaule`)
    }
}

// Instanciation
const chat = new Animal('Minou', 2)

chat.parler() // Affiche "Minou miaule"
*/
console.log('----------------------------------------');
// Exemple 8 de la vidéo
/*
// Héritage de classes
// Classe Parent
class Personne {
    nom: string;
    age: number;

    constructor(nom: string, age: number) {
        this.nom = nom;
        this.age = age;
    }

    sePresenter() {
        console.log(`Bonjour, je m'appelle ${this.nom} et j'ai ${this.age} ans.`)
    }
}


// Class fille

class Employe extends Personne {
    poste: string;

    constructor(nom: string, age: number, poste: string) {
        super(nom, age);
        this.poste = poste;
    }

    sePresenter() {
        console.log(`Je travaille comme ${this.poste}.`)
    }
}

// Instance de la classe Personne

const personne1 = new Personne("John Doe", 25)
personne1.sePresenter() // Affiche "Bonjour, je m'appelle John Doe et j'ai 25 ans."

// Intance class Employe
const employe1 = new Employe("Jane Smith", 30, "Développeur")
employe1.sePresenter() // Affiche "Bonjour, je m'appelle Jane Smith et j'ai 30 ans. je travaile comme Développeur"
*/
console.log('----------------------------------------');
class Employee {
    constructor(nom, age, poste, salaire) {
        this.nom = nom;
        this.age = age;
        this.poste = poste;
        this.salaire = salaire;
    }
    saluer() {
        throw new Error("Method not implemented.");
    }
    sePresenter() {
        console.log(`Je m'appelle ${this.nom} et j'ai ${this.age} ans.`);
    }
    travailler() {
        console.log(`Je suis ${this.poste} et je gagne ${this.salaire}€.`);
    }
}
const employe1 = new Employee("Jean", 30, "Ingénieur", 5000);
employe1.sePresenter();
employe1.travailler();
console.log('----------------------------------------');
// Exemple 7
/*

*/
console.log('----------------------------------------');
// Exemple 7
/*

*/
console.log('----------------------------------------');
