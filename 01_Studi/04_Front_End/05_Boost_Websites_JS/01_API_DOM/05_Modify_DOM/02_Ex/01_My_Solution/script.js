// Ma solution

// Ajoutez un titre h3 au-dessus de la div principale
let contenu = document.getElementById('contenu')

let h3 = document.createElement('h3')
h3.append('Titre de la section')
document.body.prepend(h3)

// Suppression des items de la liste.
let items = document.getElementsByTagName('li')

for (item of Array.from(items)) {
  item.remove()
}

// Inversion des paragraphes.
let premierParagraphe = contenu.firstElementChild
premierParagraphe.remove()

contenu.append(premierParagraphe)
