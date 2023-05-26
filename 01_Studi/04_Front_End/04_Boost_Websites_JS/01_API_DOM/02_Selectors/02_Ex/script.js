// Paragraphe avec l'id #titre
let p = document.getElementById('titre')
console.log(p)

// Tous les éléments avec la classe .info
let infos = document.getElementsByClassName('info')
console.log(infos)

// Input email
let input = document.getElementsByName('email')
console.log(input)

// Les éléments span de la div avec l'id #contenu
let spans = document.getElementById('contenu').getElementsByTagName('span')
console.log(spans)

// Les éléments avec le sélecteur CSS div#contenu span
let element = document.querySelectorAll('div#contenu span')
console.log(element)