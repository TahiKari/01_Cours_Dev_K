console.log(``);

let i = 1;

while (i <= 10) {
  console.log(`=== Table de ${i} ===`);
  for (let y = 1; y <= 10; y++) {
    console.log(`${i} x ${y} = ${i*y}`);
  }
  i++;
}

for (let i = 1; i <= 10; i++) {
  console.log(`=== table de ${i} ===`);
  for (let y = 1; y <= 10; y++) {
    console.log(`${y} x ${i} = ${i * y}`)
  }
}

