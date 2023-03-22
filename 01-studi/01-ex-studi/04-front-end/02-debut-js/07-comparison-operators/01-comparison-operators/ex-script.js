const average = 12;
console.log('Note: ' + average);

// L'évènement avoir la moyenne
const isTheAverage = average >= 10;
console.log('Moyenne: ' + isTheAverage);

// événement avoir la mention assez bien
const prettyGood = average >= 12 && average < 14;
console.log(prettyGood);

// événement avoir la mention bien
const good = average >= 14 && average < 16;
console.log(good);

// événement avoir la mention tres bien
const veryGood= average >= 16;
console.log(veryGood);

// événement avoir la mention (2 possibilités)
let mention = average >= 12;
let mentionBis= prettyGood || good || veryGood;
console.log(mention);
console.log(mentionBis);