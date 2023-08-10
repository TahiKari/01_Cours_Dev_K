// Ma solution
/*
const nombre = new Number(1678);
function entier (nb) {
  return Number.isInteger(nb.valueOf())
}
console.log(entier(nombre));
*/

console.log("------------------------------------------");

// Ma solution
/*
const nombre = new Number(3167830918);

function exp (nb) {
  return nb.toExponential(4);
}
console.log(exp(nombre))
*/

console.log("------------------------------------------");

// Ma solution
/*
const nombre = new Number(3167830918);

console.log(nombre.toString().length)
*/

console.log("------------------------------------------");

// Ma solution
/*
const nombre = new Number(8909.61892);

console.log(Number.isFinite(nombre.valueOf()));
*/

console.log("------------------------------------------");

// Ma solution
const nombreTest = new Number(15267);

function isMultipleDix(nb) {
  return (nb.valueOf() % 10 == 0);
}

console.log(isMultipleDix(nombreTest));