function volumeParallelepipede(height, width, depth) {
  return height * width * depth;
}

const height = prompt('Hauteur du parallélépipèdes ');
const width = prompt('Largeur du parallélépipèdes ');
const depth = prompt('Profondeur du parallélépipèdes ');;

const volume = volumeParallelepipede(height, width, depth);

console.log(volume);