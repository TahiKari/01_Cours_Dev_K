let firstname = "Jérémy";
let i = 0;
for (let letter of firstname) {
  if (letter == "é") {
    i = i + 1;
  }
}
console.log(i);