// Exemple 1
/*
const button = document.getElementById("bouton");

button.addEventListener('click', () => {
  window.open("destination.html");
});
*/

console.log('----------------------------------------')

// Exemple 2
/*
const button = document.getElementById("bouton");

button.addEventListener('click', () => {
  window.open("destination.html", 'destination', 'width=500, height=500');
});
*/

console.log('----------------------------------------')

// Exemple 3

const button = document.getElementById('bouton')

button.addEventListener('click', () => {
  let fenetre = window.open(
    'destination.html',
    'destination',
    'width=500, height=500'
  )

  fenetre.addEventListener('load', () => {
    let button2 = fenetre.document.getElementById('bouton2')

    button2.addEventListener('click', () => {
      fenetre.close()
    })
  })
})


console.log('----------------------------------------')

// Exemple 4
/*
const button = document.getElementById('bouton')

button.addEventListener('click', () => {
  window.alert('Message') //ou alert("Message")
})
*/

console.log('----------------------------------------')

// Exemple 5
/*
const button = document.getElementById("bouton");

button.addEventListener('click', () => {
  let mot = window.prompt("Quel mot afficher ?");
  window.alert(mot);
});
*/

console.log('----------------------------------------')

// Exemple 6
/*
const button = document.getElementById("bouton");

button.addEventListener('click', () => {
  let mot = window.prompt("Quel mot afficher ?", "mot de votre choix");
  window.alert(mot);
});
*/
