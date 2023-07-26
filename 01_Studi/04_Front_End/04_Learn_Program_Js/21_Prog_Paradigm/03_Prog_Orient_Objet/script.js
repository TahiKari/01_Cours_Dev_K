class Student
{
  constructor(firstName, lastName)
  {
    this.firstName = firstName;
    this.lastName = lastName;
  }

  getFullName()
  {
    return this.firstName+' '  + this.lastName;
  }
}

let john = new Student('John', 'Doe');
console.log(john.getFullName());
let karim = new Student('Karim', 'TAHIRI');
console.log(karim.getFullName()); // Affiche "Karim TAHIRI"