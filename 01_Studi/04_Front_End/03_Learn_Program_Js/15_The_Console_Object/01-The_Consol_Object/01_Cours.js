const val = 4
const min = 8
const infoMessage = 'Début de la fonction'

console.info('GO !')
console.info({val, min, infoMessage})

const val1 = 4
const numbers = [4, 8, 14, 2]

console.log('Debug')
console.log(val1)
console.log(numbers)

console.error('Une erreur est survenue')

console.info('Message INFO')

console.warn('Message WARN')

console.error('Message ERREUR')

console.log('Message LOG')

const age = 16
const majority = 18
const assertReason = 'La valeur âge doit être supérieure à la valeur de la majorité'

console.assert(age > majority, {age, majority, assertReason})

console.assert(age > majority, {age, majority, assertReason})

/*console.clear()*/

console.count()
for(let i=0; i<4;i++) {
console.count('Dans la boucle');
}
console.count()

/*console.countReset()
console.countReset('supérieur')*/

// Array object
console.dir(Array)

// Date object
console.dir(Date)

console.dirxml(document.head)

console.groupCollapsed()

const numbers1 = [4, 8, 14, 2]

console.table(numbers)

const persons = [
  {
    firstName: 'Julien',
    userName: 'JC',
  },
  {
    firstName: 'Lara',
    userName: 'LM',
  },
]

console.table(persons)

console.table(persons, ['userName'])

console.time()
console.timeLog()
console.timeEnd()

first()

function first() {
  second()
}

function second() {
  third()
}

function third() {
  console.trace()
}