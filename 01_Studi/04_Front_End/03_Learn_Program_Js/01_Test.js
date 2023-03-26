let corlorsOne = ['Bleu', 'Rouge', 'Vert', 'Jaune', 'Blanc'];

console.log('=== Affiche la longueur du tableau. ===');
console.log(corlorsOne.length);

console.log('--------------------------------------------------------------------------------');  

console.log('=== Affiche couleur Bleu, Blanc, Rouge. ==='); 
// Bleu
console.log(corlorsOne[0]);
// Blanc
console.log(corlorsOne[4]);
//Rouge
console.log(corlorsOne[1]);

console.log('--------------------------------------------------------------------------------'); 

console.log('=== Affiche toutes les valeurs du tableau avec la méthode (for). ==='); 
for (let i = 0; i < corlorsOne.length; i++) {
  console.log(corlorsOne[i]);
};

console.log('--------------------------------------------------------------------------------'); 

console.log('=== Affiche toutes les valeurs du tableau avec la méthode (forEach). ===');
corlorsOne.forEach(function(element) {
  console.log(element);
});

let corlorsTwo = [
  ['Bleu', 'Blanc', 'Rouge'],
  ['Jaune', 'Vert']
];

console.log('--------------------------------------------------------------------------------');

console.log('=== Affiche directement la valeurs "Blanc" puis "Vert". ===');

// Blanc
console.log(corlorsTwo[0][1]);
// Vert
console.log(corlorsTwo[1][1]);

console.log('--------------------------------------------------------------------------------'); 

console.log('=== Affiche toutes les valeurs de ce nouveau tableau avec (for). ===');

for (let i = 0; i < corlorsTwo.length; i++) {
  for (let j = 0; j < corlorsTwo[i].length; j++) {
    console.log(corlorsTwo[i][j]);
  }
}

console.log('--------------------------------------------------------------------------------');

console.log('=== Affiche toutes les valeurs de ce nouveau tableau avec (forEach). ===');
corlorsTwo.forEach(function(corlorsTwoElement) {
  corlorsTwoElement.forEach(function(element) {
    console.log(element);
  }) 
});






