// Exemple 1
/*
var myPromise = new Promise((resolve, reject) => {
    if(myAsyncFunction()) //Fonction asynchrone retournant un booléen === true
        resolve("C'est un succès");
    else {
        reject("Une erreur est survenue");
    }
});

myPromise
    .then((result) => {
        console.log("Résultat de myPromise : " + result);
    })
    .then(() => {
        console.log("Promesse 2");
    })
    .then(() => {
        console.log("Promesse 3");
    });

//Résultat :
//Résultat de myPromise : C'est un succès
//Promesse 2
//Promesse 3
*/

console.log('-----------------------------------------------')

// Exemple 2
/*
var myPromise = new Promise((resolve, reject) => {
    if(myAsyncFunction()) //Fonction asynchrone retournant un booléen
        resolve("C'est un succès");
    else {
        reject("Une erreur est survenue");
    }
});

myPromise
    .then((result) => {
        //Executé si resolve() est appelée dans myPromise
        console.log("Résultat de myPromise : " + result);
    })
    .catch((error) => {
        //Executé si reject() est appelée dans myPromise
        console.log("Erreur de myPromise : " + error);
    })
    .finally(() => {
        //Executé dans tous les cas après le permier then ou catch
        console.log("finally method");
    })
    .then(() => {
        //Executé après finally
        console.log("then method");
    });

//Résultat:
//"Résultat de myPromise : C'est un succès"
//"finally method"
//"then method"
//ou
//"Résultat de myPromise : Une erreur est survenue"
//"finally method"
//"then method"
*/

console.log('-----------------------------------------------')

// Exemple 3
/*
function tryGetFile(fileName){
    return new Promise(function(resolve, reject) {
        var file = tryReadFile(fileName); //Méthode asynchrone pour récupérer le contenu d'un fichier
        if(!!file){ // if (file === true)
            resolve(file);
        } else {
            reject("Fichier indisponible");
        }
    }); 
}

Promise
    .all([tryGetFile("File1.txt"), tryGetFile("File2.txt"), tryGetFile("File3.txt")])
    .then((values) => console.log(values))
    .catch((error) => console.log(error));

//Résultat: 
//["Mon fichier 1", "Mon fichier 2", "Mon fichier 3"]
*/

console.log('-----------------------------------------------')

// Exemple 4
/*
const promise1 = new Promise((resolve, reject) => setTimeout(resolve, 500, 'Première'));

const promise2 = new Promise((resolve, reject) => setTimeout(resolve, 100, 'Seconde'));

Promise
    .race([promise1, promise2])
    .then((result) => console.log(result)); // Les 2 sont résolues, mais promise2 est plus rapide

//Résultat: 
//Seconde
*/

console.log('-----------------------------------------------')

// Exemple
/*

*/

console.log('-----------------------------------------------')
