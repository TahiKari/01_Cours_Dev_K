// Ma solution 1
/*
// creation du tableau contenant les 5 valeurs
var joueurs = ["Tom","Stéphanie","Pierre","Paul","Maria"] ;
// creation d’un élément ul > contenant de liste 
maListe=document.createElement('ul');
//creation d’un identifiant pour ce contenant
maListe.id='liste' ;
// élément est attaché au corps du document
document.body.appendChild(maListe) ;
//creation des elements de la liste avec une boucle
for (var n in joueurs){	
   monItem=document.createElement('li');
   monItem.innerHTML=joueurs[n];
   maListe.appendChild(monItem) ;
}

// récupération de l’identifiant du contenant de la liste dans une variable
var monIdListe = document.getElementById('liste')
// pointage sur le dernier élément de la liste
monDernier=monIdListe.lastChild; 
//enlèvement de l’élément pointé
monDernier.remove();
*/

console.log('----------------------------------------')

// Ma solution 2
/*
// Création d’une div contenante
var contenant=document.createElement('div');
// aspect du contenant brièvement visuellement défini
contenant.style="height:200px;width:300px;border:1px solid black;display:flex; justify-content:space-around"
//contenant est attaché au corps du document
document.body.appendChild(contenant);

// une div A contenue dans le contenant est créée
var contenu_A=document.createElement('div');
// son aspect visuel brièvement défini
contenu_A.style="height:190px;width:100px;border:1px solid blue"
// elle est attachée comme enfant au contenant
contenant.appendChild(contenu_A);
// une div B contenue dans le contenant est créée
var contenu_B=document.createElement('div');
// son aspect visuel brièvement défini
contenu_B.style="height:190px;width:100px;border:1px solid red"
// elle est attachée comme enfant au contenant
contenant.appendChild(contenu_B);

// ajout d’un événement sur la div A associé à une fonction 
contenu_A.addEventListener('click', function(e) {
   // une fonction qui ajoute du texte quand l’utilisateur clique
   contenu_B.innerHTML="le texte est ajouté dans l’élément";
});
*/
