// Le symbole + n’est pas utilisé uniquement pour additionner des nombres. Il peut servir à la fois d’opérateur d’addition (pour les nombres), mais aussi d’opérateur de concaténation (pour les chaînes de caractères). La concaténation, c’est le fait d’assembler plusieurs chaînes de caractères en une seule. Prenons un exemple simple :
/*
let nom = "Parker";
let prenom = "Peter";
let nomComplet = prenom + " " + nom;
console.log(nomComplet);
*/
// Ici, nous avons concaténé 3 chaînes de caractères dans la variable nomComplet : la chaîne "Peter" contenue dans la variable prenom, la chaîne " " (qui contient un espace) et enfin la chaîne "Parker" contenue dans la variable nom. La variable nomComplet contient donc la chaîne "Peter Parker".

console.log("-------------------------------------------");

// L’opérateur d’affectation après concaténation « += »
// Le symbole += peut aussi être utilisé pour concaténer des chaînes. Quand il est utilisé avec des chaînes, il ne sert pas d’opérateur d’affectation après addition mais on peut dire « d’opérateur d’affectation après concaténation ». Prenons un exemple tout simple :
/*
let nom = "Peter";
nom += " Parker";
console.log(nom);
*/
// La chaîne de caractères qui est placée après l’opérateur est ajoutée à la fin de la chaîne. Donc la variable nom contiendra la chaîne "Peter Parker".