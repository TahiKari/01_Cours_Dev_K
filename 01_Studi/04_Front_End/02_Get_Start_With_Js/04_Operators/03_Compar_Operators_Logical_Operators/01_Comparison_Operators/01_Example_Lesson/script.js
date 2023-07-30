// Les opérateurs « == » et « != »

// L’opérateur d’égalité == vérifie si 2 valeurs sont égales ou non. Si elles le sont, l’expression renverra true, sinon false :
/*
let a = "Ordinateur";
let b = "Telephone";
let c = "Ordinateur";
console.log(a == b);
console.log (a == c);
*/
// On peut voir que console.log(a == b) affiche false car les 2 chaînes ne sont pas égales tandis que console.log (a == c) affiche true car les deux chaînes sont égales.

console.log("----------------------------------------------");

// L’opérateur d’inégalité != vérifie quant à lui si 2 valeurs ne sont pas égales :
/*
let a = 17.2;
let b = 17.5;
let c = 17.2;
console.log(a != b);
console.log (a != c);
*/
//Dans ce cas, console.log(a != b) affiche dans la console true puisque a et b ne sont pas égaux. Cependant, console.log (a != c) affiche false car a et c sont égaux.

console.log("----------------------------------------------");

// Les opérateurs « === » et « !== »

// Les opérateurs === (d’égalité stricte) et !=== (d’inégalité stricte) vérifient respectivement si une valeur est égale ou inégale à une autre, mais prennent aussi en compte le type de la valeur (entier, booléen, chaîne de caractères, etc.). L’opérateur === vérifie si une valeur est égale à une autre et si leur type sont les mêmes. Dans ce cas, il renvoie true. L’opérateur !== renvoie true dans le cas où il y a au moins une différence de type ou de valeur entre les 2 valeurs.
/*
let a = 1;
let b = "1";
console.log(a == b); //egalite : true
console.log(a === b); //egalite stricte : false
console.log(a != b); //inegalite : false
console.log (a !== b); ////inegalite stricte : true
*/

console.log("----------------------------------------------");

// Les opérateurs « < », « > », « <= » et « >= »

// < : stricte infériorité. Vérifie si une valeur est strictement inférieure à une autre,
// > : stricte supériorité. Vérifie si une valeur est strictement supérieure à une autre,
// <= : infériorité. Vérifie si une valeur est inférieure ou égale à une autre,
// >= : supériorité. Vérifie si une valeur est supérieure ou égale à une autre.
/*
let a = 17.2;
let b = 17.5;
let c = 17.2;
console.log(a < b); //true
console.log (a <= c); //true
console.log (a > b); //false
console.log (a >= c); //true
*/
// Pour chaque ligne console.log, un commentaire spécifie dans le code le booléen affiché. On voit que c’est cohérent.