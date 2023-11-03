"use strict";
// Ma solution
// déclaration énumaration nommée Jours
var Jours;
(function (Jours) {
    Jours[Jours["Lundi"] = 1] = "Lundi";
    Jours[Jours["Mardi"] = 2] = "Mardi";
    Jours[Jours["Mercredi"] = 3] = "Mercredi";
    Jours[Jours["Jeudi"] = 4] = "Jeudi";
    Jours[Jours["Vendredi"] = 5] = "Vendredi";
    Jours[Jours["Samedi"] = 6] = "Samedi";
    Jours[Jours["Dimanche"] = 7] = "Dimanche";
})(Jours || (Jours = {}));
// Création fonction nomée obtenirJour
function obtenirJour(nombre) {
    return Jours[nombre];
}
console.log(obtenirJour(1)); // Lundi
function benef(prixVt, cFab) {
    let benef = prixVt - cFab;
    if (benef > 0) {
        console.log(`Le bénéfice est de : ${benef} €`);
    }
    else if (benef < 0) {
        console.log(`Les pertes sont de : ${benef} €`);
    }
    else {
        console.log(`Pas de bénéfice : ${benef} €`);
    }
}
benef(167, 167); // affiche "Pas de bénéfice : 0 €"
