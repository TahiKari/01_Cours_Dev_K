// Permet de récuperer l'input
/*const lastname = document.getElementById('lastname')*/

// Permet d'ittérer et d'avoir la liste
/*for (let attribute of lastname.attributes) {
    console.log(attribute)
}*/

/*for (let attribute of lastname.attributes) {
    // Permet de récupérer le nom de l'attribut
    console.log(attribute.name)
    // permet de récupérer la liste de toutes nos valeur au niveau des attributs
    console.log(attribute.textContent)
}*/

// permet de récupérer un attribut en particulier dont on connais déjâson nom
/*const attributeName = lastname.getAttribute('name')
console.log(attributeName)*/

// permet de récupérer la liste de tous les noms d'attribut
/*for (let attribute of lastname.getAttributeNames()) {
    console.log(attribute)
}*/

// Permet de récupérer le type de l'attribut avec sa valeur
/*console.log(lastname.getAttributeNode('id').value)*/

// méthode 1: permet de vérifier si un noeud possède un attribut
/*const elements = document.getElementsByTagName('li')

/*for (let element of elements) {
    if (element.hasAttribute('class')) {
        console.log(element.innerText)
    }
}*/

// méthode 2: permet de vérifier si un noeud possède un attribut
/*for (let element of elements) {
    if (element.hasAttributes()) {
        console.log(element.innerText)
    }
}*/


const checkbox = document.getElementById('box')

// permet de un attribut et dans l'exemple faire en sorte que la checBox soit checked par defaut et en rajoutant dans l'html dans l'input checkbox checked on a juste a supprimmer la ligne de code  pour qu'il soit aussi automatiquement checked
/*checkbox.setAttribute('checked', 'checked')*/

// Permet de supprimer un attribut
checkbox.removeAttribute('checked')




