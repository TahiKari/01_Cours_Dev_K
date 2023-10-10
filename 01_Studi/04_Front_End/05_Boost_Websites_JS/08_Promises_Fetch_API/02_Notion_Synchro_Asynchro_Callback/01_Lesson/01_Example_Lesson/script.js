// Exemple 1
/*
<code>
// console.log() est une fonction synchrone
console.log('a');
console.log('b');
console.log('c');
// => les lettres a, b et c seront systématiquement affichées dans l'ordre
<code>
*/

console.log("-----------------------------------------------")

// Exemple 2
/*
// setTimeout() est asynchrone : le reste du script va pouvoir s'exécuter sans avoir à attendre la fin de l'exécution de setTimeout()
 
setTimeout(alert, 5000, 'Message affiché après 5 secondes');

//Cette alerte sera affichée avant celle définie dans setTimeout()
alert('Suite du script');
*/

console.log("-----------------------------------------------")

// Exemple 3
/*
<code>
const button = document.querySelector('button')
button.addEventListener('click', function(e) {
  // Adds clicked class to button
  this.classList.add('clicked')
})
</code>
*/

console.log("-----------------------------------------------")

// Exemple 4
/*
<code>
const button = document.querySelector('button')
// Function that adds 'clicked' class to the element
function clicked (e) {
  this.classList.add('clicked')
}

// Adds click function as a callback to the event listener
button.addEventListener('click', clicked)
</code>
*/

console.log("-----------------------------------------------")

// Exemple 5
/*
<code>
// Create a function that accepts another function as an argument
const callbackAcceptingFunction = (fn) => {
  // Calls the function with any required arguments
  return fn(1, 2, 3)
}

// Callback gets arguments from the above call
const callback = (arg1, arg2, arg3) => {
  return arg1 + arg2 + arg3
}

// Passing a callback into a callback accepting function
const result = callbackAcceptingFunction(callback)
console.log(result) // 6

</code>
*/

console.log("-----------------------------------------------")

// Exemple 6
/*
const makeBurger = nextStep => {
  getBeef(function (beef) {
    cookBeef(beef, function (cookedBeef) {
      getBuns(function (buns) {
        putBeefBetweenBuns(buns, beef, function(burger) {
          nextStep(burger)
        })
      })
    })
  })
}

// Make and serve the burger
makeBurger(function (burger) => {
  serve(burger)
})
*/