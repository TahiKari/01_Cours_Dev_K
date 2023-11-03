// Exemple 1
//Tableau basique
/*
let myArray : number[] = [1, 2, 3, 4, 5];
*/

//Tableau imbriqué
/*
let myMatrix: number[][] = [[1, 2], [3, 4]];
*/

console.log('----------------------------------------')

// Exemple 2
//Accès aux tableau
/*
let myArray: number[] = [1, 2, 3];
let secondElement : number = myArray[1]; // Résultat 2
*/

console.log('----------------------------------------')

// Exemple 3
// Tableau générique
/*
let myArray : Array<string | number> = ['Hello', 20];
*/

console.log('----------------------------------------')

// Exemple 4
// Tableaux utilisés pour une application de gestion des tâches
/*
let tasks : string[] = ["Faire les courses", "Nettoyer la maison", "Rendre visite à un ami"];
*/

// Parcourir le tableau
/*
for (let i = 0; i < tasks.length; i++) {
  console.log(`Tâche n°${i + 1}: ${tasks[i]}`);
}
*/

console.log('----------------------------------------')

// Exemple 5
// Tuple
/*
let myTuple: [string, number];
*/

// Initialisation de tuples
/*
let myTuple: [string, number] = ['Hello', 20];
*/

// Accès aux élément de tuples
/*
let myTuple : [string, number] = ['Hello', 20];
let myString : string = myTuple[0]; // Hello
let myNumber : number = myTuple[1]; // 20
*/

// Notez que TypeScript permet également de décomposer un tuple en plusieurs variables séparées, ce qui peut rendre le code plus lisible :
/*
let myTuple: [string, number] = ['Hello', 20];
let [myString, myNumber] = myTuple;
*/

// Tuples utilisés pour stocker des informations
/*
let user: [string, string] = ["Alice", "alice@example.com"];
console.log(`Bienvenue, ${user[0]} ! Un e-mail de bienvenue a été envoyé à ${user[1]}.`);
*/

console.log('----------------------------------------')

// Exemple 6
// Tableau de tuples
/*
let myArray: [string, number][] = [['Hello', 20], ['World', 99]];
*/

//Tableaux de tuples utilisés pour stocker des informations
/*
let users: [string, string, string][] = [
  ["Alice", "alice@example.com", "123-456-7890"],
  ["Bob", "bob@example.com", "987-654-3210"],
  ["Charlie", "charlie@example.com", "555-555-5555"]
];
for (let i = 0; i < users.length; i++) {
  console.log(`Nom: ${users[i][0]}, Email: ${users[i][1]}, Téléphone: ${users[i][2]}`);
}
*/

// Utilisation d'interface pour rendre le code plus lisible
/*
interface User {
  name: string;
  email: string;
  phone: string;
}

let users: User[] = [
  { name: "Alice", email: "alice@example.com", phone: "123-456-7890" },
  { name: "Bob", email: "bob@example.com", phone: "987-654-3210" },
  { name: "Charlie", email: "charlie@example.com", phone: "555-555-5555" }
];
for (let i = 0; i < users.length; i++) {
  console.log(`Nom: ${users[i].name}, Email: ${users[i].email}, Téléphone: ${users[i].phone}`);
}
*/

console.log('----------------------------------------')

// Exemple 7
// Enums
// Déclaration d'une énumération
/*
enum DaysOfWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday
}
*/

// Utilisation d'une énumération
/*
let today : DaysOfWeek = DaysOfWeek.Monday;
*/

// Assignation de valeurs personnalisées
/*
enum DaysOfWeek {
  Monday = 1,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
}
*/

// Énumérations utilisées pour une application de pizzeria
/*
// Supposons maintenant que nous ayons besoin d'une énumération pour représenter les différents types de pizzas dans notre application de commande de pizza :
enum PizzaType {
  Margherita,
  Pepperoni,
  Hawaiian,
  Vegetarian
}

// Nous pouvons utiliser cette énumération pour stocker le type de pizza commandé par un utilisateur :
interface Order {
  customerName: string;
  pizzaType: PizzaType;
}
let order: Order = {
  customerName: "Alice",
  pizzaType: PizzaType.Pepperoni
};

// Nous pouvons ensuite utiliser cette information pour préparer la commande de pizza :
switch (order.pizzaType) {
  case PizzaType.Margherita:
    console.log(`Préparation de la pizza margherita pour ${order.customerName}...`);
    break;
  case PizzaType.Pepperoni:
    console.log(`Préparation de la pizza pepperoni pour ${order.customerName}...`);
    break;
  case PizzaType.Hawaiian:
    console.log(`Préparation de la pizza hawaiian pour ${order.customerName}...`);
    break;
  case PizzaType.Vegetarian:
    console.log(`Préparation de la pizza végétarienne pour ${order.customerName}...`);
    break;
}
*/

console.log('----------------------------------------')

// Exemple 8 de la vidéo
// Les tableaux
// Déclaration et initialisation de tableaux
let monTableau1: number[] = [1, 2, 3, 4, 5]
let monTableau2: string[] = ["1", "2", "3", "4", "5"]
let monTableau3: any[] = [1, "a", "Hi", 7, true]

// Tableau à plusieurs dimensions
let maMatrice = [[1, 2, 3], [4, 5, 6], [7, 8, 9]]

// Accès aux éléments du tableau
let monElement = monTableau1[2] // Done la valeur du 3ème éléménts du tableau à la variable monElement
console.log(monElement) // Accès au 3ème éléménts du tableau
console.log(monTableau1[2]) // Accès au 3ème éléménts du tableau
console.log(maMatrice[2][1]) // 8 La première valeur permet de selectionné le 3ème tableau et la 2ème valeur permet de sélectionner la 2 ème valeur dans ce 3ème tableau

// Tableau de types génériques vs any
let tableauGenerique: Array<string | number | boolean> = ['Hi', 3, 20, true, 'true']
let tableauAny: any[] = [1, "a", "Hi", 7, true]

console.log('----------------------------------------')

// Exemple 9 de la vidéo
// Les tuples
// Déclaration et initialisation d'un tuple
let monTuple1: [string, number] = ['Hi', 2023]
let monTuple2: [number, number] = [2023, 2025]

// Tuple Vs Tableau Générique
let monTuple3: [number, boolean, number, string] = [2023, true, 21, "Word"]
let monTableau4: Array<string | number> = [2023, 'Hi', 2023] // Tableau Générique

// Accès aux éléments du tableau
let string1: string = monTuple1[0] // Hi
let number1: number = monTuple1[1] // 2023
console.log(string1) // Hi
console.log(monTuple1[0]) // Hi

// Tableau de tuple
let tableauTuple: [string, number][] = [
  ['Alex', 20],
  ['Fred', 35],
  ['John', 26],
]

//Les Enums
// Déclaration et initialisation d'un enum
enum Couleur1 {
  Rouge,
  Orange,
  Jaune,
  Vert,
  Bleu,
  Indigo,
  Violet
}
console.log(Couleur1.Violet) // Affiche 6

enum Couleur2 {
  Rouge = 1,
  Orange,
  Jaune,
  Vert,
  Bleu,
  Indigo,
  Violet
}
console.log(Couleur2.Violet) // Affiche 7

// Assignation de valeurs personnalisée

enum Couleur3 {
  Rouge = "Rouge",
  Orange = "Orange",
  Jaune = "Jaune",
  Vert = "Vert",
  Bleu = "Bleu",
  Indigo = "Indigo",
  Violet = "Violet"
}
console.log(Couleur3.Violet) // Affiche Violet

// Utilisationd'une énumération
let maCouleur: Couleur1 = Couleur1.Rouge

// Accès aux éléments des énumérations
console.log(Couleur1.Rouge) // Affiche 0
console.log(Couleur2.Orange) // Affiche 2
console.log(Couleur3.Bleu) // Affiche Bleu


// On peut également accéder à un élément par sa valeur numérique
console.log(Couleur2[4]) // Affiche Vert
console.log(Couleur2[6]) // Affiche Indigo