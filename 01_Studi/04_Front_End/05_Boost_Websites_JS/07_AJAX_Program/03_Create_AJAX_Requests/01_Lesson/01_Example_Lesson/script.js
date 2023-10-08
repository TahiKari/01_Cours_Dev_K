// Exemple 1
/*
const xhr = new XMLHttpRequest();
xhr.open('GET', 'http://mon-serveur/ma-ressource');

xhr.addEventListener('readystatechange', function() {
    if(xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
        console.log("Response = " + xhr.response);
    };
});

xhr.send();
*/

console.log("-----------------------------------------------")

// Exemple 2
/*
const xhr = new XMLHttpRequest();
const verb = 'GET';
const route = 'http://mon-serveur/utilisateurs';
let result;

xhr.open(verb, route);

xhr.addEventListener('readystatechange', function() {
    if(xhr.readyState === 4 && xhr.status === 200) {
        result = xhr.response;
    };
});

xhr.send();
*/
/*
const route = 'http://mon-serveur/utilisateurs?firstname=' + encodeURIComponent('François');
*/

console.log("-----------------------------------------------")

// Exemple 3
/*
const xhr = new XMLHttpRequest();
const verb = 'POST';
const route = 'http://mon-serveur/utilisateurs';

xhr.open(verb, route);

xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');

xhr.send('name=Marty&firstname=David&city=Perpignan');
*/

// Autre méthode plus simple et plus évoluée

/*
const xhr = new XMLHttpRequest();
const verb = 'POST';
const route = 'http://mon-serveur/utilisateurs';

xhr.open(verb, route);

var form = new FormData();
form.append('name', 'Marty');
form.append('firstname', 'David');
form.append('city', 'Perpignan');

xhr.send(form);
*/

console.log("-----------------------------------------------")

// Exemple 4
/*
var xhr = new XMLHttpRequest();
var verb = 'GET';
var route = 'http://mon-serveur/utilisateurs';
var result;

xhr.open(verb, route);

xhr.addEventListener('readystatechange', function() {
    if(xhr.readyState === 4) {
        //Si le status n'est pas 200 (HTTP.OK), on alerte l'utilisateur.
        if(xhr.status !== 200) {
            alert('An error occured. Code: ' + xhr.status + ', Message : ' + xhr.statusText);
        } else {
            result = xhr.response;
        }
    };
});

xhr.send();
*/

/*
var xhr = new XMLHttpRequest();
var verb = 'GET';
var route = 'http://mon-serveur/utilisateurs';
var result;

xhr.open(verb, route);

xhr.addEventListener('error', function() {
        alert('An error occured.');
    }
);

xhr.send();
*/