function cube(height, width, depth) {
  return height * width * depth;
  
}

const height = prompt('Hauteur du parallélépipèdes ');
const width = prompt('Largeur du parallélépipèdes ');
const depth = prompt('Profondeur du parallélépipèdes ');;

const volume = cube(height, width, depth);

alert(volume);
console.log(volume);