// Exemple 1

//Création de la fonction
/*  
function loadDoc() {
    const xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        document.getElementById("demo").innerHTML =
        this.responseText;
      }
    };
    xhttp.open("GET", "demo.txt", true);
    xhttp.send();
  }
*/

console.log("----------------------------------------");

// Exemple 2
// L’objet XMLHttpRequest
/*
function loadDoc() {
  const xhttp = new XMLHttpRequest();
  xhttp.onload = function () {
    document.getElementById("demo").innerHTML = this.responseText;
  };
  xhttp.open("GET", "demo.txt");
  xhttp.send();
}
*/

// L’objet XMLHttpRequest avec un response XML
/*
const xhttp = new XMLHttpRequest();
xhttp.onload = function () {
  const xmlDoc = this.responseXML;
  const x = xmlDoc.getElementsByTagName("NAME");
  let txt = "";
  for (let i = 0; i < x.length; i++) {
    txt = txt + x[i].childNodes[0].nodeValue + "<br>";
  }
  document.getElementById("demo").innerHTML = txt;
};
xhttp.open("GET", "car.xml");
xhttp.send();
*/

//Fonction getAllResponseHeaders()
// Cette fonction renvoie toutes les informations d'en-tête d'une ressource, comme la longueur, le type de serveur, le type de contenu, la dernière modification...
/*
const xhttp = new XMLHttpRequest();
xhttp.onload = function () {
  document.getElementById("demo").innerHTML = this.getAllResponseHeaders();
};
xhttp.open("GET", "demo.txt");
xhttp.send();
*/
console.log("----------------------------------------");

// Exemple 3
function loadDoc() {
    const xhttp = new XMLHttpRequest()
    xhttp.onload = function() {
        myFunction(this)
    }
    xhttp.open("GET", "car.xml")
    xhttp.send()
}

function myFunction(xml) {
    const xmlDoc = xml.responseXML
    const x = xmlDoc.getElementsByTagName("CAR")
    let table = "<tr><th>Marque</th></tr>"
    for (let i = 0; i < x.length; i++) {
        table += 
            "<tr><td>" + 
            x[i].getElementsByTagName("NAME")[0].childNodes[0].nodeValue + "</td></tr>"
    }
    document.getElementById("demo").innerHTML = table
}

console.log("----------------------------------------");

// Exemple 4
/*

*/

console.log("----------------------------------------");

// Exemple 5
/*

*/

console.log("----------------------------------------");

// Exemple 6
/*

*/

console.log("----------------------------------------");

// Exemple 7
/*

*/

console.log("----------------------------------------");
