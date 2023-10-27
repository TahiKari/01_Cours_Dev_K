// Exemple 1
/*
'{"name" :"Charles", "age":30, "car":null}'
*/

console.log('----------------------------------------')

// Exemple 2
/*
let jsonString = '{"name":"John", "age":30}';
let obj = JSON.parse(jsonString);
let personName = obj.name;
let personAge = obj.age;
console.log(personName);
console.log(personAge);
*/

console.log('----------------------------------------')

// Exemple 3
/*
{"name" :"Charles"}
*/

console.log('----------------------------------------')

// Exemple 4
/*
{name:"Charles"}
*/

console.log('----------------------------------------')

// Exemple 5
/*
// Format JSON
{"employees":[
  { "firstName":"Charles", "lastName":"Dupont" },
  { "firstName":"Marie", "lastName":"Leclerc" },
  { "firstName":"Pierre", "lastName":"Lefranc" }
]}
*/

/*
// Format XML
<employees>
  <employee>
    <firstName>Charles</firstName> <lastName>Dupont</lastName>
  </employee>
  <employee>
    <firstName>Marie</firstName> <lastName>Leclerc</lastName>
  </employee>
  <employee>
    <firstName>Pierre</firstName> <lastName>Lefranc</lastName>
  </employee>
</employees>
*/

console.log('----------------------------------------')

// Exemple 6 de la vidéo
// Partie 1 crée un objet depuis une chaîne JSON avec la fonction JSON.parse()
/*
const txt = '{"name": "Charles", "age": 31, "city": "Paris"}'
const obj = JSON.parse(txt)
document.getElementById('demo').innerHTML = obj.name + ", " + obj.age + ", " + obj.city + "."
*/
// Partie 2 Analyser un tableau JSON avec JSON.parse()
/*
const array = '["Peugeot", "Fiat", "Citroen", "Bmw"]'
const myArray = JSON.parse(array)
document.getElementById('demo').innerHTML = myArray[2]
*/

// Partie Créer une chaîne JSON depuis un objet JavaScript avec JSON.stringify()
/*
const obj = {name:"Carles", age:35, city:"Paris"}
const myJSON = JSON.stringify(obj)
document.getElementById('demo').innerHTML = myJSON
*/

// Partie 4 Créer une chaîne JSON depuis un tableau JavaScript avec JSON.stringify()
/*
const array = ["Pierre", "Michel", "Charles", "Marie"]
const myArray = JSON.stringify(array)
document.getElementById("demo").innerHTML = myArray
*/

// Partie 5 Stocker et récupérer des données depuis localStorage
//Stocker les données
const myObj = {name: "Marie", age: 35, city:"Lyon"}
const myJSON = JSON.stringify(myObj)
localStorage.setItem("testJSON", myJSON)

// Récupérer les données
let text = localStorage.getItem("testJSON")
let obj = JSON.parse(text)
document.getElementById("demo").innerHTML = obj.name + ", " + obj.age + ", " + obj.city + "."

console.log('----------------------------------------')

// Exemple 7
/*
const xmlhttp = new XMLHttpRequest();
			xmlhttp.onload = function() {
  				const myObj = JSON.parse(this.responseText);
 				 document.getElementById("demo").innerHTML = myObj.name;
			}
			xmlhttp.open("GET",  "file.json");
			xmlhttp.send();
*/

/*
const xmlhttp = new XMLHttpRequest();
			xmlhttp.onload = function() {
				const myArr = JSON.parse(this.responseText);
				document.getElementById("demo").innerHTML = JSON.stringify(myArr, null, 2);
			}
			xmlhttp.open("GET", "car.json", true);
			xmlhttp.send();
*/