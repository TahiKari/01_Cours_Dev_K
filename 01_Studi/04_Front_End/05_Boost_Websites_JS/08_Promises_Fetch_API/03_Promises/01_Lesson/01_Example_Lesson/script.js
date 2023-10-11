// Exemple 1
/*
const myPromise = new Promise(/*Executeur*//*(resolve, reject) => { 
  var result = myAsyncFunction(); //Appel à la fonction asynchrone

  if(result){
      //Appel de resolve() si la fonction asynchrone est considérée comme un succès (la Promise est résolue)
  } else {
      //Appel de reject() si la fonction asynchrone est considérée comme un échec (la Promise est rejetée)
  }
});
*/

console.log("-----------------------------------------------")

// Exemple 2

/*function askUsername() {
  return prompt('Quel est votre nom d\'utilisateur ?')
}   

function redirectUser() {
  return new Promise((resolve, reject) => {
    let username = askUsername()

    if ('admin' === username) {
      resolve()
    } else {
      reject()
    }
  })
}

function success() {
  console.log('Vous êtes administrateur, vous pouvez accéder à la page')
}

function error() {
  console.log('Vous n\'avez pas été reconnu comme étant un administrateur')
}

redirectUser().then(success, error)
*/


console.log("-----------------------------------------------")

// Exemple 3
/*
function getFile(url) {
    return new Promise(function (resolve, reject) {
        var xhr = new XMLHttpRequest();
    
        xhr.onreadystatechange = function (event) {
            // Si la requête est réussie, on résout la promesse en passant la réponse en paramètre
            // Sinon, on rejette la promesse en revoyant le code HTTP
            if(xhr.readyState === 4 && xhr.status === 200) {
                resolve(xhr.response);
            } else {
                reject(xhr.status);
            }
        };
    
        xhr.onerror = function (err) {
            // Si la requête échoue, on rejette la promesse en envoyant les infos de l'erreur
            reject(err); 
        }
    
        xhr.open('GET', url);
        xhr.send();
    });
}
*/