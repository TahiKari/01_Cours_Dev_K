//Element.attributes
//Cette propriété nous permet d'accéder à une liste d'attributs déclarés dans le nœud spécifié. Nous l'utiliserons pour parser l'ensemble des attributs d'une balise HTML.
/*let lastname = document.getElementById('lastname')
console.log(lastname.attributes)*/
//attributes nous permet d'obtenir tous les attributs du champ du formulaire. Grâce à une boucle, nous pouvons accéder à chacun d'entre eux.

//Element.getAttribute('name')
//Cette méthode nous renvoie la valeur de l'attribut passé en paramètre, s'il existe dans le DOM. Nous l'utiliserons pour accéder à la valeur d'un attribut en particulier d'un élément.
/*let lastname = document.getElementById('lastname')
let attributName = lastname.getAttribute('name')
console.log(`Valeur de l'attribut name = ${attributName}`) // Affiche la valeur de l'attribut name soit lastname*/
//getAttribute nous permettra de filtrer les résultats d'une recherche dans le DOM. Par exemple, nous pourrons sélectionner toutes les balises input d'un formulaire, sauf celles qui possèdent l'attribut class="info".

//Element.getAttributeNames()
//Cette méthode nous renvoie une liste des noms d'attributs d'un élément du DOM.
/*let lastname = document.getElementById('lastname')
console.log(lastname.getAttributeNames())*/
//getAttributeNames() nous permettra de vérifier qu'un élément possède bien un attribut, par exemple qu'une balise input possède bien l'attribut type.

//Element.getAttributeNode('id')
//Cette méthode nous renvoie le nœud d'attribut spécifié en paramètre. Nous l'utiliserons pour accéder à un élément attribut en particulier dans le DOM.
/*let lastname = document.getElementById('lastname')
console.log(lastname.getAttributeNode('id'))*/
//Nous obtenons le nœud attribut id correspondant à la balise input avec l'ID #lastname.

//Element.hasAttribute('id')
//Cette méthode nous renvoie une valeur booléenne (vrai ou faux) si l'élément possède le nom d'attribut passé en paramètre. Nous l'utiliserons pour filtrer notre résultat de recherche dans le DOM ou bien pour associer des scripts à certains éléments et d'autres non.

/*let elements = document.getElementsByTagName('li')

for(let element of elements) {
  if (element.hasAttribute('class')) {
    console.log(element.innerText)
  }
}*/
//Nous obtenons tous les éléments correspondant aux balises li, sauf celle qui n'a pas l'attribut class.

//Element.hasAttributes()
//Cette méthode nous renvoie une valeur booléenne (vrai ou faux) si l'élément possède au moins un attribut ou aucun. Là aussi, nous pourrons l'utiliser pour filtrer nos résultats de recherche dans le DOM et pour associer ou non des scripts à certains éléments.
/*let elements = document.getElementsByTagName('ul')
for(let element of elements) {
  console.log(element.hasAttributes())
}*/
//La balise ul ne possède aucun attribut : hasAttributes nous renvoie donc la valeur false.

//L'un des intérêts de pouvoir parcourir et sélectionner les attributs du DOM est d'en ajouter, de les modifier ou les supprimer. Pour ce faire, nous pourrons utiliser deux méthodes de l'API : setAttribute('name', 'valeur') et removeAttribute('name').
//setAttribute nous permettra d'ajouter un nouvel attribut ou de modifier un attribut existant en précisant en paramètres le nom de l'attribut, puis sa valeur.
/*let checkbox = document.getElementById('box')
checkbox.setAttribute('checked', 'checked')*/
//removeAttribute nous permettra de supprimer un attribut en précisant en paramètre son nom.
let checkbox = document.getElementById('box')
checkbox.removeAttribute('checked')