let row;
for (let i = 0; i <= 10; i++) {
  console.log('i = ' + i)
  row = '';
  for (let j = 0; j < i; j++) {
    console.log('j = ' + j)
    row = row + j + ' '
  }
  console.log(row);
}