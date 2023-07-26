let word = 'Bonjour';
let cpt = 0;
console.log(word);
console.log(cpt);
for (let letter of word) {
  console.log(letter);
  if (letter === 'o') { // Si la lettre actuelle est égale à "o", on réalise l'opération entre les accolades, sinon on ignore.
    cpt = cpt + 1; // On incrémente notre compteur.
  }
}

// Une fois sorti de la boucle, nombre compteur contiendra le nombre de "o". On l'affiche avec console.log :
console.log('La lettre o apparait ' + cpt + ' fois dans le mot bonjour !');