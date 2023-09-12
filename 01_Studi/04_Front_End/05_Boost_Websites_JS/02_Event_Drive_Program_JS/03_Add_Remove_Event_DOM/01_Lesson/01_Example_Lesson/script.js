// Exemple 1
/*
// Sélection de l'élément ayant pour attribut id="button"
var element = document.getElementById('button'); 

// Sélection de l'élément ayant pour attribut name="text"
var element = document.getElementsByName('text'); 

//Sélection de l'élément étant une balise HTML span
var element = document.getElementsByTagName('span');

//Sélection de l'élément ayant pour attribut class="title"
var element = document.getElementsByClassName('title');

//Sélection de l'ément ayant pour classe css .class-css
var element = document.querySelector('.class-css');
*/

console.log('-----------------------------------------------')

// Exemple 2
/*
document.getElementById('myDiv').getElementsByTagName('p')
*/

console.log('-----------------------------------------------')

// Exemple 3
/*
const button = document.getElementById('button')

button.addEventListener('click', maFonction)
*/

console.log('-----------------------------------------------')

// Exemple 4
/*
const button = document.getElementById('button')

button.removeEventListener('click', maFonction)
*/

console.log('-----------------------------------------------')

// Exemple 5
/*
element.addEventListener("click", clickMe);


element.removeEventListener("click", myFunction);   // Ne fonctionnera pas car le paramètre listener n'est pas le même
element.removeEventListener("mousedown", clickMe);  // Ne fonctionnera pas car le paramètre type n'est pas le même
element.removeEventListener("click", clickMe);      // Fonctionnera
*/

console.log('-----------------------------------------------')

// Exemple 6
/*
var element = document.getElementById('event')

element.addEventListener('click', function(e) {
  var initElem = e.target;
    if(initElem.className == 'no-event'){
        return;
    }
    alert("Actif seulement sur Délégation 2")
})
*/

console.log('-----------------------------------------------')

// Exemple 7
/*
element.addEventListener('click', functionEvent, true)
element.removeEventListener('click', functionEvent, true)
*/