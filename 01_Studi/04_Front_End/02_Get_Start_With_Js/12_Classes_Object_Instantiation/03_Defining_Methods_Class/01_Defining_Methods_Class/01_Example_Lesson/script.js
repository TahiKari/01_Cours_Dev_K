// Exemple 1
/*
class Ordinateur {

  //définition de propriétés statiques
  
  static OBJETS_PRIS_EN_CHARGE = "ordinateurs";

  //définition de propriétés de classe

  type = "laptop";
  clavier = "azerty";

  constructor(marque, ram, stockage) {
    this.marque = marque;
    this.ram = ram;
    this.stockage = stockage;
  }

  //définition de méthodes statiques

  static definition() {
    console.log("Les ordinateurs sont des machines automatisées permettant le traitement d'informations.")
  }
  
}

let monOrdi = new Ordinateur("Apple", 8, 512);
let monOrdi2 = new Ordinateur("HP", 16, 256);

Ordinateur.definition(); //appel de la méthode statique
*/

console.log('--------------------------------------------')

// Exemple 2
/*
class Ordinateur {

  //définition de propriétés statiques
  
  static OBJETS_PRIS_EN_CHARGE = "ordinateurs";

  //définition de propriétés de classe

  type = "laptop";
  clavier = "azerty";
  //définition du constructeur

  constructor(marque, ram, stockage) {
    this.marque = marque;
    this.ram = ram;
    this.stockage = stockage;
  }

  //définition de méthodes statiques

  static definition () {
    console.log("Les ordinateurs sont des machines automatisées permettant le traitement d'informations.");
  }

  //définition de méthodes d'instance

  ficheProduit() {
    console.log("Marque : " + this.marque + "\n" + "Mémoire vive : " + this.ram + "\n" + "Stockage : " + this.stockage);
  }
  
}

let monOrdi = new Ordinateur("Apple", 8, 512);
let monOrdi2 = new Ordinateur("HP", 16, 256);

monOrdi.ficheProduit();

monOrdi2.ficheProduit();
*/

console.log('--------------------------------------------')

// Exemple 3
/*
class Ordinateur {

  //définition de propriétés statiques
  
  static OBJETS_PRIS_EN_CHARGE = "ordinateurs";

  //définition de propriétés de classe

  type = "laptop";
  clavier = "azerty";
  //définition du constructeur

  constructor(marque, ram, stockage) {
    this.marque = marque;
    this.ram = ram;
    this.stockage = stockage;
  }

  //définition de méthodes statiques

  static definition () {
    console.log("Les ordinateurs sont des machines automatisées permettant le traitement d'informations.");
  }

  //définition de méthodes d'instance

  ficheProduit() {
    console.log("Marque : " + this.marque + "\n" + "Mémoire vive : " + this.ram + "\n" + "Stockage : " + this.stockage);
  }
  
}

let monOrdi = new Ordinateur("Apple", 8, 512);
let monOrdi2 = new Ordinateur("HP", 16, 256);

monOrdi.ficheProduit();

monOrdi2.ficheProduit();
*/

console.log('--------------------------------------------')

// Exemple 4
/*
class Ordinateur {

//définition de propriétés statiques
  
  static OBJETS_PRIS_EN_CHARGE = "ordinateurs";

  //définition de propriétés de classe

  type = "laptop";
  clavier = "azerty";

  //définition du constructeur

  constructor(marque, ram, stockage) {
    this.marque = marque;
    this.ram = ram;
    this.stockage = stockage;
  }

  //définition de méthodes statiques

  static definition() {
    console.log("Les ordinateurs sont des machines automatisées permettant le traitement d'informations.");
  }

  //définition de méthodes d'instance

  ficheProduit() {
    console.log("Marque : " + this.marque + "\n" + "Mémoire vive : " + this.ram + "\n" + "Stockage : " + this.stockage);
  }

  calcPrice() {
    return this.ram * 100 + this.stockage * 2;
  }

  addRam(value) {
    return this.ram += value;    
  }
}

let monOrdi = new Ordinateur("Apple", 8, 512);
let monOrdi2 = new Ordinateur("HP", 16, 256);

Ordinateur.definition();

console.log(monOrdi.addRam(8));
*/