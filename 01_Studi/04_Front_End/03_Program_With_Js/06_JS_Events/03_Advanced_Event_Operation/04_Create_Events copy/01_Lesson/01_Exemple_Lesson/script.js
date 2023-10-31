// Exemple 1
/*
const parent = document.querySelector('#parent');
const enfant = document.querySelector('#enfant');

parent.addEventListener('click', function() {
  console.log('Parent');
});

enfant.addEventListener('click', function(event) {
  console.log('Enfant');
  event.stopPropagation();
});
*/

console.log('----------------------------------------')

// Exemple 2 de la vidéo
const parent = document.getElementById('parent')
const enfant = document.getElementById('enfant')

parent.addEventListener('click', (event) => {
    alert("click sur le parent")
})
enfant.addEventListener('click', (event) => {
    alert("click sur l'enfant")
    event.stopPropagation()
})