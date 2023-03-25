let row;
for (let i = 0; i <= 10; i++) {
  row = '';
  for (let j = 0; j < i; j++) {
    row = row + j + ' '
  }
  console.log(row);
}