// On crée un nombre aléatoire entre 0 et 10
// 3 essaie pour deviner le mot
// isRigtht(n)
// Crée une fonction guess()



function getRandomInt(max) {
    return Math.floor(Math.random() * 10 + 1);
}
const solution = getRandomInt(10)
console.log(solution)

function isRigtht(n) {
    return solution === n
}

function guess() {
    const number = prompt('Entrez une valeur')
    return isRigtht(number)
}

for (i = 0; i < 3; i++) {
    if(guess()) {
        console.log('bravo')
        break;
    } else if(i == 2) {
        console.log('Vous avez perdu')
    }
}



console.log(getRandomInt())
