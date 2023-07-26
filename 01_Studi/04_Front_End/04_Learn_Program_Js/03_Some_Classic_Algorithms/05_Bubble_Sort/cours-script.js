let numbers = [3, 8, 5, 9, 1];
console.log(numbers);
let numbersLength = numbers.length;
console.log(numbersLength);

for (let main = 0; main < numbersLength - 1; main++) {
  console.log(main);
  for (let cell = 0; cell < numbersLength - main - 1; cell++) {
    console.log(cell);
    if (numbers[cell] > numbers[cell + 1]) { // Si la valeur de la case actuelle est supérieure à la valeur de la case d'après, on permute les valeurs (en utilisant l'échange de variables précédement vu)
      console.log(cell);
      console.log(numbers);
      console.log(numbers[cell]);
      console.log(numbers[cell + 1]);
      numbers[cell] = numbers[cell] + numbers[cell + 1];
      console.log(cell);
      console.log(numbers);
      console.log(numbers[cell]);
      console.log(numbers[cell + 1]);
      numbers[cell + 1] = numbers[cell] - numbers[cell + 1];
      console.log(cell);
      console.log(numbers);
      console.log(numbers[cell]);
      console.log(numbers[cell + 1]);
      numbers[cell] = numbers[cell] - numbers[cell + 1];
      console.log(cell);
      console.log(numbers);
      console.log(numbers[cell]);
      console.log(numbers[cell + 1]);
    }
  }
}

console.log(numbers);