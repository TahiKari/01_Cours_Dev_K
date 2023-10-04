// Ma solution

$(document).ready(() => {
  $('#comment').keyup(function () {
    $('#commentValue').html($(this).val())
  })
})
