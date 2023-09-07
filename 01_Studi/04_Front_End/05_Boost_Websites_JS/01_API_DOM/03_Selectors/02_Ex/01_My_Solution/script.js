// Ma solution

// Le paragraphe ayant pour ID #titre
let p = document.getElementById('titre')

// Tous les éléments ayant la classe .info
let infos = document.getElementsByClassName('infos')

// Le champ d'un formulaire ayant pour attribut name email
let input = document.getElementsByName('email')

// Les balises span contenues dans la div ayant l'ID #contenu
let span = document.getElementById('contenu').getElementsByTagName('span')

// Les éléments ayant pour sélecteur CSS div#contenu span
let element = document.querySelectorAll('div#contenu span')