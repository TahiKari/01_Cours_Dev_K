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

const chercherNoteMax = (() => function f(tableau, i, max) {
  if (i === tableau.length) {
    return max;
  }

  if (tableau[i] > max) {
    max = tableau[i];
  }

  return f(tableau, i + 1, max);
})();

const noteMaxTrouve = chercherNoteMax(notesEleves, 0, notesEleves[0]);
console.log(noteMaxTrouvee);

function chercherNoteMax(tableau, i, max) {
  if (i === tableau.length) {
    return max;
  }
  
  if (tableau[i] > max) {
    max = tableau[i];
  }
  
  return chercherNoteMax(tableau, i + 1, max);
}

const noteMaxTrouvee = chercherNoteMax(notesEleves, 0, notesEleves[0]);
console.log(noteMaxTrouvee);
