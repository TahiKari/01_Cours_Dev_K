// Exercice 1

/*let nombres = "";

nb = 120;

for (let i = 0; i <= 10; i++) {
  nombres += nb + " ";
  nb ++;
}

console.log (nombres);*/

console.log("-------------------------------------");

// exercice 2

/*let total = 0;

let prix = [27, 36, 89, 18, 25];
for (let i of prix) {
  total += i;
}

console.log (total);*/

console.log("-------------------------------------");

// exercice 3

let nombre = 8;

let multiples = "";

for (let i = 1; i <= 20; i++) {
  multiples += (nombre * i) + " ";
}

console.log (multiples);

console.log("-------------------------------------");

// exercice 4

let marques = ["Apple", "Acer", "HP", "Packard-Bell"];

for (let marque of marques) {
  if (marque == "Apple" || marque == "HP" || marque == "Dell" || marque == "Microsoft") {
    console.log("La marque est valide");
  } else {
    console.log("La marque n'est pas valide");
  }
}

console.log("-------------------------------------");

// exercice 5

let ordinateur = new Object();

ordinateur.ram = 256;

ordinateur.stockage = 512;

for (let i in ordinateur) {
  console.log (i + " = " + ordinateur[i]);
}