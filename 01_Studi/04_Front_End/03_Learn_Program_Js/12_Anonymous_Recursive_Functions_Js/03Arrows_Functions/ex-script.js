const students = [
  {name: 'Nicolas', note: 18},
  {name: 'Pierre', note: 15}, 
  {name: 'Marie', note: 12},
  {name: 'Julie', note: 16},
  {name: 'Jean', note: 9},
  {name: 'Benjamin', note: 11},
  {name: 'Solene', note: 8},
  {name: 'Melodie', note: 7},
  {name: 'Sandrine', note: 14}, 
  {name: 'Christophe', note: 19},
  {name: 'Mickael', note: 6},
  {name: 'Paul', note: 10},
  {name: 'Lucie', note: 4},
  {name: 'Amelie', note: 8},
]

const intervalNote = [[0, 4], [5, 9], [10, 14], [15, 20]];

const studentSorted = []
intervalNote.forEach(interval => studentSorted.push(students.filter(student => student.note >= interval[0] && student.note <= interval[1])));

console.log(studentSorted);
() => {
  console.log(2);
}