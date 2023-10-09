// Exemple 1
/*
var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://mon-serveur/ma-ressource');

xhr.setRequestheader('Accept', 'text/html');
xhr.setRequestheader('Accept-Charset', 'utf-8');

xhr.send();
*/

console.log("-----------------------------------------------")

// Exemple 2
/*
var xhr = new XMLHttpRequest();
xhr.open('GET', 'http://mon-serveur/ma-ressource');

xhr.addEventListener('readystatechange', function() {
    if(xhr.readyState === 4 && xhr.status === 200) {
        console.log("headers= " + xhr.getAllResponseheaders());
        //Résultat : 
        //headers= date: Fri, 08 Dec 2017 21:04:30 GMT\r\n
        //content-encoding: gzip\r\n
        //connection: keep-alive\r\n
        //[...]

        console.log("Content encodig value = " + xhr.getResponseheader('content-encoding'));
        //Résultat : 
        //Content encodig value = gzip
    };
});

xhr.send();
*/