// Exemple 1
/*
const parent = document.getElementById('parent');
    const children = document.getElementById('children');

    parent.addEventListener('click', () => {
      alert('parent')
    })

    children.addEventListener('click', () => {
      alert('children')
})
*/

console.log('-----------------------------------------------')

// Exemple 2
/*
const parent = document.getElementById('parent');
const children = document.getElementById('children');

parent.addEventListener('click', () => {
   alert('parent')
})

// event en parametre de la fonction de callback représente l'évènement.
children.addEventListener('click', (event) => {
   event.stopPropagation();
   alert('children')
})
*/

console.log('-----------------------------------------------')

// Exemple 3
/*
const parent = document.getElementById('parent');
const children = document.getElementById('children');

parent.addEventListener('click', () => {
   alert('parent')
}, true)

children.addEventListener('click', () => {
   alert('children')
}, true)
*/