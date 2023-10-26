// Ma solution 1
/*
async function sayHello() {
    await new Promise((resolve) => {setTimeout(resolve, 3000)});
    console.log("Bonjour");
  }
  
  sayHello();
*/

console.log("------------------------------");

// Ma solution 2
/*
function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function logMessage(message) {
  await wait(2000); // attendre 2 secondes
  console.log(message);
}

async function run() {
  console.log("Début du programme");
  await logMessage("Message au milieu");
  console.log("Fin du programme");
}

run();
*/

console.log("------------------------------");

// Ma solution 3
/*
function multiply(num1, num2, callback) {
    let result = num1 * num2
    callback(result)
}
multiply(2, 8, (result) => {
    console.log("Le résultat est : " + result)
})
*/

console.log("------------------------------");

// Ma solution 4
/*
async function multiply(num1, num2, callback) {
    let result = num1 * num2
    callback(result)
}
multiply(2, 8, (result) => {
    console.log("Le résultat est : " + result)
})
*/

console.log("------------------------------");

// Ma solution 5

function wait(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }
  
  async function logMessage() {
    await wait(2000); // attendre 2 secondes
    console.log('Bonjour');
  }
  
  logMessage();
  console.log('Fin du programme');