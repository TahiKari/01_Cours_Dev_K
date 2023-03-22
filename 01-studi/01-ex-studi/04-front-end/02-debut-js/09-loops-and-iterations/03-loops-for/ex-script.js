const animals = ['dog', 'cat', 'bird', 'fish'];

for (let i = 0; i < animals.length; i++) {
    console.log(animals[i]);
}

console.log('---------------------------------- ----------------------------------');

for (let animal of animals) {
    console.log(animal);
}

console.log('---------------------------------- ----------------------------------');

const secretAgent = {firstName: 'James', lastName: 'BOND', code: '007'};

for (let property in secretAgent) {
    console.log(`${property} : ${secretAgent[property]}`);
};