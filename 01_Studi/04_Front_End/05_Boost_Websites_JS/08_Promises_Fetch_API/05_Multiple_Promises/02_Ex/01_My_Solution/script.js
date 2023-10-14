// Ma solution

function askUsername () {
  return prompt("Quel est votre nom d'utilisateur ?")
}

function askMathOperation () {
  return prompt('Combien font 2 + 2')
}

function success () {
  console.log("Vous pouvez accéder à l'application")
}

function error () {
  console.log('Restez où vous êtes')
}

function checkUsername () {
  return new Promise((resolve, reject) => {
    let userName = askUsername()
    if ('admin' === userName) {
      resolve()
    } else {
      reject()
    }
  })
}

function checkIfIsBot () {
  return new Promise((resolve, reject) => {
    let result = askMathOperation()
    if (4 === parseInt(result)) {
      resolve()
    } else {
      reject()
    }
  })
}

// Résolution des promesses
Promise.all([checkUsername(), checkIfIsBot()]).then(success, error)
