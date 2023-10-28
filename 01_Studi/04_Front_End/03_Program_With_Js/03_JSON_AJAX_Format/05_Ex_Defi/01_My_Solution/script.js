// Ma solution
//Notre requête AJAX
const xhttp = new XMLHttpRequest();
let city;
xhttp.onload = function () {
  const xmlDoc = xhttp.responseXML;
  city = xmlDoc.getElementsByTagName("CITY");
  loadCity();
};
xhttp.open("GET", "city.xml");
xhttp.send();

//Notre fonction pour analyser notre XML et afficher sous forme de tableau
function loadCity() {
  let table = "<tr><th>Ville</th><th>Code postal</th></tr>";
  for (let i = 0; i < city.length; i++) {
    table += "<tr onclick='displayCity(" + i + ")'><td>";
    table += city[i].getElementsByTagName("NAME")[0].childNodes[0].nodeValue;
    table += "</td><td>";
    table += city[i].getElementsByTagName("ZIP")[0].childNodes[0].nodeValue;
    table += "</td></tr>";
  }
  document.getElementById("demo").innerHTML = table;
}

//Notre fonction pour afficher les informations pour chaque ville
function displayCity(i) {
  document.getElementById("showCity").innerHTML =
    "Dépôt : " +
    city[i].getElementsByTagName("NAME")[0].childNodes[0].nodeValue +
    "<br>Code postal : " +
    city[i].getElementsByTagName("ZIP")[0].childNodes[0].nodeValue +
    "<br>Adresse : " +
    city[i].getElementsByTagName("ADRESS")[0].childNodes[0].nodeValue +
    "<br>Jour : " +
    city[i].getElementsByTagName("DAY")[0].childNodes[0].nodeValue +
    "<br>Horaire : " +
    city[i].getElementsByTagName("HOUR")[0].childNodes[0].nodeValue;
}
