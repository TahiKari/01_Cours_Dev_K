// Utilisation de la condition if

// Comme vous le savez, des opérateurs de comparaison peuvent renvoyer un booléen : true ou false. On peut les utiliser pour vérifier si une valeur est égale, inégale, supérieure, etc., à une autre.

// Finalement, si l’on écrit :
/*
let a = 1;
let b = 1;
console.log(a == b);
*/
// L’expression a == b renverra un booléen, ici true, puisque les deux variables sont égales. Si ce n’était pas le cas, elle renverrait false. Mais quel rapport avec la condition if ?

// Eh bien, nous allons pouvoir utiliser cette structure de contrôle en spécifiant en paramètre une condition, c’est-à-dire une expression qui va renvoyer true ou false. Si et uniquement si cette expression renvoie true, alors l’instruction ou les instructions spécifiées seront exécutées. Mais comment écrire une condition if ?
// Voici la syntaxe :
// if (/*condition*/) {
// instructions;
// }

// Vous voyez, la syntaxe est assez simple. Prenons un exemple tout simple de condition :
/*
const nombre = 11;

if (nombre > 10) {
  console.log("Le nombre " + nombre + " est plus grand que 10");
}
*/
// On peut voir que l’on spécifie comme condition l’expression nombre > 10. Comme la constante nombre a pour valeur 11, et que 11 est plus grand que 10, alors l’instruction console.log("Le nombre" + nombre + " est plus grand que 10"); est exécutée. Donc la console affiche : le nombre 11 est plus grand que 10.

// En revanche, on peut voir que, si on définit nombre sur 10 par exemple :
/*
const nombre = 10;
if (nombre > 10) {
  console.log("Le nombre " + nombre + " est plus grand que 10");
}
*/
//Étant donné que nombre n’est pas strictement supérieur à 10, alors l’expression nombre > 10 va renvoyer false. Donc l’instruction console.log("Le nombre " + nombre + " est plus grand que 10"); ne sera pas exécutée. La console n’affichera rien dans ce cas. On peut voir qu’on peut insérer plusieurs lignes de codes qui seront exécutées si la condition renvoie true.

// Prenons un autre exemple :
/*
const marque = "Peugeot";
const cv = 120;
const portes = 5;
let prix;
if (marque == "Peugeot" || marque == "BMW") {
  prix = (cv * 100 + portes * 30);
  console.log ("Prix = " + prix);
}
*/
// Dans ce cas, l’expression marque == "Peugeot" || marque == "BMW" va renvoyer true puisque la variable marque est définie sur la chaîne de caractères "Peugeot". Les deux lignes dans le corps du if (c’est-à-dire les lignes présentes dans les accolades du if) sont donc exécutées, le prix est calculé et affiché dans une chaîne, via la console.

// Finalement, cette condition permet d’exécuter les deux lignes du corps de la condition if uniquement si la marque est Peugeot ou BMW. Si on prend la marque Renault par exemple :
/*
const marque = "Renault";
const cv = 120;
const portes = 5;
let prix;
if (marque == "Peugeot" || marque == "BMW") {
  prix = (cv * 100 + portes * 30);
  console.log ("Prix = " + prix);
}
*/
// On peut voir qu’aucune des deux instructions du corps de la condition if ne sont exécutées.

console.log('-------------------------------------')

// Utilisation du mot clé else

// Le mot clé else (qui signifie littéralement « sinon ») permet de dire en quelques sortes : « Si (if) une condition est vérifiée, exécuter les premières instructions, sinon (else), exécuter les secondes instructions ». Pour faire simple, le mot clé else va permettre d’indiquer les instructions à exécuter si l’expression de la condition précédente renvoie false. La syntaxe est très simple :
// if (/*condition*/) {
// instructions;
// }
// else {
// instructions;
// }

// Reprenons l’exemple précédent et rajoutons un else pour afficher dans la console une chaîne de caractères si la marque n’est ni Peugeot, ni BMW.
/*
const marque = "Renault";
const cv = 120;
const portes = 5;
let prix;

if (marque == "Peugeot" || marque == "BMW") {
  prix = (cv * 100 + portes * 30);
  console.log ("Prix = " + prix);
}
else {
  console.log("La marque " + marque + " n'est pas valide");
}
*/

// Dans ce cas, comme l’expression de la condition renvoie false, c’est l’instruction du else qui est exécutée. Donc la console affiche :
// La marque Renault n'est pas valide

//Si l’on change la marque et que l’on écrit BMW :
/*
const marque = "BMW";
const cv = 120;
const portes = 5;
let prix;

if (marque == "Peugeot" || marque == "BMW") {
  prix = (cv * 100 + portes * 30);
  console.log ("Prix = " + prix);
}
else {
  console.log("La marque " + marque + " n'est pas valide");
}
*/

// Alors, ce sont les premières instructions (celles du if) qui sont exécutées. La console affiche :
// Prix = 12150
// Donc le script fonctionne correctement.

console.log('-------------------------------------')

// Utilisation de else if

//Maintenant, nous pouvons parler de l’instruction else if, littéralement « sinon si ». La structure else if va nous permettre de rajouter une condition si l’expression de la condition précédente renvoie false.
// La syntaxe n’est pas bien plus compliquée :
// if (/*condition 1*/) {
// instructions;
// }
// else if (/*condition 2*/) {
// instructions;
// }
// else {
// instructions;
// }

// Pour prendre un exemple, on peut améliorer notre script précédent pour que la structure de contrôle exécute :
// « Si (if) la marque est "Peugeot" ou "BMW" et si le nombre de cv est inférieur ou égal à 150, calculer le prix et afficher le prix, sinon si (else if) la marque est "Peugeot" ou "BMW", calculer le prix en ajoutant une taxe de 2 000 € , et afficher le prix taxé, sinon (else), afficher que la marque n’est pas valide. » Cette condition est cohérente, nous pouvons donc réaliser notre script :
/*
const marque = "Peugeot";
const cv = 180;
const portes = 5;
let prix;

if ((marque == "Peugeot" || marque == "BMW") && cv <= 150) {
  prix = (cv * 100 + portes * 30);
  console.log ("Prix = " + prix);
}
else if (marque == "Peugeot" || marque == "BMW") {
  prix = ((cv * 100 + portes * 30) + 2000);
  console.log ("Prix taxé = " + prix);
}
else {
  console.log("La marque " + marque + " n'est pas valide");
}
*/
// Dans cet exemple, la condition vérifie si la marque est « Peugeot » ou « BMW », et si le nombre de cv est inférieur ou égal à 150. Comme le nombre de cv n’est pas inférieur ou égal à 150, l’expression de la condition renvoie false. Les instructions du if ne sont pas exécutées et la condition du else if est donc traitée. Comme la marque est égale à Peugeot, l’expression de la condition (du else if) est validée, elle renvoie true et les instructions du corps du else if sont exécutées : le prix est calculé avec une taxe de 2 000 et le prix taxé est affiché.
// Le else aurait été appelé uniquement si la condition du else if avait été fausse, donc dans le cas présent si la marque n’avait été ni Peugeot, ni BMW.
// Bien évidemment, on peut rajouter autant de else if que l’on veut, comme on peut le voir dans cette vidéo :

const typeForme = "cercle";

const rayon = 4;

let aire;

if (typeForme == "cercle") {
  aire = Math.PI * (rayon ** 2)
}
else if (typeForme == "sphere") {
  aire = 4 * (Math.PI * (rayon ** 2))
}
else {
  console.log ("Forme non pris en charge");
}

console.log("L'aire est de " + aire + " cm carré");
