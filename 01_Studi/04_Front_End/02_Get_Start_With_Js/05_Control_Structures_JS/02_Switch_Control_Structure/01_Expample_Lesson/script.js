// Introduction à switch

// Exemple 1
// switch (/*expression*/) {
// case /*valeur 1*/:
// instructions 1;
// break;
// case /*valeur 2*/:
// instructions 2;
// break;
// case /*valeur 3*/:
// instructions 3;
// break;
// case /*valeur 4*/:
// instructions 4;
// break;
// }

// Exemple 2
/*
const marque = "Huawei";

switch (marque) {
  case "Apple":
    console.log ("Smarhphone haut de gamme avec système IOS");    
    break;
  case "Samsung":
    console.log ("Smartphone haut de gamme avec système Android");  
    break;
  case "Xiaomi":
    console.log ("Smartphone bon marché avec système Android"); 
    break;
  case "Huawei":
    console.log ("Smartphone bon marché avec système Android");
    break;
}
*/

console.log('--------------------------------------------');

// La clause default

// Exemple 3
/*
const marque = "Motorola";

switch (marque) {
  case "Apple":
    console.log("Smartphone haut de gamme avec système IOS");
    break;
  case "Samsung":
    console.log("Smartphone haut de gamme avec système Android");
    break;
  case "Xiaomi":
    console.log("Smartphone bon marché avec système Android");
    break;
  case "Huawei":
    console.log("Smartphone bon marché avec système Android");
    break;
  default:
    console.log("Marque non référencée");
    break;
}
*/

console.log('--------------------------------------------');
 
// Appliquer une même suite d’instructions pour plusieurs cas

// Exemple 4
/*
const marque = "Huawei";

switch (marque) {
  case "Apple":
    console.log("Smartphone haut de gamme avec système IOS");
    break;
  case "Samsung":
    console.log("Smartphone haut de gamme avec système Android");
    break;
  case "Xiaomi":
  case "Huawei":
    console.log("Smartphone bon marché avec système Android");
    break;
  default:
    console.log("Marque non référencée");
    break;
}
*/

// Exemple 5
/*
  console.log("Smartphone bon marché avec système Android");
  break;
*/