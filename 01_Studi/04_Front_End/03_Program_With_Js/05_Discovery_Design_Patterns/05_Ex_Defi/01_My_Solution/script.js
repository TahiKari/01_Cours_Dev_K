// Ma solution 1
/*
class Projet {
  constructor() {
    if (!Projet.instance) {
      this._taches = [];
      Projet.instance = this;
    }
    return Projet.instance;
  }

  ajouterTache(tache) {
    this._taches.push(tache);
  }

  supprimerTache(titre) {
    this._taches = this._taches.filter((tache) => tache.titre !== titre);
  }

  recupererTache(titre) {
    return this._taches.find((tache) => tache.titre === titre);
  }
}

// Une autre façon de faire un Singleton, sans méthode “getInstance”
const projet = new Projet();
*/

// Ma solution 2
/*
class Tache {
  constructor(titre, description, statut = "en attente") {
    this._titre = titre;
    this._description = description;
    this._statut = statut;
  }

  get titre() {
    return this._titre;
  }

  get statut() {
    return this._statut;
  }

  set statut(nouveauStatut) {
    this._statut = nouveauStatut;
  }
}
*/

console.log("------------------------------------");

// Ma solution 3
/*
import { BehaviorSubject } from "rxjs";

class Tache {
  constructor(titre, description, statut = "en attente") {
    this._titre = titre;
    this._description = description;
    this._statut = statut;
    this._subject = new BehaviorSubject({
      titre: this._titre,
      statut: this._statut,
    });
  }

  //…
  set statut(nouveauStatut) {
    this._statut = nouveauStatut;
    this._subject.next({ titre: this._titre, statut: this._statut });
  }

  subscribe(observer) {
    this._subject.subscribe(observer);
  }
}

const tache = new Tache("Tache 1", "Description");
const observer = {
  next: (data) =>
    console.log(
      `La tâche "${data.titre}" a un nouveau statut : ${data.statut}`
    ),
  error: (err) => console.error(err),
  complete: () => console.log("Terminé"),
};

tache.subscribe(observer);
tache.statut = "en cours";
*/

console.log("------------------------------------");

// Ma solution 4
/*
const tache1 = new Tache('Tache 1', 'Première tâche');
const tache2 = new Tache('Tache 2', 'Deuxième tâche');
const tache3 = new Tache('Tache 3', 'Troisième tâche');

const observer = {
next: data => console.log(`La tâche "${data.titre}" a un nouveau statut : ${data.statut}`),
error: err => console.error(err),
complete: () => console.log('Terminé')
};

tache1.subscribe(observer);
tache2.subscribe(observer);
tache3.subscribe(observer);

projet.ajouterTache(tache1);
projet.ajouterTache(tache2);
projet.ajouterTache(tache3);

tache1.statut = 'en cours';
tache2.statut = 'terminée';
tache3.statut = 'en attente';

console.log(projet.recupererTache('Tache 1'));
console.log(projet.recupererTache('Tache 2'));
console.log(projet.recupererTache('Tache 3'));

projet.supprimerTache('Tache 2');
console.log(projet.recupererTache('Tache 2'));
*/

console.log("------------------------------------");
