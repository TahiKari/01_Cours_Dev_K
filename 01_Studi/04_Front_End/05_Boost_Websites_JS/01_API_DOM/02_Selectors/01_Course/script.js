/*const lis = document.getElementsByTagName('li')// Permet de selectionner les balises dans cet exemple c'est la balise (li)
console.log(lis[2].innerText) // Selectionne comme un tableau le 3ème élément du tableau de la balise (ul) et innertText permet d'affiche dans la console le contenu du 3ème élément de la liste*/

/*const li = document.getElementById('object') // Permet de récupérer un Id du HTML en spécifiant son nom d'Id
console.log(li.innerText) // Affiche la balise Ayant un Id ainsi que son contenue avec innerText*/

/*const lis = document.getElementsByClassName('document') // Permet de récupérer toutes les balises ayant une class
console.log(lis[1].innerText) // Permet d'afficher le 2ème élément ainsi que son contenu */

/*const lis = document.getElementsByName('model') // Permet de récupérer un élément grace à l'attribut (name)
console.log(lis[0].innerText)*/

/*const object =document.querySelector('#object') // Permet de récupérer un élément en tapant le nom du selecteur précéder d'un #
console.log(object) // Affiche l'élément object*/

/*const object = document.querySelector('ul .document') // Permet de récupérer un élément ul 
console.log(object.innerText) // Affiche le conetnue de l'élément document  */

/*const object = document.querySelector('ul li') // PPermet de récupérer les éléments li de la liste ul
console.log(object.innerText) // Affiche le conetnue de l'élément document  */

/*const lis = document.querySelectorAll('ul li') // Permet de récupérer tout le contenu de ul 
console.log(lis[0].innerText) // Affiche le contenu desbalise li contenu dans ul */

const elements = document.querySelector('div').getElementsByTagName('li')  // méthode d'enchainement de selecteur qui permet de réduire petit a petit le scope de notre recherche
console.log(elements)