// Exemple 1
// Les objets en TypeScript
/*
Déclaration d’objet en TypeScript
// Déclaration d’un objet
let person = {
  name: "John",
  age: 30,
  greeting: function() {
    console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
  }};
// Utilisation de l’objet
person.greeting(); // Output: Hello, my name is John and I am 30 years old.
*/

console.log('----------------------------------------')

// Exemple 2
/*
// Définir la structure d’objet en utilisant une interface
// Déclaration d’une interface
interface Person {
  name: string;
  age: number;
  greeting: () => void;
}
// Déclaration d’un objet avec l’interface Person
let person: Person = {
  name: "John",
  age: 30,
  greeting: function() {
    console.log("Hello, my name is " + this.name + " and I am " + this.age + " years old.");
  }};
  // Utilisation de la méthode
person.greeting(); // Output: Hello, my name is John and I am 30 years old.
*/

console.log('----------------------------------------')

// Exemple 3
/*
// Création d’objets à partir d’une classe
class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  sayHello() {
    console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
  }}
  
  let person = new Person("John", 30);
person.sayHello(); // Output: Hello, my name is John and I am 30 years old.
*/

console.log('----------------------------------------')

// Exemple 4
/*
// Objets imbriqués en TypeScript
interface Address {
  street: string;
  city: string;
  postalCode: string;
}

interface Person {
  name: string;
  age: number;
  address: Address;
}

// Déclaration d’un objet imbriqué
let person: Person = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
    postalCode: "12345"
  }};

  // Utilisation de l’objet imbriqué
console.log(person.name); // Output: John
console.log(person.address.city); // Output: Anytown
*/

console.log('----------------------------------------')

// Exemple 5 de la vidéo
/*
// Déclaration d'objet
const voiture = {
    marque: "tesla",
    modèle: "Model S",
    année: 2022,
    estNouvelle: true
}

// Déclaration d'objets avec spécification de type
const voiture2 : {
    marque: string,
    modèle: string,
    année: number,
    estNouvelle: boolean
} = {
    marque: "tesla",
    modèle: "Model S",
    année: 2022,
    estNouvelle: true
}
*/

console.log('----------------------------------------')

// Exemple 6 de la vidéo
/*
// Cas pratique
const calculatrice = {
    x: 0,
    y: 0,
    ajouter: function() {
        return this.x + this.y;
    },
    soustraire: function() {
        return this.x - this.y
    }
}

// Utilisation de l'objet calculatrice
calculatrice.x = 5;
calculatrice.y = 3;
console.log(calculatrice.ajouter()); // Affiche 8
console.log(calculatrice.soustraire()); // Affiche 2
*/

console.log('----------------------------------------')

// Exemple 7
/*
// définir la structure d'objet en utilisant une interface
interface Personnes {
    nom: string;
    age: number;
    sePresenter(): void;
    saluer(): void;
}

const personne5: Personnes = {
    nom: "Elon",
    age: 30,
    sePresenter() {
        console.log(`Je m'appelle ${this.nom} et j'ai ${this.age} ans.`)
    },
    saluer() {
        console.log(`Boujour ${this.nom} !`)
    }
}

personne5.sePresenter(); // Affiche "Je m'appelle Elon et j'ai 30 ans."
personne5.saluer(); // Affiche "Bonjour Elon."
*/

console.log('----------------------------------------')

// Exemple 8 de la vidéo

//Création d'objet à partir d'une classe 
/*
class Personne {
    nom: string;
    age: number;

    constructor(nom: string, age: number) {
        this.nom = nom;
        this.age = age;
    }

    sePresenter() {
        console.log(`Je m'appelle ${this.nom} et j'ai ${this.age} ans.`);
    }

    saluer() {
        console.log(`Boujour ${this.nom} !`);
    }
}

const personne6 = new Personne("Elon", 30);
personne6.sePresenter(); // Affiche "Je m'appelle Elon et j'ai 30 ans."
personne6.saluer(); // Affiche "Bonjour Elon."
*/

console.log('----------------------------------------')

// Exemple 9 de la vidéo

// C'est quoi l'intêret d'utilise une classe et une interface pour créer des objetss ?
/*
interface IEmploye {
    nom: string;
    prenom: string;
    age: number;
    salaire: number;
    augmenterSalaire(montant: number): void;
    getNomComplet(): string;
}

class EmployeImpl implements IEmploye {
    nom: string;
    prenom: string;
    age: number;
    salaire: number;

    constructor(nom: string, prenom: string, age: number, salaire: number) {
        this.nom = nom;
        this.prenom = prenom;
        this.age = age;
        this.salaire = salaire;
    }

    augmenterSalaire(montant: number) {
        this.salaire += montant;
    }
    
    getNomComplet() {
        return this.nom + " " + this.prenom;
    }
}

const employe3 = new EmployeImpl("Doe", "John", 35, 3000);
const employe4 = new EmployeImpl("Smith", "Jane", 35, 3000);
const employe5 = new EmployeImpl("Guenon", "Junon", 35, 3000);

employe3.augmenterSalaire(500);
employe4.augmenterSalaire(1500);
employe5.augmenterSalaire(2500);
*/

console.log('----------------------------------------')

// Exemple 10 de la vidéo

class animalClass {
    faireDuBruit() {
        console.log('Le bruit de l\'animal');
    }
}

class Chat extends animalClass {
    faireDuBruit() {
        console.log('Wouf');     
    }
}

class Chien extends animalClass {
    faireDuBruit() {
        console.log('Wouf');     
    }
}

const animal = new animalClass();
const chat1 = new Chat();
const chien1 = new Chien()

animal.faireDuBruit(); // Affiche "Le bruit de l'animal"
chat1.faireDuBruit(); // Affiche "Miaou"
chien1.faireDuBruit(); // Affiche "Wouf"
