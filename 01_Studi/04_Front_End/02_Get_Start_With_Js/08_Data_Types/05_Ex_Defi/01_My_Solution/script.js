let variable;
switch (typeof variable) {
  case "number":
    console.log("C'est un nombre")
    break
  case "bigint":
    console.log("C'est un grand entier")
    break
  case "boolean":
    console.log("C'est un booleen")
    break
  case "string":
    console.log("C'est un une chaîne de caractère")
    break
  case "symbol":
    console.log("C'est un symbol")
    break
  case "undefined":
    console.log("C'est une valeur non définie")
    break
  default:
    if (variable == null) {
      console.log("La valeur est null")
    } else {
      console.log("cCe type n'est pas référencé")
    }
    break
}