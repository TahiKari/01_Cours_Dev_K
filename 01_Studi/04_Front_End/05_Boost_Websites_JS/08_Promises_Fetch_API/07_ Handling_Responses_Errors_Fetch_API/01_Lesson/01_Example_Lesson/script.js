// Exemple 1
/*
fetch('http://mon-serveur/players')
    .then((response) => {
        if(response.ok){
            return response.json(); // renvoie d'une promise avec comme paramètre la réponse au format json
        } else {
            console.log(response.status);
        }
    })
    .then((data) => {
        console.log(data); //On affiche les données de la réponse au format JSON
    });
*/

console.log("-----------------------------------------------");

// Exemple 2
/*
fetch('http://mon-serveur/players')
    .then((response) => {
        if(response.ok){
            return response.json();
        } else {
            //Traitement de l'erreur dans la réponse
            console.error("Erreur réponse : " + response.status);
        }
    })
    .then((data) => {
        console.log(data);
    })
    .catch((error) => console.error(error)); //Traitement de l'erreur dans l'appel
*/

console.log("-----------------------------------------------");

// Exemple 3
const request = fetch("https://jsonplaceholder.typicode.com/users");

request
  .then((response) => {
    console.log(response);
    // const data = response.json();
    const data = response.text();

    data.then((jsonData) => {
      console.log(jsonData);
    });
  })
  .catch((error) => {
    console.error(error);
  });

console.log("-----------------------------------------------");

// Exemple
/*

*/

console.log("-----------------------------------------------");

// Exemple
/*

*/

console.log("-----------------------------------------------");
