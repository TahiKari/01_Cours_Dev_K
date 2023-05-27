// Ajout du titre h3.
let contenu = document.getElementById('contenu')

let h3 = document.createElement('h3')
h3.append('Titre de la section')
document.body.prepend(h3)

let items = document.getElementsByTagName('li')

for(item of Array.from(items)) {
    item.remove()
}

let premierParagraphe = contenu.firstElementChild
premierParagraphe.remove()

contenu.append(premierParagraphe)


document.getElementById('content').set