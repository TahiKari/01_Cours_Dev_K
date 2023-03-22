// On cherche à connaitre le nombre de fois que la lettre i apparait dans le nom Tahiti 

let firstName = "tahiti"; 
let i = 0;

for (let letter of firstName) { 
  console.log(letter);
  if (letter === "i") {
    i = i + 1;
  }
}

console.log('La lettre i apparait ' + i + ' fois dans le nom propre Tahiti');
