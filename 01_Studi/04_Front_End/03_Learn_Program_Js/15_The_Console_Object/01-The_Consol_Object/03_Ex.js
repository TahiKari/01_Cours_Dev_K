const numbers = [4, 8, 14, 2]

console.table(numbers)
console.log(numbers)

const min = 10
const assertReason = 'La valeur doit être supérieure à 10'
console.assert(10 > min, assertReason)

// 4)
initialize()

function logged() {
  console.log('Hello')
  console.trace()
}

function login() {
  logged()
}

function initialize() {
  login()
}
