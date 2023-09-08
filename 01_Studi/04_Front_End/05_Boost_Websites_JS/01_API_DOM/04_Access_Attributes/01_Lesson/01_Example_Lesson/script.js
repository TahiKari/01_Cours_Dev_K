// Exemple 1
/*
let lastname = document.getElementById('lastname')

console.log(lastname.attributes)
*/

console.log("-----------------------------------------------")

// Exemple 2
/*
let lastname = document.getElementById('lastname')
let attributName = lastname.getAttribute('name')
console.log(`Valeur de l'attribut name = ${attributName}`) // Affiche la valeur de l'attribut name soit lastname
*/

console.log("-----------------------------------------------")

// Exemple 3
/*
let lastname = document.getElementById('lastname')

console.log(lastname.getAttributeNames())
*/

console.log("-----------------------------------------------")

// Exemple 4
/*
let lastname = document.getElementById('lastname')
console.log(lastname.getAttributeNode('id'))
*/

console.log("-----------------------------------------------")

// Exemple 5
/*
let elements = document.getElementsByTagName('li')

for(let element of elements) {
  if (element.hasAttribute('class')) {
    console.log(element.innerText)
  }
}
*/

console.log("-----------------------------------------------")

// Exemple 6
/*
let elements = document.getElementsByTagName('ul')

for(let element of elements) {
  console.log(element.hasAttributes())
}
*/

console.log("-----------------------------------------------")

// Exemple 7
/*
let checkbox = document.getElementById('box')
checkbox.setAttribute('checked', 'checked')
*/

console.log("-----------------------------------------------")

// Exemple 8
/*
let checkbox = document.getElementById('box')
checkbox.removeAttribute('checked')
*/