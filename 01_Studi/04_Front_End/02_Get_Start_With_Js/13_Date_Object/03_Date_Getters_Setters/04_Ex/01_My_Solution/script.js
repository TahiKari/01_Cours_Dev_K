// Ma solution 1
/*
const date = new Date (2023, 2, 1, 10, 30, 12);

let heure = `${date.getHours()} heures et ${date.getMinutes()} minutes`;

console.log(heure);
*/

console.log('---------------------------------------')

// Ma solution 2
/*
const date = new Date (2023, 4, 1);

date.setDate(28)

console.log(date.toLocaleDateString());
*/

console.log('---------------------------------------')

// Ma solution 3
/*
class Evenement {
  constructor (date, evenement) {
    this.date = date
    this.evenement = evenement
  }

  getResume () {
    console.log(
      this.date.getDate() + '/' + this.date.getMonth() + ' : ' + this.evenement
    )
  }
}

const dt = new Date(2023, 10, 20)

const event = new Evenement(dt, 'rdv medical')

event.getResume() //appel de la méthode
*/

console.log('---------------------------------------')

// Ma solution 4
/*
const date = new Date (2023, 10, 2);

date.setFullYear(2024)

console.log(date.toLocaleDateString());
*/

console.log('---------------------------------------')

// Ma solution 5
/*
const date = new Date ("2023-12-01T14:30:00+04:00");

console.log(date.getUTCHours());
*/