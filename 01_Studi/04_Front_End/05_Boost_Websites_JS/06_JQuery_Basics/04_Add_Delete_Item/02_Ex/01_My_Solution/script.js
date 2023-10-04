// Ma solution

// Suppression du paragraphe #introduction
$('document').ready (() => {
  $('#introduction').remove()
  
  // Ajout des éléments "Objectif 0 et Objectif 5" avant et apres
  let list = $('#goals')
  // Ajout élément "Objectif 0 en debut de liste"
  list.prepend('<li>Objectif 0</li>')
  // Ajout élément "Objectif 5 en fin de liste"
  list.append('<li>Objectif 5</li>').prepend()
})



window.addEventListener('load', () => {
  console.log(document.body.innerHTML)
})