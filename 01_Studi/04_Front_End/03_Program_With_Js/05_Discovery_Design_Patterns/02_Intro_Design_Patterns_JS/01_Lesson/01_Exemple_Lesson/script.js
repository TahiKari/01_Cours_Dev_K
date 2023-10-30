// Exemple 1
/*
const Singleton = (() => {
  let instance;
 
  // Fonction qui crée l’instance unique de la classe
  function createInstance() {
    const object = new Object("Je suis l’instance unique !");
    return object;
  }
 
  // Méthode publique pour obtenir l’instance unique de la classe
  return {
    getInstance : function() {
      if (!instance) {
        instance = createInstance();
      }
      return instance;
    }
  };
})();

// Utilisation de la méthode publique pour obtenir l’instance unique
const instance1 = Singleton.getInstance();
const instance2 = Singleton.getInstance();

// Vérification que les deux instances sont identiques
console.log(instance1 === instance2); // true
*/

console.log('----------------------------------------')

// Exemple 2
/*
// Définition de l’interface commune pour les objets de paiement
class Payment {
  processPayment() {}
}

// Implémentation de la classe de paiement par carte de crédit
class CreditCardPayment extends Payment {
  processPayment() {
    console.log("Traitement du paiement par carte de crédit...");
  }
}

// Implémentation de la classe de paiement par virement bancaire
class BankTransferPayment extends Payment {
  processPayment() {
    console.log("Traitement du paiement par virement bancaire...");
  }
}

// Implémentation de la Factory pour créer les objets de paiement
class PaymentFactory {
  createPayment(paymentType) {
    if (paymentType === "CreditCard") {
      return new CreditCardPayment();
    } else if (paymentType === "BankTransfer") {
      return new BankTransferPayment();
    } else {
      throw new Error("Type de paiement invalide !");
    }
  }
}

// Utilisation de la Factory pour créer différents types de paiements
const paymentFactory = new PaymentFactory();
const creditCardPayment = paymentFactory.createPayment("CreditCard");
const bankTransferPayment = paymentFactory.createPayment("BankTransfer");

// Utilisation des objets de paiement créés
creditCardPayment.processPayment(); // Traitement du paiement par carte de crédit...
bankTransferPayment.processPayment(); // Traitement du paiement par virement bancaire...
*/

console.log('----------------------------------------')

// Exemple 3
/*
// Définition de la classe initiale pour les objets graphiques
class Shape {
  draw() {
    console.log("Je suis une forme.");
  }
}

// Définition de la classe de décorateur pour ajouter une bordure
class BorderDecorator {
  constructor(shape) {
    this.shape = shape;
  }

  draw() {
    this.shape.draw();
    console.log("Je suis une bordure rouge.");
  }
}

// Définition de la classe de décorateur pour ajouter une ombre
class ShadowDecorator {
  constructor(shape) {
    this.shape = shape;
  }

  draw() {
    this.shape.draw();
    console.log("Je suis une ombre noire.");
  }
}

// Création d’un objet de la classe initiale
const shape = new Shape();

// Création d’un objet de la classe de décorateur pour ajouter une bordure
const shapeWithBorder = new BorderDecorator(shape);

// Création d’un objet de la classe de décorateur pour ajouter une ombre
const shapeWithShadow = new ShadowDecorator(shape);

// Création d’un objet de la classe de décorateur pour ajouter une bordure et une ombre
const shapeWithBorderAndShadow = new ShadowDecorator(new BorderDecorator(shape));

// Utilisation des différents objets créés
shape.draw(); // Je suis une forme.
shapeWithBorder.draw(); // Je suis une forme. Je suis une bordure rouge.
shapeWithShadow.draw(); // Je suis une forme. Je suis une ombre noire.
shapeWithBorderAndShadow.draw(); // Je suis une forme. Je suis une bordure rouge. Je suis une ombre noire.
*/

console.log('----------------------------------------')

// Exemple 4
/*
// Définition de l’interface commune pour les objets simples et les objets composés
class DocumentComponent {
  constructor(name) {
    this.name = name;
  }

  add(component) {}
  remove(component) {}
  getChild(index) {}
  display() {}
}

// Définition de la classe pour les objets simples
class Paragraph extends DocumentComponent {
  display() {
    console.log("Je suis un paragraphe.");
  }
}

// Définition de la classe pour les objets composés
class Document extends DocumentComponent {
  constructor(name) {
    super(name);
    this.children = [];
  }

  add(component) {
    this.children.push(component);
  }

  remove(component) {
    const index = this.children.indexOf(component);
    if (index !== -1) {
      this.children.splice(index, 1);
    }
  }

  getChild(index) {
    return this.children[index];
  }

  display() {
    console.log(`Je suis le document ${this.name}.`);
    for (const child of this.children) {
      child.display();
    }
  }
}

// Création de différents objets simples et composés
const paragraph1 = new Paragraph("premier paragraphe");
const paragraph2 = new Paragraph("deuxième paragraphe");
const myDocument = new Document("document principal");
const subDocument = new Document("sous-document");

// Ajout des objets simples au sous-document
subDocument.add(paragraph1);
subDocument.add(paragraph2);

// Ajout du sous-document et d’un paragraphe au document principal
myDocument.add(subDocument);
myDocument.add(new Paragraph("dernier paragraphe"));

// Affichage du document principal, qui affiche tous les objets ajoutés à la hiérarchie
myDocument.display();
*/

console.log('----------------------------------------')

// Exemple 5
/*
// Interface requise par le client
class Target {
  request() {}
}

// Objet existant avec une interface incompatible avec celle requise par le client
class Adaptee {
  specificRequest() {
    return "Requête spécifique de l’Adaptee";
  }
}

// Adapter qui adapte l’interface de l’Adaptee à celle requise par le client
class Adapter extends Target {
  constructor(adaptee) {
    super();
    this.adaptee = adaptee;
  }

  request() {
    const specificRequestResult = this.adaptee.specificRequest();
    return `Adapter: (TRANSLATED) ${specificRequestResult}`;
  }
}

// Utilisation du client avec l’Adapter
function clientCode(target) {
  console.log(target.request());
}

// Utilisation de l’Adaptee avec une interface incompatible avec celle requise par le client
const adaptee = new Adaptee();
console.log("Adaptee: ", adaptee.specificRequest());

// Utilisation de l’Adapter pour adapter l’interface de l’Adaptee à celle requise par le client
const adapter = new Adapter(adaptee);
console.log("Adapter : ", adapter.request());

// Utilisation du client avec l’Adapter
console.log("Client : ");
clientCode(adapter);
*/

console.log('----------------------------------------')

// Exemple 6
/*
class Strategy {
  execute() {
    throw new Error('La méthode execute() doit être implémentée');
  }
}
class ConcreteStrategyA extends Strategy {
  execute() {
    return 'Résultat de la stratégie A';
  }
}

class ConcreteStrategyB extends Strategy {
  execute() {
    return 'Résultat de la stratégie B';
  }
}
class Context {
  constructor(strategy) {
    this.strategy = strategy;
  }

  setStrategy(strategy) {
    this.strategy = strategy;
  }

  executeStrategy() {
    return this.strategy.execute();
  }
}
const context = new Context(new ConcreteStrategyA());
console.log(context.executeStrategy()); // Résultat de la stratégie A

context.setStrategy(new ConcreteStrategyB());
console.log(context.executeStrategy()); // Résultat de la stratégie B
*/

/*
class AbstractClass {
  templateMethod() {
    this.operation1();
    this.operation2();
    // ...
  }

  operation1() {
    throw new Error('La méthode operation1() doit être implémentée');
  }

  operation2() {
    throw new Error('La méthode operation2() doit être implémentée');
  }
}
class ConcreteClassA extends AbstractClass {
  operation1() {
    console.log('Opération 1 de la classe A');
  }

  operation2() {
    console.log('Opération 2 de la classe A');
  }
}

class ConcreteClassB extends AbstractClass {
  operation1() {
    console.log('Opération 1 de la classe B');
  }

  operation2() {
    console.log('Opération 2 de la classe B');
  }
}
const concreteA = new ConcreteClassA();
concreteA.templateMethod();
// Output:
// Opération 1 de la classe A
// Opération 2 de la classe A

const concreteB = new ConcreteClassB();
concreteB.templateMethod();
// Output:
// Opération 1 de la classe B
// Opération 2 de la classe B
*/

console.log('----------------------------------------')

// Exemple 7 de la vidéo
/*
// Méthode abstraite Implémentée par chaque stratégie concrète
class Strategy {
  execute() {
    throw new Error("La méthode exécute() doit être implémentée");
  }
}

// Cération de classe de classe pour chaque stratégie concrète et celle implémente la méthode execute()
class ConcreteStrategyA extends Strategy {
  execute() {
    return "Résultat de la stratégie A";
  }
}

class ConcreteStrategyB extends Strategy {
  execute() {
    return "Résultat de la stratégie B";
  }
}

class Context {
  constructor(strategy) {
    this.strategy = strategy;
  }
  setStrategy() {
    this.strategy = strategy;
  }
  executeStrategy() {
    return this.strategy.execute();
  }
}

const context = new Context(new ConcreteStrategyA());
console.log(context.executeStrategy); // Résultat de la stratégie A

context.setStrategy(new ConcreteStrategyB());
console.log(context.executeStrategy); // Résultat de la stratégie A
*/

console.log('----------------------------------------')

// Exemple 8 de la vidéo
/*
const Menu = (() => {
    let instance;
   
  
    function createInstance() {
      return  {
          pizza: 10,
          hamburger: 8,
          salade: 6,
        };
    }
   
    
    return {
      getInstance : function() {
        if (!instance) {
          instance = createInstance();
        }
        return instance;
      }
    };
  })();
  
  
  const menu1  = Menu.getInstance();
  const menu2  = Menu.getInstance();
  console.log(menu1  === menu2 )
*/

console.log('----------------------------------------')

// Exemple 8 de la vidéo
/*
// Patron template

class AbstractClass {
    templateMethod() {
        this.operation1()
        this.operation2()
    }

    operation1() {
        throw new Error("La méthode opération1() doit être implémentée")
    }

    operation2() {
        throw new Error("La méthode opération2() doit être implémentée")
    }
}

class ConcreteClassA extends AbstractClass {
    operation1() {
        console.log("Opération 1 de la classe A")
    }

    operation2() {
        console.log("Opération 2 de la classe A")
    }
}

class ConcreteClassB extends AbstractClass {
    operation1() {
        console.log("Opération 1 de la classe B")
    }

    operation2() {
        console.log("Opération 2 de la classe B")
    }
}

const concreteA = new ConcreteClassA()
concreteA.templateMethod()
// Output
// Opération 1 de la classe A
// Opération 2 de la classe A

const concreteB = new ConcreteClassB()
concreteB.templateMethod()
// Output
// Opération 1 de la classe B
// Opération 2 de la classe B


*/