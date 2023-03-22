let myArray= [1,2,3,4,5,6]

// code...
const [,myNumber] = myArray
console.log(myNumber) // 2

// code...
myArray.splice(0, 4)
console.log(myArray) // [5,6]

// code...
myArray = [myNumber, ...myArray]
console.log(myArray) // [2,5,6]


