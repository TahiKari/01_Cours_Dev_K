// Exemple 1
/*
const button = document.getElementById('button');

function evenement() {
  alert('Vous avez cliqué sur le bouton');
}

button.addEventListener('click', evenement);
*/

console.log("-----------------------------------------------")

// Exemple 2
/*
const key = document.getElementById('key');

function keyboard() {
  alert('Vous venez d\'appuyer sur une touche du clavier');
}

key.addEventListener('keydown', keyboard);
*/

console.log("-----------------------------------------------")

// Exemple 3
/*
const form = document.getElementById('form');

function form() {
  alert('Vous êtes sur le point de soumettre le formulaire');
}

form.addEventListener('submit', form);
*/

console.log("-----------------------------------------------")

// Exemple 4
/*
let btn = document.querySelector('#btn');

btn.addEventListener('click', function(event) {
    console.log(event.type); //retourne ‘click’
});
*/

console.log("-----------------------------------------------")

// Exemple 5
/*
let link = document.querySelector('a');

link.addEventListener('click',function(event) {
    console.log('clicked');
    event.preventDefault();
});
*/