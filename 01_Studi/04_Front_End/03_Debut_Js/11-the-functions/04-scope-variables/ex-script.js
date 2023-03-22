function Asc(array){
  return array.sort(function(a, b){
    return a - b
  });
}

const myArray = [5, 9, 8, 2, 7];
console.log(Asc(myArray));