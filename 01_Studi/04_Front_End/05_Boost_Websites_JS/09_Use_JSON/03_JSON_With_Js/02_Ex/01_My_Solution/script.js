// Ma solution 1

const students = [
  {
    name: 'Paul',
    age: 15,
    scores: [
      {matiere: 'Maths', note: 10},
      {matiere: 'Français', note: 12},
      {matiere: 'Anglais', note: 14},
    ]
  }, 
  {
    name: 'Marie',
    age: 14,
    scores: [
      {matiere: 'Maths', note: 15},
      {matiere: 'Français', note: 9},
      {matiere: 'Anglais', note: 10},
    ]
  },
]

const json = JSON.stringify(students)

console.log(json)

const newStudents = JSON.parse(json)

console.log(newStudents[0].name)

