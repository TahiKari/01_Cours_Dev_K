/*const workers = [
  {name: 'Benjamin', age: 25, nbHour: 35},
  {name: 'Luc', age: 45, nbHour: 36},
  {name: 'Marie', age: 23, nbHour: 35},
  {name: 'Jeanne', age: 36, nbHour: 30},
  {name: 'Jean', age: 37, nbHour: 35}
];

workers.forEach((worker) => {
  worker.alert = function() {
    return `employé: ${this.name}, heures: ${this.nbHour}`;
  };
});

// Exemple d'utilisation de la méthode "alert" pour tous les employés
for (let i = 0; i < workers.length; i++) {
  alert(workers[i].alert());
}*/

// On ajoute à chaque objet une méthode qui retournera l'alerte
const workers = [
  {name: 'Benjamin', age: 25, nbHour: 35, alert: function () {return `employé: ${this.name}, heures: ${this.nbHour}`}},
  {name: 'Luc', age: 45, nbHour: 36, alert: function () {return `employé: ${this.name}, heures: ${this.nbHour}`}},
  {name: 'Marie', age: 23, nbHour: 35, alert: function () {return `employé: ${this.name}, heures: ${this.nbHour}`}},
  {name: 'Jeanne', age: 36, nbHour: 30, alert: function () {return `employé: ${this.name}, heures: ${this.nbHour}`}},
  {name: 'Jean', age: 37, nbHour: 35, alert: function () {return `employé: ${this.name}, heures: ${this.nbHour}`}}
]

let alerte = '';

for (let i = 0; i < workers.length; i++) {
if (workers[i].nbHour !== 35) {
// On ajoute le message d'alerte à la variable alerte
alerte += `${workers[i].alert()} \n`;
}
}

alert(alerte);





