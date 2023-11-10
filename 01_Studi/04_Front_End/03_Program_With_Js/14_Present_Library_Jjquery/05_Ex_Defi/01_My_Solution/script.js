// Ma solution
// Attend que la page soit chargée
$(document).ready(function () {
  // Ajoute un gestionnaire d'événement pour le clic sur un bouton de catégorie
  $('#categories button').click(function () {
    // Récupère la valeur du bouton cliqué
    let category = $(this).attr('data-category')

    // Masque tous les produits
    /*
      $('.product').hide()
    */
    $('.product').slideUp()

    // Affiche seulement les produits correspondant à la catégorie sélectionnée
    /*
      $('.' + category).show()
    */
    $('.' + category).slideDown()
  })
})
