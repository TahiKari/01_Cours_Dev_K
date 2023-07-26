let a = true;

console.log(a);
console.log(typeof a);

console.log("-----------------------");

let b = "Salut et bienvenue";

console.log(b);
console.log(typeof b);

console.log("-----------------------");

let c = null;

console.log(c);
console.log(typeof c);

console.log("-----------------------");

let sy1 = Symbol("Salut et bienvenue");

console.log(sy1);
console.log(typeof sy1);


console.log("-----------------------");

let conc = "Dupont ";
conc += "Martin";

console.log(conc);
console.log(typeof conc);

console.log("-----------------------");

let variable;

switch (typeof variable) {
  case "number":
    console.log("C'est un nombre");
    break;
  case "bigint":
    console.log("C'est un grand entier");
    break;
  case "NaN":
    console.log("Ce n'est pas un nombre");
    break;
  case "boolean":
    console.log("C'est un booléen");
    break;
  case "string":
    console.log("C'est une chaîne de caractères");
    break;
  case "symbol":
    console.log("C'est un symbole");
    break;
  case "undefined":
    console.log("C'est une valeur non définie");
    break;
  default:
    if(variable == null) {
      console.log("La valeur est nulle");
    }
    else {
      console.log("Ce type n'est pas référencé");
    }
    break;
}