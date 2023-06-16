class Event {
  
  constructor(titre, date, description) {
    this.titre = titre;
    this.date = new Date(date);
    this.description = description;
  }

  affEvent() {
    let dateFormated = this.date.toLocaleDateString("fr-FR"); //Nous formatons la date avec la locale française.
    console.log(`-------- ${dateFormated} --------\nTitre de l’évènement : ${this.titre}\nDescription : ${this.description}`);
  }
}

const event = new Event("rdv medical", "2023-12-10T14:30:00", "visite medicale");

event.affEvent();