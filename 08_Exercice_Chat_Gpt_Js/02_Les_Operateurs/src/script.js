// Exercice 1 : Déclaration de variables
// // 1. Déclarez deux variables numériques et affichez-les dans la console.
let a = 5
let b = 15
console.log('Valeur de a : ' + a)
console.log('Valeur de b : ' + b)

console.log('-----------------------------------------')

// Exercice 2 : Opérateurs arithmétiques
// 2. Déclarez deux variables et effectuez les opérations suivantes :
// addition, soustraction, multiplication, division, et modulo.

// Déclaration des variables
let c = 10
let d = 3

// Opérations arithmétiques
let addition = c + d
let soustraction = c - d
let multiplication = c * d
let division = c / d
let modulo = c % d

// Affichage des résultats dans la console
console.log('Addition :', addition)
console.log('Soustraction :', soustraction)
console.log('Multiplication :', multiplication)
console.log('Division :', division)
console.log('Modulo :', modulo)

console.log('-----------------------------------------')

// Exercice 3 : Opérateurs de comparaison
// 3. Déclarez deux variables et utilisez les opérateurs de comparaison
// pour afficher si elles sont égales, différentes, plus grandes, ou plus petites.
let e = 8
let f = 4
// Utilisation des opérateurs de comparaison
console.log('Est égale :', e == f)
console.log('Est strictement égale :', e === f)
console.log('Est inferieur :', e < f)
console.log('Est superieur :', e > f)
console.log('Est inferieur ou égale :', e <= f)
console.log('Est superieur ou égale: ', e >= f)
console.log('Est différent :', e != f)
console.log('Est strictement différent :', e !== f)

console.log('-----------------------------------------')

// Exercice 4 : Opérateurs logiques
// 4. Déclarez deux variables booléennes et utilisez les opérateurs logiques
// (et, ou, non) pour effectuer des opérations logiques.
let g = true
let h = false
// Utilisation des opérateurs logiques
console.log('Et logique :', g && h)
console.log('Ou logique :', g || h)
console.log('Non logique pour p :', !g)
console.log('Non logique pour q :', !h)

console.log('-----------------------------------------')

// Exercice 5 : Opérateurs d'assignation
// 5. Utilisez les opérateurs d'assignation pour modifier la valeur d'une variable
// en utilisant des opérations arithmétiques raccourcies.

// Déclaration de la variable
let counter = 10

// Utilisation des opérateurs d'assignation
counter += 3 // équivaut à counter = counter + 3;
console.log('Nouvelle valeur du compteur :', counter)

counter -= 5 // équivaut à counter = counter - 5;
console.log('Nouvelle valeur du compteur :', counter)

counter *= 2 // équivaut à counter = counter * 2;
console.log('Nouvelle valeur du compteur :', counter)

counter /= 4 // équivaut à counter = counter / 4;
console.log('Nouvelle valeur du compteur :', counter)

counter %= 2 // équivaut à counter = counter % 2;
console.log('Nouvelle valeur du compteur :', counter)

console.log('-----------------------------------------')

// Exercice 6 : Opérateurs de concaténation (pour les chaînes de caractères)
// 6. Déclarez deux chaînes de caractères et utilisez l'opérateur de concaténation
// pour les joindre ensemble et afficher le résultat.
let firstName = 'TAKA'
let lastName = 'Kata'
let nameCombiner = firstName + ' ' + lastName
console.log(nameCombiner)

console.log('-----------------------------------------')

// Exercice 7 : Opérateurs de décalage (pour les entiers)
// 7. Utilisez les opérateurs de décalage pour effectuer des décalages binaires sur un entier.

// Déclaration de l'entier
let number = 8 // binaire: 1000

// Décalage à gauche de 2 positions
let shiftLeft = number << 2
console.log('Décalage gauche de 2 :', shiftLeft) // le résultat sera 32 (binaire: 100000)

// Décalage à droite de 1 position
let shiftRight = number >> 1
console.log('Décalage droite de 1 :', shiftRight) // le résultat sera 4 (binaire: 100)

console.log('-----------------------------------------')

// Exercice 8 : Opérateurs de membre
// 8. Utilisez l'opérateur de membre pour vérifier si un élément est présent dans un tableau.

// Déclaration du tableau
let array = [1, 2, 3, 4, 5]

// Élément à vérifier
let elementToCheck = 3

// Utilisation de l'opérateur de membre
let isElementPresent = array.includes(elementToCheck)

// Affichage du résultat dans la console
console.log("L'élément est présent dans le tableau :", isElementPresent)

console.log('-----------------------------------------')

// Exercice 9 : Opérateurs conditionnels
// 9. Utilisez l'opérateur conditionnel pour assigner une valeur à une variable en fonction d'une condition.

// Déclaration de la variable
let age = 18

// Utilisation de l'opérateur conditionnel
// structure ternaire
let estMajeur1 = age >= 18 ? true : false
//structure if else
let estMajeur2
if (age >= 18) {
  estMajeur2 = true
} else {
  estMajeur2 = false
}

// Affichage du résultat dans la console
console.log('Est majeur :', estMajeur1)
console.log('Est majeur :', estMajeur2)

console.log('-----------------------------------------')

// Exercice 10 : Opérateurs d'incrémentation et de décrémentation
// 10. Utilisez les opérateurs d'incrémentation et de décrémentation pour modifier la valeur d'une variable.

// Déclaration de la variable
let compteur = 5

// Utilisation de l'opérateur d'incrémentation
compteur++
console.log('Après incrémentation :', compteur) // le résultat sera 6

// Utilisation de l'opérateur de décrémentation
compteur--
console.log('Après décrémentation :', compteur) // le résultat sera 5
