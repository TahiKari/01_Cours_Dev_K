/*let personne = {
    nom : "Thomas",
    age: 35,
	ville: "Paris"
};

let { nom, age, ville: adresse } = personne;

console.log("nom : ", nom, " age : ", age, " adresse : ", adresse);

console.log(`nom :  ${nom}  age :  ${age}  adresse :  ${adresse}`);*/

//Le tableau
/*let langages = ["JavaScript", "Java", "PHP", "Go"];
		
// Avec les méthodes classiques, il faut déclarer une variable et lui assigner la valeur de chaque élément du tableau séparément.
let langage1 = langages[0];
let langage2 = langages[1];
let langage3 = langages[2]
let langage4 = langages[3];
		
// Avec la déstructuration, il suffit d'une seule ligne.
//let [langage1, langage2, langage3, langage4] = langages;
let [langage1, langage2, langage3, langage4] = langages;

// On peut aussi procéder comme suit
//let [langage1, langage2, langage3, langage4] = ["JavaScript", "Java", "PHP", "Go"];
let [langage1, langage2, langage3, langage4] = ["JavaScript", "Java", "PHP", "Go"];	

console.log("langage1 : ", langage1, " langage2 : ", langage2, " langage3 : ", langage3, " langage4 : ", langage4);

// Affichera langage1 : JavaScript, langage2 : Java, langage3 : PHP, langage4 : Go*/

/*let maDate = [1985, 12, 10];
let date = new Date(...maDate, 50);
console.log(date); // Mar 10 Dec 1985 00:50:00 GMT+0100 (Central European Standard Time)



// Cette notation équivaut à new Date(1985, 12, 10, 50)*/

let myArray= [1,2,3,4,5,6];
const [, myNumber] = myArray;
console.log(myNumber) // 2*/
myArray.splice(0, 4);
console.log(myArray) // [5, 6]
myArray= [myNumber, ...myArray];
console.log(myArray) // [2, 5, 6]