// Exemple 1
/*
$('#bases') // Sélectionne <div id="bases">
*/

console.log('-----------------------------------------------')

// Exemple 2
/*
// Sélection du paragraphe contenu dans la div.
$('div p')) // Sélection de la balise div puis de la balise p.
$('#content p')) // Sélection de l'élément portant l'id #content puis de la balise p.
*/

console.log('-----------------------------------------------')

// Exemple 3
/*
$('#content:first-child') // Sélectionnera également le paragraphe, 1er enfant de la div #content.
*/

console.log('-----------------------------------------------')

// Exemple 4
/*
$('h1, h2, h3, .titre') // Sélectionnera les balises h1, h2 et h3 ainsi que les éléments ayant la classe .titre
*/

console.log('-----------------------------------------------')

// Exemple 5
/*
$('#content p').text('Bonjour tout le monde !')
*/

console.log('-----------------------------------------------')

// Exemple 6
/*
$('#content p').html(function() {
    $(this).text('Bonjour tout le monde !')
})
*/

console.log('-----------------------------------------------')

// Exemple 7
/*
$('#content')
*/

console.log('-----------------------------------------------')

// Exemple 8
/*
$('.content')
*/

console.log('-----------------------------------------------')

// Exemple 9
/*

*/