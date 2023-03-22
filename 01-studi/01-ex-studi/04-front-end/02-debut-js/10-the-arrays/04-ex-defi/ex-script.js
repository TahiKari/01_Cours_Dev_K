// On créer une variable color et on lui défini tout les élément du tableau qu'elle contiendra
let colors = ['Bleu', 'Rouge', 'Vert', 'Jaune', 'Blanc'];
console.log(``);

// On affiche via un console log la longueur du tableau
console.log(`La longueur du tableau est de : ${colors.length}`);

console.log(``);

// On affiche la couleur bleu
console.log(`Couleur : ${colors[0]}`)

console.log(``);

// On affiche la couleur blanche
console.log(`Couleur : ${colors[4]}`)

console.log(``);

// On affiche la couleur rouge
console.log(`Couleur : ${colors[1]}`)

console.log(``);
// Affiche toutes les valeurs du tableau avec la boucle for
for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
};

console.log(``);
// Affiche toutes les valeurs du tableau avec la boucle forEach
colors.forEach(function(element) {
  console.log(element)
});

// On créer un tableau multidimentionnel
let tableMultiColors = [
  ['Bleu', 'Blanc', 'Rouge'],
  ['Jaune', 'Vert']
];

console.log(``);

// On Affiche les tous les éléments du tableau multidimentionnel
tableMultiColors.forEach(function(multiColorsElement) {
  multiColorsElement.forEach(function(element) {
    console.log(element);
  });
});
