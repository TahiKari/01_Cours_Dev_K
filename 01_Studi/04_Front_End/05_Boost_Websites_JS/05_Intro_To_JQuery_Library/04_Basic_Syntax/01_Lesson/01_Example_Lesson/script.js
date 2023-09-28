// Exemple 1
/*
$('monSelecteur').methode()
*/

console.log("-----------------------------------------------")

// Exemple 2
/*
document.querySelector('#content')
*/

console.log("-----------------------------------------------")

// Exemple 3
/*
$('#content')
*/

console.log("-----------------------------------------------")

// Exemple 4
/*
$('div') // Sélection de la div par son nom de balise.
$('#content') // Sélection de la div par son attribut id #content
$('.content-div') // Sélection des div par la classe .content-div
*/

console.log("-----------------------------------------------")

// Exemple 5
/*
$('#content p').html('<b>Ajoutons un élément avec du HTML</b>')
$('#content p').css('color', 'red') // Donnons une couleur à notre paragraphe
*/

console.log("-----------------------------------------------")

// Exemple  6
/*
$('#content p').click(function() {
  alert('Clique sur le paragraphe')
})
*/

console.log("-----------------------------------------------")

// Exemple  7
/*
$('#content p').text('Bonjour tout le monde !').css('color', 'blue')
*/