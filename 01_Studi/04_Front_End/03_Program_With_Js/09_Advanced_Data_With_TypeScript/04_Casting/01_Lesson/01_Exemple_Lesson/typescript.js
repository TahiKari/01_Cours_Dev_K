"use strict";
// Exemple 1
//Le casting implicite
/*
let a: number = 5;
let b: string = "10";
let c: string = a + b; // TypeScript convertit automatiquement 'a' en une chaîne de caractères pour concaténer les deux
console.log(c); // Affiche '510'
*/
console.log('----------------------------------------');
// Exemple 2
// Le casting explicite
/*
// Exemple de casting explicite avec l'opérateur as :
let a: any = "5";
let b: number = a as number; // convertit explicitement 'a' en un nombre en utilisant l'opérateur "as"
console.log(b); // Affiche 5
*/
/*
//Exemple de casting explicite avec des crochets d'angle <> :
let a: any = "5";
let b: number = <number>a; // converti 'a' en un nombre en utilisant des crochets d'angle < >
console.log(b); // Affiche 5
*/
console.log('----------------------------------------');
// Exemple 3
// Le casting implicite et explicite
/*
// Tableau de nombres
const nombres = [1, 2, 3, 4, 5];
// Fonction qui multiplie chaque nombre par un facteur donné
function multiplierNombres(nombres: string[], facteur: number): string[] {
  const resultat: string[] = [];
  nombres.forEach(nombre => {
    const resultatMultiplication = Number(nombre) * facteur;
    resultat.push(resultatMultiplication.toString());
  });
  return resultat;
}
// Appel de la fonction avec le tableau de nombres
const facteur = 2;
const nombresEnChaineDeCaracteres = nombres.map(nombre => nombre.toString());
const resultatsMultiplication = multiplierNombres(nombresEnChaineDeCaracteres as string[], facteur);
const resultats = resultatsMultiplication.map(resultat => Number(resultat)) as number[];
// Affichage des résultats
console.log(nombres); // [1, 2, 3, 4, 5]
console.log(resultats); // [2, 4, 6, 8, 10]
*/
console.log('----------------------------------------');
// Exemple 4 de la vidéo
// Le casting en Typescript
// Casting implicite
let a = 7;
let b = "19";
let c = a + b;
console.log(c); // Affiche '719'
// Casting explicite avec "< >"
// Déclaration d'une variable de type 'any'
let d = "10";
// Cast explicite de la variable en type 'number'
let e = d;
// Affichage de la valeur et du type
console.log(`Valeur de y : ${e}`);
console.log(`Type de y : ${typeof e}`);
// le casting explicite avec "as"
// Déclaration d'une variable de type 'any'
let x = "10";
// Cast explicite de la variable en type 'number'
let y = x;
// Affichage de la valeur et du type
console.log(`Valeur de y : ${y}`);
console.log(`Type de y : ${typeof y}`);
