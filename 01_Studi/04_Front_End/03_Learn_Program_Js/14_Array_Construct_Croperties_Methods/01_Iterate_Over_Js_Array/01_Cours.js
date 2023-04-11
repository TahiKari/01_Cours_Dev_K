/*function isGreaterThanTen(element) {
    return element > 10
  }
  
  let numbers = [0, 9, 51, 100, 6, 18, 2]
  
  // Display 51 in the console because it's the first value found to be greater than 10
  console.log(numbers.find(isGreaterThanTen))*/

  /*function isGreaterThanTen(element) {
    return element > 10
  }
  
  let numbers = [0, 9, 51, 100, 6, 18, 2]
  
  // Display 2 in the console because it is the index of 51 which is the first value found to be greater than 10.
  console.log(numbers.findIndex(isGreaterThanTen))*/

  /*let animals = ['Lion', 'Chat', 'Chien', 'Lion', 'Ours']

  // Display 0 in the console because the first 'Lion' value found is at index 0, even if there is a second one at index 3.
  console.log(animals.indexOf('Lion'))
  
  // Display 3 in the console because the first 'Lion' value found when starting to browse from the index 2 is at index 3.
  console.log(animals.indexOf('Lion', 2))*/

/*let animals = ['Lion', 'Chat', 'Chien', 'Lion', 'Ours']

// Display 3 in the console because the last 'Lion' value found is at index 3.
console.log(animals.lastIndexOf('Lion'))

// Display 0 in the console because the last 'Lion' value found when starting to browse from the index 1 is at index 0.
// As the search is from right to left and starts at index 1 ('Chat') then the last 'Lion' value found is at index 0.
console.log(animals.lastIndexOf('Lion', 1))*/

/*let animals = ['Lion', 'Chat', 'Chien', 'Cheval', 'Tigre', 'Ours']

let numbers = [0, 900, 1000, 11, 40, 6, 8, 2, 61]

// Display in the console : ['Chat', 'Cheval', 'Chien', 'Lion', 'Ours', 'Tigre']
console.log(animals.sort())

// Display in the console : [0, 1000, 11, 2, 40, 6, 61, 8, 900]
console.log(numbers.sort())

// Function for comparing the length of strings in order to sort them in ascending order
function compareTextLength(a, b) {
  if (a.length > b.length) {
    return 1
  } else if (a.length < b.length) {
    return -1
  }

  // The case where a.length = b.length
  return 0
}

// Display in the console : ['Chat', 'Lion', 'Ours', 'Chien', 'Tigre', 'Cheval']
// 'Chat' has 4 characters, 'Cheval' has 6
console.log(animals.sort(compareTextLength))

// Function for comparing numbers in order to sort them in ascending order
function compareNumbers(a, b) {
  return a - b
}

// Display in the console : [0, 2, 6, 8, 11, 40, 61, 900, 1000]
console.log(numbers.sort(compareNumbers))*/


/*function isTextLengthGreaterThan4(element) {
  return element.length > 4
}

let animals = ['Lion', 'Chat', 'Chien', 'Cheval', 'Tigre', 'Ours']

let animalsFiltered = animals.filter(isTextLengthGreaterThan4)

let animalsFilteredBis = animalsFiltered.filter(function(element){
  return element.length > 5
})

// Display in the console : ['Lion', 'Chat', 'Chien', 'Cheval', 'Tigre', 'Ours']
console.log(animals)

// Display in the console : ['Chien', 'Cheval', 'Tigre']
// Elements from animals with more than 4 characters
console.log(animalsFiltered)

// Display in the console : ['Cheval']
// Elements from animalsFiltered with more than 5 characters
console.log(animalsFilteredBis)*/


/*let animals = ['Lion', 'Chat', 'Chien', 'Cheval', 'Tigre', 'Ours']

// Display in the console : ['Lion', 'Chat', 'Chien', 'Cheval', 'Tigre', 'Ours']
console.log(animals.slice())

// Display in the console : ['Tigre', 'Ours']
console.log(animals.slice(4))

// Display in the console : ['Cheval', 'Tigre', 'Ours']
// The first parameter is negative so we extract the last 3 elements.
console.log(animals.slice(-3))

// Display in the console : ['Chat', 'Chien']
// 'Cheval' which is at index 3 is not part of the extraction as indicated in slice() description.
console.log(animals.slice(1, 3))

// Display in the console : ['Chat', 'Chien', 'Cheval']
// The second parameter is negative, so the last 2 values are not part of the extraction.
console.log(animals.slice(1, -2))

// Display in the console : ['Chien', 'Cheval']
// The 2 parameters are negative, so we take the last 4 values (-4) without the last 2 (-2).
console.log(animals.slice(-4, -2))

// Display in the console : ['Lion', 'Chat', 'Chien', 'Cheval', 'Tigre', 'Ours']
// The original array has not been changed.
console.log(animals)*/

/*let animals = ['Lion', 'Chat', 'Chien', 'Cheval', 'Tigre', 'Ours']

// Display in the console : 6
console.log(animals.length)

// Display in the console : Ours
console.log(animals.pop())

// Display in the console : 5
// Because the last value has been deleted
console.log(animals.length)*/


/*let animals = ['Lion', 'Chat', 'Chien', 'Cheval', 'Tigre', 'Ours']

// Display in the console : 6
console.log(animals.length)

// Display in the console : Lion
console.log(animals.shift())

// Display in the console : 5
// Because the first value has been deleted
console.log(animals.length)*/

let animals = ['Lion', 'Chat', 'Chien', 'Cheval', 'Tigre', 'Ours']

// Display true
console.log(animals.includes('Ours'))

// Display false because 'Lion' is at index 0 while we are searching from index 1
console.log(animals.includes('Lion', 1))