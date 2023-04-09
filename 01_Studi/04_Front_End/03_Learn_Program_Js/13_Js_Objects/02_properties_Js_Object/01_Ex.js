const car = {
    type: 'BMW',
    color: 'bleu',
    doors: 5,
    airConditioner: true
  }
  
  const doorsNumber1 = car.doors;
  const doorsNumber2 = car['doors'];
  
  console.log(doorsNumber1);
  console.log(doorsNumber2);

