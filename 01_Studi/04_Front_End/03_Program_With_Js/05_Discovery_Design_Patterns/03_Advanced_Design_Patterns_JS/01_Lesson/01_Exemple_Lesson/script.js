// Exemple 1
/*
// Modèle
class Model {
  constructor() {
    this.data = [];
  }

  addData(item) {
    this.data.push(item);
  }

  getData() {
    return this.data;
  }
}

// Vue
class View {
  constructor() {}

  render(data) {
    console.log(`Données actuelles : ${JSON.stringify(data)}`);
  }
}

// Contrôleur
class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  addData(item) {
    this.model.addData(item);
    this.view.render(this.model.getData());
  }
}

// Utilisation du MVC
const model = new Model();
const view = new View();
const controller = new Controller(model, view);

// Ajout de données
controller.addData("Donnée 1");
controller.addData("Donnée 2");
*/

console.log("----------------------------------------");

// Exemple 2 de la vidéo
/*
// Modèle
class Model {
  constructor() {
    this.tasks = [];
  }

  addTask(task) {
    this.tasks.push(task);
  }

  getTasks() {
    return this.tasks;
  }
}

// Vue
class View {
  constructor() {}

  render(tasks) {
    console.log(`Liste des tâches: ${JSON.stringify(tasks)}`);
  }
}

// Controleur
class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  addTask(task) {
    this.model.addTask(task);
    this.view.render(this.model.getTasks());
  }
}

// Utilisation du MVC
const model = new Model();
const view = new View();
const controller = new Controller(model, view);

// Ajout de tâches
controller.addTask("Acheter du lait");
controller.addTask("Payer les factures");
*/

console.log("----------------------------------------");

// Exemple 3
/*
// Récepteur
class Receiver {
  constructor() {}

  action() {
    console.log("Action effectuée.");
  }
}

// Commande
class Command {
  constructor(receiver) {
    this.receiver = receiver;
  }

  execute() {
    console.log("Commande exécutée.");
    this.receiver.action();
  }

  undo() {
    console.log("Commande annulée.");
  }
}

// Invocateur
class Invoker {
  constructor() {
    this.commands = [];
  }

  setCommand(command) {
    this.commands.push(command);
  }

  executeCommands() {
    this.commands.forEach((command) => {
      command.execute();
    });
  }

  undoCommands() {
    this.commands.reverse().forEach((command) => {
      command.undo();
    });
  }
}

// Utilisation de Command
const receiver = new Receiver();
const command1 = new Command(receiver);
const command2 = new Command(receiver);
const invoker = new Invoker();

// Configuration des commandes pour l’invocateur
invoker.setCommand(command1);
invoker.setCommand(command2);

// Exécution des commandes
invoker.executeCommands();

// Annulation des commandes
invoker.undoCommands();
*/

console.log("----------------------------------------");

// Exemple 4
/*
class PersonCollection {
  constructor() {
    this.persons = [];
  }

  addPerson(person) {
    this.persons.push(person);
  }

  getIterator() {
    return new PersonIterator(this.persons);
  }
}


class PersonIterator {
  constructor(persons) {
    this.index = 0;
    this.persons = persons;
  }

  hasNext() {
    return this.index < this.persons.length;
  }

  next() {
    const person = this.persons[this.index];
    this.index++;
    return person;
  }
}


class Person {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
}

const personCollection = new PersonCollection();
personCollection.addPerson(new Person("Alice", 25));
personCollection.addPerson(new Person("Bob", 30));
personCollection.addPerson(new Person("Charlie", 35));

const iterator = personCollection.getIterator();

while (iterator.hasNext()) {
  const person = iterator.next();
  console.log(person.name + ", " + person.age + " ans");
}
*/

console.log("----------------------------------------");

// Exemple 5
/*
class Memento {
  constructor(state) {
    this.state = state;
  }

  getState() {
    return this.state;
  }

  setState(state) {
    this.state = state;
  }
}

class Caretaker {
  constructor(originator) {
    this.originator = originator;
    this.mementos = [];
  }

  save() {
    const state = this.originator.getState();
    const memento = new Memento(state);
    this.mementos.push(memento);
  }

  undo() {
    const memento = this.mementos.pop();
    this.originator.setState(memento.getState());
  }
}

class Originator {
  constructor(state) {
    this.state = state;
  }

  getState() {
    return this.state;
  }

  setState(state) {
    this.state = state;
  }
}

const originator = new Originator("état initial");
const caretaker = new Caretaker(originator);

console.log(originator.getState());  // affiche "état initial"

caretaker.save();
originator.setState("état modifié");
caretaker.save();

console.log(originator.getState()); // affiche "état modifié"

caretaker.undo();
console.log(originator.getState()); // affiche "état modifié"
*/

console.log("----------------------------------------");

// Exemple 6
/*
  const { Observable } = rxjs;
  const observable = new Observable((observer) => {
    const intervalId = setInterval(() => {
      const random = Math.random();
      observer.next(random);
    }, 1000);

    return () => {
      clearInterval(intervalId);
    };
  });

  observable.subscribe((value) => {
    console.log(value);
  });
*/

console.log("----------------------------------------");

// Exemple 7 de la video
/*
import { Observable } from 'rxjs';

const observable = new Observable((observer) => {
  observer.next('Hello');
  observer.next('World');
  observer.complete();
});

observable.subscribe((value) => console.log(value));
*/

console.log("----------------------------------------");

// Exemple 8
/*
import { Observable, interval } from 'rxjs';
import { map, filter, take } from 'rxjs/operators';

// Crée un Observable qui émet des nombres entiers à intervalles réguliers
const source = interval(1000);

// Applique les opérateurs map, filter et take à l’Observable
const transformed = source.pipe(
  map((value) => value * 2),
  filter((value) => value % 3 === 0),
  take(5)
);

// Affiche les valeurs émises par l’Observable transformé
transformed.subscribe((value) => console.log(value));
*/

console.log("----------------------------------------");

// Exemple 9
/*
import { BehaviorSubject } from 'rxjs';

// Crée un BehaviorSubject avec une valeur initiale
const subject = new BehaviorSubject('Hello');

// Les observateurs peuvent s’abonner au BehaviorSubject
const observer1 = {
  next: value => console.log('Observer 1:', value),
};

const observer2 = {
  next: value => console.log('Observer 2:', value),
};

// Lorsqu’un observateur s’abonne, il reçoit immédiatement la dernière valeur émise
subject.subscribe(observer1); // Affiche "Observer 1: Hello"

// La valeur du BehaviorSubject peut être mise à jour
subject.next('World');

// Les observateurs actifs reçoivent la nouvelle valeur
// Affiche "Observer 1: World"

// Les nouveaux observateurs reçoivent également la dernière valeur émise lorsqu’ils s’abonnent
subject.subscribe(observer2); // Affiche "Observer 2: World"
*/

console.log("----------------------------------------");

// Exemple 10 de la video
/*
import { from } from 'rxjs';

// Crée un tableau
const items = [1, 2, 3, 4, 5];

// Crée un Observable à partir du tableau
const observable = from(items);

// Un observateur qui affiche les valeurs émises
const observer = {
  next: value => console.log(value),
  error : err => console.error(err),
  complete: () => console.log('Terminé'),
};

// S’abonne à l’Observable et affiche les valeurs émises
observable.subscribe(observer);
// Affiche :
// 1
// 2
// 3
// 4
// 5
// Terminé
*/

console.log("----------------------------------------");
