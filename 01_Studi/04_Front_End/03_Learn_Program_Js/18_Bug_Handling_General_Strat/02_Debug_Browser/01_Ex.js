const notes = [25, 18, 16, 15, 12]
const noteToCompare = 15;

let notesAccepted = 0;

for (let i = 0; i < notes.length; i++) {
  if (notes[i] === noteToCompare) {
    notesAccepted += 1
  }
}

console.log(notesAccepted) //5