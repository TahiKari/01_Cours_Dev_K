// Ma solution

// déclaration énumaration nommée Jours
enum Jours {
    Lundi = 1,
    Mardi,
    Mercredi,
    Jeudi,
    Vendredi,
    Samedi,
    Dimanche
}

// Création fonction nomée obtenirJour
function obtenirJour(nombre: number): string {
    return Jours[nombre]
}

console.log(obtenirJour(1)) // Lundi

function benef(prixVt: number, cFab: number): void {
    let benef: number = prixVt - cFab;
    if (benef > 0) {
        console.log(`Le bénéfice est de : ${benef} €`);
    } else if (benef < 0) {
        console.log(`Les pertes sont de : ${benef} €`);
    } else {
        console.log(`Pas de bénéfice : ${benef} €`);
    }
}
benef(167, 167); // affiche "Pas de bénéfice : 0 €"