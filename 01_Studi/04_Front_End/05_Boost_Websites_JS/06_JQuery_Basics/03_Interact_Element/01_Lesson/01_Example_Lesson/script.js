// Exemple 1
/*
$(document).ready(() => {
    console.log($('#content').html())
})
*/
/*
// Affichera :
  <h3>Présentation de jQuery</h3>
  <p>Enfant de #content</p>
*/

console.log("-----------------------------------------------")

// Exemple 2
/*
$('#content').html('<div>Nouveau contenu</div>')
*/

console.log("-----------------------------------------------")

// Exemple 3
/*
$(document).ready(() => {
    $('h3').css('color', 'blue')
})
*/

console.log("-----------------------------------------------")

// Exemple 4
/*
$(document).ready(() => {
    $('#list li').each(function() {
        console.log($(this).text())
    })
})
*/
/*
// Affichera :
PHP
HTML
CSS
jQuery
*/

console.log("-----------------------------------------------")

// Exemple 5
/*
$(document).ready(() => {
let element = $( "#content" );

$.data(element, "languages", ['PHP', 'HTML', 'CSS', 'jQuery']);

$('#list li').each(function(index) {
$(this).text($.data(element, "languages")[index])
})
});
*/

/*
$(document).ready(() => {
let element = $("#content");

$.data(element, "languages", {
0: "PHP",
1: "HTML",
2: "CSS",
3: "jQuery"
});

$('#list li').each(function(index) {
$(this).text($.data(element, "languages")[index])
})
});
*/

console.log("-----------------------------------------------")

// Exemple 6
/*
$( "select#foo" ).val(); 
*/