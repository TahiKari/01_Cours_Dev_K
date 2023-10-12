// Exemple 1

/*const scrutin = new Promise(function (resolve, reject) {
        // On récupère le % du résultat de l'élection pour le candidat 1    
        var resultat = getResultatDuScrutin("Candidat1"); 
        if(resultat > .50){
            resolve("Candidat 1 est élu");
        } else {
            reject("Candidat 1 a perdu");
        }
    }
);

scrutin.then(
    (result) => console.log(result),
    (error) => console.log(error)
);*/

// Si getResultatDuScrutin("Candidat1") == 0.3
//"Candidat 1 a perdu"
// Si getResultatDuScrutin("Candidat1") == 0.6
//"Candidat 1 est élu"

console.log('-----------------------------------------------')

// Exemple 2
/*
var myPromise = new Promise((resolve, reject) => {
    // [...]
    reject("Une erreur est survenue");
};

myPromise.catch((error) => console.log(error));*/

//Résultat :
//Une erreur est survenue

console.log('-----------------------------------------------')

// Exemple 3
/*
var myPromise = new Promise((resolve, reject) => {
    if(//[...])
    resolve("C'est un succès");
    else {
        reject("Une erreur est survenue");
    }
};

myPromise.finally(() => console.log("Toujours executée"));

//Résultat : 
//Toujours exécutée
*/

console.log('-----------------------------------------------')

// Exemple 4
/*
var myPromise = new Promise((resolve, reject) => {
    if(myAsyncFunction()) //Fonction asynchrone retournant un booléen
        resolve("C'est un succès");
    else {
        reject("Une erreur est survenue");
    }
};

myPromise
    .then((result) => console.log(result))
    .catch((error) => console.log(error))
    .finally(() => console.log("Toujours executée"));

//Si myAsyncFunction() === true
//Résultat:
//C'est un succès
//Toujours executée

//Si myAsyncFunction() === false
//Résultat:
//Une erreur est survenue
//Toujours executée
*/

console.log('-----------------------------------------------')

// Exemple 5
/*
async function test(){
    const promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve('On m’attend avant de continuer!'), 2000)
    });
    
    let result = await promise; //Attend que la promesse soit résolue ou rejetée
    alert(result);
}


test();
*/

console.log('-----------------------------------------------')

// Exemple 6
/*
const getResultatDuScrutin2 = async (candidat) => {
  // appel asynchrone (requête serveur par exemple)
}

// La promesse de la fonction scrutin() est remplacée par async 
const scrutin = async () => {
  // await indique que l'on attendra le resultat de getResultatDuScrutin2() pour retourner le resultat
  return resultat = await getResultatDuScrutin2("Candidat1");    
}

scrutin().then(
  (resultat => {
    if(resultat > .50){
      console.log("Candidat 1 est élu");
    } else {
      console.log("Candidat 1 a perdu");
    }
  })
)
*/

console.log('-----------------------------------------------')

// Exemple 7

const someAsyncStuff = new Promise((resolve, reject) => {
  setTimeout(() => {
    const random = Math.floor(Math.random() * 100) // Retourne un nombre entre 1 et 100

    if (random > 50) {
      resolve({ status: 'succes', random })
    }
    reject({ status: 'error', random })
  }, 1000)
})

/*someAsyncStuff
    .then((response) => {
        console.log(response)
    })
    .catch((error) => {
        console.log(error)
    })
    .finally(() => {
        console.log('finally')
    })
*/
const myFunction = async () => {
  try {
    const myPromise = await someAsyncStuff
    console.log(myPromise)
  } catch (error) {
    console.error(error)
  }
}

myFunction()
