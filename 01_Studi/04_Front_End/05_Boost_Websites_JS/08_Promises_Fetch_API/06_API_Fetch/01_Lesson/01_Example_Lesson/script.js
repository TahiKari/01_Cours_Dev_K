// Exemple 1
/*
fetch('http://mon-serveur/ma-ressource')
    .then((response) => console.log(response));
*/
/*
var myInit = { method: 'GET',
               headers: { "Content-Type": "text/plain;charset=UTF-8",
                          "Content-Encoding": "gzip"
                        }, //On pourra aussi utiliser l'objet Headers
               mode: 'cors', // Permet les requêtes cross-origin - aussi mode par défaut
               cache: 'default' }; // contrôle la manière dont la requête interagira avec le cache HTTP du navigateur

fetch('http://mon-serveur/ma-ressource', myInit)
    .then((response) => console.log(response));
*/

console.log('-----------------------------------------------')

// Exemple 2
/*
const headers = new Headers();
const body = JSON.stringify({
    firstname: 'David',
    lastname: 'Marty',
    position: 'Outside center'
}); //JSON.stringify pour convertir en objet JSON et éviter le risque des caractères spéciaux.

const init = { 
    method: 'POST',
    headers: headers,
    body: body };

fetch('http://mon-serveur/players', init)
    .then((response) => console.log(response));
*/

/*
const headers = new Headers();
const body = new FormData();
//[...] Ajout de valeurs au FormData [...]
const init = { 
  method: 'POST',
  headers: headers,
  body: body };

fetch('http://mon-serveur/players', init)
  .then((response) => console.log(response));
*/

console.log('-----------------------------------------------')

// Exemple 3
/*
fetch("https://www.data.gouv.fr/api/1/activity?page=1&page_size=20")
	.then(response => {
		return response.json();
	})
	.then(response => {
		console.log(response)
	})
	.catch(error => alert("Erreur : " + error));
*/

console.log('-----------------------------------------------')

// Exemple 4
// const request = fetch('https://jsonplaceholder.typicode.com/users'
const newPost = {
  title: 'lorem ipsum',
  body: 'commando laborum elit.',
  userId: 1
}

const request = fetch('https://jsonplaceholder.typicode.com/posts' , {
  method: 'POST',
  body: JSON.stringify(newPost),
  headers: {
    "content-type": "application/json; charset=UTF-8"
  }
})

request.then((response) => {
  console.log(response)
})
.catch((error) => {
  console.log(error)
})

console.log('-----------------------------------------------')

// Exemple
/*

*/

console.log('-----------------------------------------------')
