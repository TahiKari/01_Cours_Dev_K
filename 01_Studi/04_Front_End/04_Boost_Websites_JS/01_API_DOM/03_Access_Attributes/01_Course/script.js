//Element.attributes
//Cette propriété nous permet d'accéder à une liste d'attributs déclarés dans le nœud spécifié. Nous l'utiliserons pour parser l'ensemble des attributs d'une balise HTML.
/*const lastname = document.getElementById('lastname')
for (let attribute of lastname.attributes) {
  console.log(attribute.textContent) // Affiche toutes les valeur des attributs
  console.log('--------------')
  console.log(attribute.name) // Affiche le nom de l'attribut
}*/

/*const lastname = document.getElementById('lastname')
const attributeName = lastname.getAttribute('name') // Permet de récupérer un attribue en particulier que ou l'on connais déjâ son nom
console.log(attributeName)*/

/*const lastname = document.getElementById('lastname')
for (let attribute of lastname.getAttributeNames()) {
  console.log(attribute)
} // Permet de récupérer la liste de tout les noms d'attributs*/

/*const lastname = document.getElementById('lastname')
console.log(lastname.getAttributeNode('id').value)// Permer de récupérer le type de l'attribut avec sa valeur*/

/*const elements = document.getElementsByTagName('li')
for (let element of elements) {
  if (element.hasAttribute('class')) {
    console.log(element.innerText)
  }
}// Permet de vérifier qu'un noeud possède un attribut*/

/*const elements = document.getElementsByTagName('li')
for (let element of elements) {
  if (element.hasAttributes()) {
    console.log(element.innerText)
  }
}// Permet de vérifier qu'un noeud possède des attributs en général*/

// modification d'attribut
/*const checkbox = document.getElementById('box')
checkbox.setAttribute('checked', 'checked')// Permet de faire que la checkbox soit coché de base si elle ne l'est pas fait dans le HTML*/

const checkbox = document.getElementById('box')
checkbox.removeAttribute('checked')