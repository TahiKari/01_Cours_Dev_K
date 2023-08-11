// Exemple 1
/*
let historique = new String("(réf : 775533) commandé le 25/03/2020 10 sacs riz");
alert (historique.slice(7, 13));
console.log(historique.split(""));
*/

console.log('------------------------------------------------')

// Exemple 2
/*
let concat = 'Hello ' + ' World !';
console.log(concat) ;
let nom = "Paul";
let age = 44;
console.log('Je m\’appelle ' + nom + ', et j\’ai ' + age + ' ans.');
*/

console.log('------------------------------------------------')

// Exemple 3
/*
let chaine = new String('Comment ça fonctionne ?');
let index = 4;
console.log(`Le caractère à l’index ${index} est ${chaine.charAt(index)}`);
*/

console.log('------------------------------------------------')

// Exemple 4
/*
let chaine1 = 'Le renard brun et rapide saute par-dessus le chien endormi.';
let chaine2 = 'chien';
let chaine3 = chaine1.indexOf(chaine2) ;
console.log(`l’index du ${chaine2} à partir du commencement est ${chaine3}`);
*/

console.log('------------------------------------------------')

// Exemple 5
/*
 let chiffre = ['un', 'deux', 'trois', 'quatre', 'quinze'];
 for (let element of chiffre) {
   console.log(element);
}
*/

console.log('------------------------------------------------')

// Exemple 6
/*
let monTableau = ['Paris', 'Marseille', 'Lyon', 'Bordeaux', 'Toulouse'];
monTableau.push('Lille', 'Strasbourg');
monTableau.pop();
console.log (monTableau);
*/

console.log('------------------------------------------------')

// Exemple 7
/*
let nombres = [1, 2, 3, 4];
nombres.shift();
alert(nombres); //2,3,4
nombres.unshift(0);
alert(nombres);//0,2,3,4
*/

console.log('------------------------------------------------')

// Exemple 8

// Crée une chaîne de caractères contenant les noms des villes séparées par des virgules
let mesDonnees = 'Paris, Londres, Berlin, Rome, Madrid';

// Utilise la méthode split() pour transformer la chaîne en un tableau en se basant sur le séparateur (la virgule suivie d'un espace)
let monTableau = mesDonnees.split(', ');

// Affiche la longueur du tableau (le nombre d'éléments)
//console.log(monTableau.length);

// Affiche la chaîne de caractères initiale (mesDonnees)
//console.log(mesDonnees);

// Affiche le tableau créé à partir de la chaîne de caractères (monTableau)
//console.log(monTableau);

// Affiche le premier élément du tableau (l'index 0)
//console.log(monTableau[0]);

// Affiche le dernier élément du tableau (l'index égal à la longueur du tableau moins 1)
//console.log(monTableau[monTableau.length - 1]);

// Utilise la méthode join() pour fusionner les éléments du tableau en une nouvelle chaîne de caractères (myNewString)
//let myNewString = monTableau.join(', ');
//console.log(myNewString);

// Crée un tableau contenant les noms des joueurs
//let nomsDesJoueurs = ["Neymar", "Kylian", "Cristiano", "Lionel"];

// Utilise la méthode toString() pour convertir le tableau des noms des joueurs en une chaîne de caractères
//console.log(nomsDesJoueurs.toString());


console.log('------------------------------------------------')

// Exemple 9
/*
let voitures = [["Peugeot", "208"], ["Renault", "Clio"]];
console.log(voitures[1][0]); //"Renault"
*/