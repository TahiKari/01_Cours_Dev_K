// Exemple 1
/*
//1. Nombre “number” : représente les nombres (décimaux, entiers, etc.).
let note : number = 19;
*/

/*
//2. Chaîne de caractère “string” : représente les chaînes de caractère (valeurs de texte).
let fruit : string = "Tomate";
*/

/*
// 3. Booléen “boolean” : représente les valeurs booléennes true ou false.
let admis : boolean = true;
*/

/*
4. Nul/vide “null” : représente l’absence de valeur ou la nullité.
let note : null;
*/

/*
// 5. Indéfini “undefined” : représente une valeur indéfinie (n’a pas de valeur) ou une variable qui n’a pas été initialisée.
 let myVariable : undefined;
*/

/*
// 6. Symbole “symbol” : représente un type de données unique et immuable qui peut être utilisé comme clé ou pour représenter des identifiants pour les propriétés dans les objets.
const mySymbol =  Symbol();
*/

console.log("----------------------------------------");

// Exemple 2
/*
let altitude : number = 300;
let temperature : number = 27.5;
let totale : number = altitude + temperature;
*/

console.log("----------------------------------------");

// Exemple 3
/*
let nom : string = 'Victor Hugo';
let tel : string = “+3366666666”
let titre : string = "Quatre-vingt-treize";
*/

console.log("----------------------------------------");

// Exemple 4
/*
let estActif : boolean = true;
let estConnecte : boolean = false;
*/

console.log("----------------------------------------");

// Exemple 5
/*
let variableNulle : null = null;
*/

/*
let temp : number | null = 20;  
function getTemperature(): number | null {
  return temp;
}
temp = getTemperature();  
if (temp !== null) {  
  console.log(`La température est de ${temp} degrés Celsius.`);  
} else {
  console.log("La température n’est pas disponible.");  
}
*/

console.log("----------------------------------------");

// Exemple 6
/*
 let myVariable: number; // La variable myVariable est déclarée, mais pas initialisée, sa valeur par défaut est undefined.
*/

/*
function myFunction(): void {
  // Cette fonction ne retourne rien (void), sa valeur de retour est undefined par défaut
}
*/

/*
let myVariable: number | undefined;
if (typeof myVariable !== "undefined") {
  console.log(`La valeur de myVariable est ${myVariable}.`);
} else {
  console.log("La variable myVariable n’a pas de valeur définie.");
}
*/

console.log("----------------------------------------");

// Exemple 7
/*
const mySymbol1 = Symbol();
console.log(mySymbol1); // affiche "Symbol()"

// Utilisation d’un symbole pour créer une propriété privée dans un objet :
const myObj : { [key: symbol] : string } = {};
const mySymbol2 = Symbol("myPrivateProperty");
myObj[mySymbol2] = "valeur privée";
console.log(myObj[mySymbol2]); // affiche "valeur privée"

// Utilisation d’un symbole pour étiqueter un type dans TypeScript :
const mySymbol4 = Symbol("myType");
type MyType = {
  [mySymbol4] : boolean;
};

const myValue: MyType = {
  [mySymbol4]: true,
};
console.log(myValue[mySymbol4]); // affiche "true"
*/

console.log("----------------------------------------");

// Exemple 8
/*
const fieldTypeSymbol = Symbol("fieldType");
type FormField = {
  label : string;
  value: any;
  [fieldTypeSymbol]: string;
};
const textField: FormField = {
  label: "Text Field",
  value: "Hello",
  [fieldTypeSymbol]: "text",
};
const numberField: FormField = {
  label: "Numbers",
  value: 42,
  [fieldTypeSymbol]: "number",
};
const dateField: FormField = {
  label: "Date de naissance",
  value: new Date("1990-01-01"),
  [fieldTypeSymbol]: "date",
};
// Fonction de validation des entrées de formulaire
function validateFormField(field : FormField) : string {
  switch (field[fieldTypeSymbol]) {
    case "text":
      return `Le champ "${field.label}" est valide : ${field.value}`;
    case "number":
      if (typeof field.value !== "number") {
        return `Le champ "${field.label}" doit être un nombre !`;
      }
      return `Le champ "${field.label}" est valide : ${field.value}`;
    case "date":
      if (!(field.value instanceof Date)) {
        return `Le champ "${field.label}" doit être une date !`;
      }
      return `Le champ "${field.label}" est valide : ${field.value}`;
    default:
      throw new Error("Type de champ de formulaire invalide !");
  }}
// Validation des champs de formulaire
const fields : FormField[] = [textField, numberField, dateField];
fields.forEach((field) => {
  console.log(validateFormField(field));
});
*/

console.log("----------------------------------------");

// Exemple 9 de la vidéo
// Type number
/*"use strict"
let altitude: number = 300;
let temperature: number = 27
let totale: number = altitude + temperature

console.log(totale)
*/

/*
// Type String
let prenom : string = "Denzel"
let nom : string = "Washington"
let mdp : string = "sdfdf5487sdfsdf"

let message : string = "c'est l'été !" // Guillemets double obligatoire
let quote : string = 'Il a dit : "Bonjour".' // guillemets simples

console.log(`Bonjour,  ${prenom} !`) // Backtiks (``)

console.log('Prénom nom : ', prenom, nom, "C'est pas mon nom")
console.log('Mot de passe: ' + mdp)
*/

/*
// Type boolean
let userActif: boolean = true;
let userConnect: boolean = false;
console.log("Utilisateur connecté : " + userConnect);

if(userActif) {
  console.log("Utilisateur est actif")
} else {
  console.log("Utilisateur n'est pas actif")
}
*/

/*
// Type symbol
const variableSymbol1 = Symbol('Ce symbol est unique')
const variableSymbol2 = Symbol('Ce symbol est unique')

// console.log(variableSymbol1 === variableSymbol2)  // False

// console.log(5 === "5") // False
// console.log(5 == "5") // true
*/

/*
const passwordSymbol = Symbol("password")
class User {
  private [passwordSymbol]: string
  constructor(public username: string, password: string) {
    this[passwordSymbol] = password
  }

  getPassword() {
    return this[passwordSymbol]
  }
}

const user = new User("John Wayne", "monMotDePasseSecret")
console.log(user.username) // John Wayne
console.log(user[passwordSymbol]) // Erreur de compilation
console.log(user.getPassword()) // "moMotDePasseSecret"
*/

/*
// Type null
let temp : number | null = null
function getTemperature(): number | null {
  return temp
}

temp = getTemperature()

if(temp !== null) {
  console.log(`La température est de ${temp} degrès Celsius`)
} else {
  console.log("La température n'est pas disponible")
}
*/

/*
// Type undifined
let temp1 : number | undefined

function getTemperature(): number | undefined {
  return temp1
}

temp1 = getTemperature()

if(temp1 !== undefined) {
  console.log(`La température est de ${temp1} degrès Celsius`)
} else {
  console.log("La température n'est pas disponible")
}
*/

console.log("----------------------------------------");

// Exemple 10
/*
// Déclaration d’une variable de type number
let myNumber : number = 42;
// Utilisation de la variable de type number
console.log("My number is: " + myNumber);
// Tentative d’assigner une chaîne de caractères à la variable de type number
// Ceci générera une erreur de compilation
myNumber = "Hello World!"; // Erreur : Type 'string' is not assignable to type 'number'
// Déclaration d'une variable de type any
let myAny: any = 42;
// Utilisation de la variable de type any
console.log("myAny est : " + myAny);
// Assignation d’une chaîne de caractères à la variable de type any
// Cela fonctionne, car la variable de type any peut contenir n’importe quel type de données
myAny = "Hello World!";
// Utilisation de la variable de type any après assignation d’une chaîne de caractères
console.log("myAny est maintenant : " + myAny);
*/

/*
let myVariable : any = 10;
let myVariable1 = 5;
myVariable = "hello"; // OK
myVariable1 = "hola"; // Erreur de typage
myVariable.methodeX(); // OK, mais peut causer des problèmes lors de l’exécution
myVariable.proprieteY; // OK, mais peut causer des problèmes lors de l’exécution
*/

console.log("----------------------------------------");

// Exemple 11
/*
let myVariable : unknown;
myVariable = 42; // OK
myVariable = "hello"; // OK
myVariable.methodeX(); // Erreur : l’objet est de type 'unknown'.
myVariable.proprieteY ; // Erreur : l’objet est et de type 'unknown'.
*/

console.log("----------------------------------------");

// Exemple 12
/*

*/
