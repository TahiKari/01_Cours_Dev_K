// Ma solution 1

/*
window.addEventListener('load', () => {
  alert('Bonjour, bienvenue sur mon site ! ')
})
*/

console.log('------------------------------------')

// Ma solution 2
/*
window.addEventListener('load', () => {
  let userName = prompt('Entrez votre nom d\'utilisateur')
  alert('Bienvenue ' + userName)
})
*/

// Ou

/*
let nom = prompt("Quel est votre nom ?");
console.log("Bienvenue " + nom);
*/

console.log('------------------------------------')

// Ma solution 3
/*
let button = document.createElement('button')

button.innerHTML = 'button'

document.body.appendChild(button)

//code
button.addEventListener('click', () => {
  window.open('https://www.google.com', 'google', 'width=500, height=500')
})
*/

console.log('------------------------------------')

// Ma solution 4
/*
let close = document.createElement('button');

close.innerHTML = "close";

document.body.appendChild(close);

// code
close.addEventListener('click', ()=> {
  window.close()
})
console.log('------------------------------------')
*/


// Ma solution 5
let open = document.createElement('button');

open.innerHTML = "open";

document.body.appendChild(open);

// code
let url = prompt("Entrez l'URL :")
open.addEventListener('click', () => {
  window.open(url)
})