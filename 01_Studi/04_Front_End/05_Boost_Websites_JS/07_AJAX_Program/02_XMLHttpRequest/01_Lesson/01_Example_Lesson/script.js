// Exemple 1
/*
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://reqres.in/api/users?page=1');
xhr.send();
*/

console.log('-----------------------------------------------')

// Exemple 2
/*
xhr.open('get', 'https://reqres.in/api/users?page=1', false);
*/

console.log('-----------------------------------------------')

// Exemple 3
/*
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://reqres.in/api/users');

// readystatechange sera appelée chaque fois que le readyState changera. Ce qui permettra de générer un callback.
xhr.addEventListener('readystatechange', function() {
  // readyState indiquera l'état de la requête de l'objet XMLHttpRequest.
    console.log("Current XHR state = " + xhr.readyState);
});

xhr.send();
*/

console.log('-----------------------------------------------')

// Exemple 4
/*
const xhr = new XMLHttpRequest();
xhr.open('GET', "https://reqres.in/api/users");

xhr.addEventListener('readystatechange', function() {
    if(xhr.readyState === 4) {
        console.log("Response = " + xhr.response);
    };
});

xhr.send();
*/

console.log('-----------------------------------------------')

// Exemple 5
/*
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://reqres.in/api/users?page=2');

xhr.addEventListener('readystatechange', function() {
    if(xhr.readyState === 4 && xhr.status === 200) {
        console.log("Response = " + xhr.response);
    };
});

xhr.send();
*/

console.log('-----------------------------------------------')

// Exemple 6
/*
Response = {"page":2,"per_page":6,"total":12,"total_pages":2,"data":[{"id":7,"email":"michael.lawson@reqres.in","first_name":"Michael","last_name":"Lawson","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/follettkyle/128.jpg"},{"id":8,"email":"lindsay.ferguson@reqres.in","first_name":"Lindsay","last_name":"Ferguson","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/araa3185/128.jpg"},{"id":9,"email":"tobias.funke@reqres.in","first_name":"Tobias","last_name":"Funke","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/vivekprvr/128.jpg"},{"id":10,"email":"byron.fields@reqres.in","first_name":"Byron","last_name":"Fields","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/russoedu/128.jpg"},{"id":11,"email":"george.edwards@reqres.in","first_name":"George","last_name":"Edwards","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/mrmoiree/128.jpg"},{"id":12,"email":"rachel.howell@reqres.in","first_name":"Rachel","last_name":"Howell","avatar":"https://s3.amazonaws.com/uifaces/faces/twitter/hebertialmeida/128.jpg"}],"ad":{"company":"StatusCode Weekly","url":"http://statuscode.org/","text":"A weekly newsletter focusing on software development, infrastructure, the server, performance, and the stack end of things."}}
*/

console.log('-----------------------------------------------')

// Exemple 7
/*
const json = '{"page": 2, "per_page": 6}'; // C'est la représentation d'un objet JavaScript en JSON
const object = JSON.parse(json);

console.log(object); // Affiche {page: 2, per_page: 6}
console.log(object.page); // Affiche 2
*/

console.log('-----------------------------------------------')

// Exemple 8
/*
const xhr = new XMLHttpRequest();
xhr.open('GET', 'https://reqres.in/api/users?page=2');

xhr.addEventListener('readystatechange', function() {
    if(xhr.readyState === 4 && xhr.status === 200) {
         const data = JSON.parse(xhr.response);
    };
});

xhr.send();
*/
