// Exemple 1
/*
$(document).ready(() => {
    $('#content').hide(2000).delay(1000).show(2000)
});
*/

console.log('-----------------------------------------------')

// Exemple 2
/*
$(document).ready(() => {
    $('#content').animate({width:'500px'}, 2000).delay(1000).animate({height:'500px'}, 2000)
});
*/
console.log('-----------------------------------------------')

// Exemple 3
// Methode hide/show
/*$(() => {
  $('#hide-box').click(function () {
    $('.box').hide(1000, function () {
      console.log('La boîte est maintenant cachée')
    })
  })

  $('#show-box').click(function () {
    $('.box').show(1000, function () {
      console.log('La boîte est maintenant affichée')
    })
  })
})*/

// Methode fadeOut/fadeIn
/*$('#hide-box').click(function () {
  $('.box').fadeOut(1000, function () {
    console.log('La boîte est maintenant cachée')
  })
})

$('#show-box').click(function () {
  $('.box').fadeIn(1000, function () {
    console.log('La boîte est maintenant affichée')
  })
})*/

$(() => {
  $('#trigger-animation').click(function () {
    $('.box2').animate({
      width: '80%',
      borderRadius: '20px'
    }, 1000, function() {
      console.log('Animation terminée')
    })
  })
})
