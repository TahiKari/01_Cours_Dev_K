// Ma solution

if (jQuery) {
  console.log('jQuery est correctement défini')

  $(document).ready(() => {
    $('h1').css('color', 'green')
    $('h2').first().css('font-style', 'italic').text('Mes meilleurs articles')
  })
} else {
  console.log('Il y a un souci dans la définition de jQuery')
}