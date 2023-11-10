// Exemple 1
/*
 // Attacher un gestionnaire d'événements au clic de souris sur un bouton
 $('button').on('click', function() {
  alert('Le bouton a été cliqué');
});
*/

console.log('----------------------------------------')

// Exemple 2

// Attacher un gestionnaire d'événements au survol d'un élément
$('a').hover(function() {
  //au hover, la classe ‘hovered’ sera ajoutée à l’élément
  $(this).addClass('hovered');
}, function() {
  //Lors de la sortie du hover, la classe ‘hovered’ sera retirée à l’élément
  $(this).removeClass('hovered');
});