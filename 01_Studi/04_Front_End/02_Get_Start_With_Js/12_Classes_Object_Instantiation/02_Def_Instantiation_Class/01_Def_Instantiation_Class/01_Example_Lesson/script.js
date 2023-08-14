// Exemple 1
/*
class NomDeLaClasse {
  //définition des propriétés
}
*/

console.log("--------------------------------------------")

// Exemple 2
/*
class Ordinateur {
  //définition des propriétés
}
*/

console.log("--------------------------------------------")

// Exemple 3
/*
class Ordinateur {

  //définition de propriétés statiques
  
  static OBJETS_PRIS_EN_CHARGE = "ordinateurs";
}
*/

console.log("--------------------------------------------")

// Exemple 4
/*
class Ordinateur {

  //définition de propriétés statiques
  
  static OBJETS_PRIS_EN_CHARGE = "ordinateurs";
}

console.log(Ordinateur. OBJETS_PRIS_EN_CHARGE); //ordinateurs
*/

console.log("--------------------------------------------")

// Exemple 5
/*
class Ordinateur {

  //définition de propriétés statiques
  
  static OBJETS_PRIS_EN_CHARGE = "ordinateurs";

  //définition de propriétés de classe

  type = "laptop";
  clavier = "azerty";
}
*/

console.log("--------------------------------------------")

// Exemple 6
/*
class Ordinateur {

  //déclaration des propriétés qui seront définies comme propriétés d'instance dans le constructeur (facultatif mais bonne pratique)

  marque;
  ram;
  stockage;

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
}
*/

console.log("--------------------------------------------")

// Exemple 7
/*
class Ordinateur {

  //déclaration des propriétés qui seront définies comme propriétés d'instance dans le constructeur (facultatif mais bonne pratique)

  marque;
  ram;
  stockage;

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
}

let monOrdi = new Ordinateur("Apple", 8, 512);
let monOrdi2 = new Ordinateur("HP", 16, 256);
*/

console.log("--------------------------------------------")

// Exemple 8
/*
class Ordinateur {

  //déclaration des propriétés qui seront définies comme propriétés d'instance dans le constructeur (facultatif mais bonne pratique)

  marque;
  ram;
  stockage;

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
}

let monOrdi = new Ordinateur("Apple", 8, 512);
let monOrdi2 = new Ordinateur("HP", 16, 256);

console.log(monOrdi.marque); //Apple

console.log(monOrdi2.marque); //HP

console.log(monOrdi.type) ; //"laptop"

console.log(monOrdi2.type) ; //"laptop"
*/