function getNote(counter, notes, higher, lower) {
  if (!higher && !lower) {
    higher = notes[counter];
    lower = notes[counter];
    counter++;
  }
  if (counter < notes.length) {
    higher = higher > notes[counter] ? higher : notes[counter];
    lower = lower < notes[counter] ? lower : notes[counter];
    counter++;
    return getNote(counter, notes, higher, lower) 
  } else {
    return {higher, lower}
  }
}

const notes  = [10, 20, 15, 17, 8, 5, 12, 4];

console.log(getNote(0, notes, null, null)) // {heigher: 20, lower: 4}