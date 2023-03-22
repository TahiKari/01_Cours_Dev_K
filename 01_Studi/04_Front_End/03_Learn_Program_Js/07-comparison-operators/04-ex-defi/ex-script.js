const car = {
  type: 'BMW',
  color:'blue',
  doors: 3,
  airConditioner: true
};

const {type, color, doors, airConditioner} = car;

const objectIsValid = type && color && doors && airConditioner;