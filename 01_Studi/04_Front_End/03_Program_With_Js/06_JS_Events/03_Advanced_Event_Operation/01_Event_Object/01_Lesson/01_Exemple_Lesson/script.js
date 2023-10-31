// Exemple 1
/*
    const input = document.getElementById('myInput');

    input.addEventListener('keyup', function(event) {
      if (event.key === 'Enter') {
        console.log('La touche "Entrée" a été pressée !');
      }
    });
*/

console.log('----------------------------------------')

// Exemple 2 de la vidéo
const myInput = document.getElementById('myInpunt')
myInput.addEventListener('keyup', (event) => {
    if (event.key == 'Enter') {
        alert(myInput.value)
    }
})