// Exemple 1
/*
var checkbox = document.getElementById('check')

checkbox.addEventListener('change', () => {
  alert(event.target.checked) // True si coché, sinon false 
})
*/

console.log("-----------------------------------------------")

// Exemple 2
/*
var btnradio = document.getElementsByName('gender')

for (var count=0; count<btnradio.length; count++) {
    btnradio[count].addEventListener('change', (event) => {
        alert(`Choix : ${event.target.value}`);
    });
}
*/

console.log("-----------------------------------------------")

// Exemple 3
/*
event.target.value = "Femme"
*/

console.log("-----------------------------------------------")

// Exemple 4
/*
var language = document.getElementById('language')

language.addEventListener('change', (event) => {
  alert(event.target.value)
})
*/

console.log("-----------------------------------------------")

// Exemple 5
/*
event.target.value = "php"
*/