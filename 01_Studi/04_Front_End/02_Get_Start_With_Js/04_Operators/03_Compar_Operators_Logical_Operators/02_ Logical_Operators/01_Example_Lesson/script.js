// L’opérateur « && »

// L’opérateur && signifie littéralement « et ». Dans le cas où on utilise un && au milieu de deux expressions renvoyant un booléen, l’opérateur renverra true si les deux expressions renvoient true, sinon, il renverra false. Donc, quand on utilise l’opérateur &&, on vérifie si deux expressions sont « vraies ». Si une seule l’est, alors, l’opérateur renverra false. Voyons un exemple concret :
/* 
let a = 17.5;
let b = 17.5;
let c = 17.2;
console.log(a > c && a < b); //false
console.log(a == b && a > c); //true
*/
//L’instruction console.log(a > c && a < b) affiche dans la console false car les deux expressions ne sont pas vraies. Même si l’expression a > c est vérifiée, l’expression a < b est fausse.
// En revanche, l’instruction console.log(a == b && a > c) affiche true car les expressions a == b et a > c sont toutes les deux vraies.

console.log("-----------------------------------------------");

// L’opérateur « || »

// L’opérateur || signifie littéralement « ou ». Dans le cas où on utilise un || au milieu de deux expressions renvoyant un booléen, l’opérateur renverra true si au moins une des deux expressions est juste, sinon, il renverra false :
/*
let a = 17.5;
let b = 17.5;
let c = 17.2;
console.log(a == b || a < c); //true
console.log(a < c || a == c); //false
*/
// L’instruction console.log(a == b || a > c) affiche dans la console true car une des deux expressions renvoie true (l’expression a == b est vérifiée). Si les deux expressions étaient vraies, l’instruction aurait aussi affiché true.
// En revanche, l’instruction console.log(a < c || a == c) affiche false car aucune des deux expressions n’est vraie.

console.log("-----------------------------------------------");

// L’opérateur « ! »

// L’opérateur ! signifie littéralement « non ». On l’utilise pour renvoyer true si une expression renvoie false et inversement :
/*
let a = 17.5;
let b = 17.5;
let c = 17.2;
let d = true;
let e = false;
console.log(!(a == b)); //false
console.log(!(a > b)); //true
console.log(! d); //false
console.log(! e); //true
*/
// Dans les deux premiers console.log, on place les expressions a == b et a > b entre parenthèses pour indiquer que si l’expression en entier renvoie true, alors, c’est false qui sera affiché et inversement. Les parenthèses permettent d’inverser le booléen renvoyé par toute l’expression et pas seulement la variable qui vient tout de suite après l’opérateur : !.