let marque = "HP";
let modele = "Pavillon";
let stockage = 1000;
let ram = 16;
let processeur = "intel core i7, 13 gth";

console.log((marque === "HP" || marque === "Acer") && stockage >= 256 && ram >= 8);

/*code Question 2*/
let price = stockage + (ram * 20)
let fiche = "Marque : " + marque + " || " + "Modèle : " + modele + " || " + "Processeur : " +  processeur + " || " + "Disque dur : " + stockage + " GO de stockage " + "|| " + "Ram : " + ram + " GO de ram " + " || " + "Prix : " + price + " Euros"; 

console.log(fiche);