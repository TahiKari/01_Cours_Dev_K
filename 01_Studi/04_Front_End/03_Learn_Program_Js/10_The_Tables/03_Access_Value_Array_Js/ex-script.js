let fruits = ['Fraise', 'Orange', 'Framboise', 'Citron'];

console.log(fruits.length);

console.log('--------------------------');

console.log(fruits[2]);

console.log('--------------------------');

for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
};

console.log('--------------------------');

fruits.forEach(function(element) {
  console.log(element);
});