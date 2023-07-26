let colors = ['Bleu', 'Rouge', 'Vert', 'Jaune', 'Blanc'];

console.log('=== Affiche la longueur du tableau. ===');
console.log(colors.length);

console.log('--------------------------------------------------------------------------------');

console.log('=== Affiche couleur Bleu, Blanc, Rouge. ===');
// Bleu
console.log(colors[0]);
// Blanc
console.log(colors[4]);
//Rouge
console.log(colors[1]);

console.log('--------------------------------------------------------------------------------');

console.log('=== Affiche toutes les valeurs du tableau avec la méthode (for). ===');
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

console.log('--------------------------------------------------------------------------------');

console.log('=== Affiche toutes les valeurs du tableau avec la méthode (forEach). ===');
colors.forEach(function(element) {
    console.log(element);
});

let colorsMulti = [
    ['Bleu', 'Blanc', 'Rouge'],
    ['Jaune', 'Vert']
]

console.log('--------------------------------------------------------------------------------');

console.log('=== Affiche directement la valeurs "Blanc" puis "Vert". ===');
console.log(colorsMulti[0][1]);
console.log(colorsMulti[1][1]);

console.log('--------------------------------------------------------------------------------'); 

console.log('=== Affiche toutes les valeurs de ce nouveau tableau avec (for). ===');
for (let i = 0; i < colorsMulti.length; i++) {
    for (let j = 0; j < colorsMulti[i].length; j++) {
        console.log(colorsMulti[i][j]);
    }
};


console.log('--------------------------------------------------------------------------------');

console.log('=== Affiche toutes les valeurs de ce nouveau tableau avec (forEach). ===');
colorsMulti.forEach(function(colorsMultiIndex) {
    colorsMultiIndex.forEach(function(colorsIndex) {
        console.log(colorsIndex)
    });
});

console.log('--------------------------------------------------------------------------------');

console.log('=== Affiche toutes les valeurs en ordre alphabétique avec (for). ===');
for (let i = 0; i < colors.length - 1; i++) {
    for (let j = 0; j < colors.length - i - 1; j++) {
        if (colors[j] > colors[j + 1]) {

        let temp;
        temp = colors[j];
        colors[j] = colors[j + 1];
        colors[j + 1] = temp;
        }
    }
}
console.log(colors);

let persons = ['jules', 'laure', 'vincent', 'emma', 'karim'];
let personsLength = persons.length;

for (let main = 0; main < personsLength - 1; main++) {
    for (let cell = 0; cell < personsLength - main - 1; cell++) {
      if (persons[cell] > persons[cell + 1]) {
  
       let temp;
       temp = persons[cell];
       persons[cell] = persons[cell + 1];
       persons[cell + 1] = temp;
      }
    }
  }
  console.log(persons);

