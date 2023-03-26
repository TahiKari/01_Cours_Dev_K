let persons = ['jules', 'laure', 'vincent', 'emma'];
let personsLength = persons.length;
		
for (let main = 0; main < personsLength - 1; main++) {
  for (let cell = 0; cell < personsLength - main - 1; cell++) {
    if (persons[cell] > persons[cell + 1]) {

     let temp;
     temp = persons[cell];
     persons[cell] = persons[cell + 1];
     persons[cell + 1] = temp;
    }
  }
}
console.log(persons);