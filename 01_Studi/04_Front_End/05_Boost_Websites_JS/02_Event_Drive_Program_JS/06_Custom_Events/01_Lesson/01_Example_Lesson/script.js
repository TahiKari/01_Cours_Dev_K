// Exemple 1
/*
const myEvent = new Event('personnalEvent');
element.dispatchEvent(myEvent);
*/

console.log("-----------------------------------------------")

// Exemple 2
/*
const event = new CustomEvent('personnalEvent', { detail : { 'myData': 'mon événement perso' } })
const element = document.getElementById('navbar')

element.addEventListener('personnalEvent', displayMe)

element.dispatchEvent(event)

function displayMe(e) {
  console.log(e.detail.myData)
}
*/

console.log("-----------------------------------------------")

// Exemple 3
/*
new Event('monEvenement')
*/

console.log("-----------------------------------------------")

// Exemple 4
/*
new CustomEvent('monEvenementCustom', { detail : { 'tag': 'événement custom' } })
*/