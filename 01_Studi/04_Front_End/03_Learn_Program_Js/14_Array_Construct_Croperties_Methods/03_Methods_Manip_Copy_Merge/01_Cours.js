/*let numbers = [101, 0, 25, 9, 51]

numbers.reverse()

// Display [51, 9, 25, 0, 101]
console.log(numbers)*/

/*let colors = ['Bleu']

// Display 3 in the console : the new array length (2 added values)
console.log(colors.push('Blanc', 'Rouge'))

// Display colors array with the 2 added values : ['Bleu', 'Blanc', 'Rouge']
console.log(colors)*/

/*let colors = ['Bleu']

// Display 3 in the console : the new array length (2 added values)
console.log(colors.unshift('Blanc', 'Rouge'))

// Display colors array with the 2 added values : ['Blanc', 'Rouge', 'Bleu']
console.log(colors)*/

/*let animals = ['Lion', 'Chat', 'Chien', 'Cheval', 'Tigre', 'Ours']

// Display ['Chien']
// Because the deletion starts at index 2 and concerns only 1 item.
console.log(animals.splice(2, 1))

// Display ['Lion', 'Chat', Cheval', 'Tigre', 'Ours']
// Without 'Chien' which has been deleted
console.log(animals)

// Display ['Tigre', 'Ours']
// Because the deletion starts at index 3 of the modified array and concerns 2 items.
console.log(animals.splice(3, 2, 'Abeille', 'Aigle', 'Lynx'))

// Display ['Lion', 'Chat', Cheval', 'Abeille', 'Aigle', 'Lynx']
// Without 'Tigre' and 'Ours' which has been deleted and replaced by 'Abeille', 'Aigle' and 'Lynx'.
console.log(animals)

// Display ['Abeille', 'Aigle']
// Because the deletion starts at the third element from the end (-3) and concerns 2 elements.
console.log(animals.splice(-3, 2, 'Faucon'))

// Display ['Lion', 'Chat', Cheval', 'Faucon', 'Lynx']
console.log(animals)

// Display ['Chat', Cheval', 'Faucon', 'Lynx']
// Because the deletion goes from index 1 to the end because no end value has been passed as a parameter.
console.log(animals.splice(1))

// Display ['Lion']
console.log(animals)

// Display []
// Empty array because there is no deletion (the second parameter is 0)
console.log(animals.splice(0, 0, 'Requin'))

// Display ['Requin', 'Lion']
console.log(animals)*/

/*let animals = ['Chat', 'Lynx']
let otherAnimals = ['Lion', 'Tigre']
let otherAnimals2 = ['Requin', 'Aigle']

let allAnimals = animals.concat(otherAnimals, otherAnimals2)

// Display : ['Chat', 'Lynx', 'Lion', 'Tigre', 'Requin', 'Aigle']
// Concatenation of animals, otherAnimals and otherAnimals2
console.log(allAnimals)

// Concat values
let otherAnimals3 = otherAnimals.concat('Chien', 'Ours')

// Display : ['Lion', 'Tigre', 'Chien', 'Ours']
// Concatenation of otherAnimals and 'Chien', 'Ours'
console.log(otherAnimals3)

// Creation of a multi-dimensional array by concatenation
let allAnimals2 = [].concat(
  [animals],
  [otherAnimals],
  [otherAnimals2]
)

// Display : [['Chat', 'Lynx'], ['Lion', 'Tigre'], ['Requin', 'Aigle']]
console.log(allAnimals2)*/

/*let animals = ['Lion', 'Chat', 'Chien', 'Cheval', 'Tigre', 'Ours']

// Display : Lion,Chat,Chien,Cheval,Tigre,Ours
console.log(animals.join())

// Display : Lion / Chat / Chien / Cheval / Tigre / Ours
console.log(animals.join(' / '))*/


let animals = [
    'Zèbre',
    ['Lion', 'Tigre'],
    'Vache',
    ['Chat', 'Chien'],
    'Aigle'
  ]
  
  let animalsFlat = animals.flat()
  
  // Display : ['Zèbre', 'Lion', 'Tigre', 'Vache', 'Chat', 'Chien', 'Aigle']
  console.log(animalsFlat)
  
  let animals2 = [
    'Chat',
    [
      'Lynx',
      ['Aigle', 'Faucon'],
      ['Ours', 'Zèbre']
    ],
    'Chien',
    [
      ['Lion', 'Tigre']
    ],
    'Cheval'
  ]
  
  let animals2Flat1 = animals2.flat()
  
  // Display : 
  // As the default depth is 1, only the arrays at the first depth level have been flattened.*/
  /*
  [
    'Chat',
    'Lynx',
    ['Aigle', 'Faucon'],
    ['Ours', 'Zèbre'],
    'Chien',
    ['Lion','Tigre'],
    'Cheval'
  ]
  */
  console.log(animals2Flat1)
  
  let animals2Flat2 = animals2.flat(2)
  
  // Display : ['Chat', 'Lynx', 'Aigle', 'Faucon', 'Ours', 'Zèbre', 'Chien', 'Lion', 'Tigre', 'Cheval']
  // As the defined depth is 2, all arrays have been flattened.
  console.log(animals2Flat2)