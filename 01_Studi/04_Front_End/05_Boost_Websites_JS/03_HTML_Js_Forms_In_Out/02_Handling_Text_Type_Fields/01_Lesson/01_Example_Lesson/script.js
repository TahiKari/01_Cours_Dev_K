// Exemple 1
/*
var shorttxt = document.getElementById('short-txt')
var longtxt = document.getElementById('long-txt')

// Accès à la valeur par la propriété value
console.log(shorttxt.value, longtxt.value)
*/

console.log("-----------------------------------------------")

// Exemple 2
/*
var longtxt = document.getElementById('long-txt')

longtxt.value = 'Un texte modifié !'

console.log(shorttxt.value, longtxt.value)
*/

console.log("-----------------------------------------------")

// Exemple 3
/*
var txtfocus = document.getElementById('txt-focus')
var txtblur = document.getElementById('txt-blur')

txtfocus.addEventListener('focus', (event) => {
  event.target.style.background = 'blue'
})

txtblur.addEventListener('blur', (event) => {
  alert('blur')
})
*/

console.log("-----------------------------------------------")

// Exemple 4
/*
let txtblur = document.querySelector('#txt-blur')
txtblur.focus() // Cible le champ txtblur
let txtfocus = document.querySelector('#txt-focus')
txtfocus.blur() // Permet de ne plus cibler le champ txtfocus
*/