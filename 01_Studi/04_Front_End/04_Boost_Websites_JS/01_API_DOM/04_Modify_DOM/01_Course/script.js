// Permet de sellection grace a l'id créer dans le Html la liste 'ul'
let liste = document.getElementById('list')
// Permet de créer un element 'li' dans notre liste 'ul' sélectionner auparavant
let li = document.createElement('li')

// Permet d'ajouter du texte a notre a notre element 'li' que l'on viens tout juste de créer
li.innerText = 'item 4'

// Permet d'ajouter l'élément 'li' que l'on vien de créer a la fin de notre liste sélectionner
/*liste.append(li)*/

// Permet d'ajouter l'élément 'li' que l'on vien de créer au début de notre liste sélectionner
/*liste.prepend(li)*/


// Supprimer un élément

let item2 =document.getElementById('item2')

//Permet de supprimer un élément que l'on a récupérer
/*item2.remove()*/

// Permet de supprimer un élément via l'élément parent tout en permeteant de le réétuliser 
/*liste.removeChild(item2)*/
liste.append(liste.removeChild(item2))




