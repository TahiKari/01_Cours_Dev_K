const data = ['Paul', 'Jean', 'Marie', 'Nicolas', 'Julie', 'Lola', 'Martin', 'Armand', 'Amandine']
const dataSorted = [];
data.sort((a, b) => a.localeCompare(b));
data.forEach((name) => {
  const indexLetter = dataSorted.findIndex((objet) => name.substring(0, 1).toLocaleLowerCase() === objet.letter.toLocaleLowerCase());
  indexLetter !== -1 ? dataSorted[indexLetter].names.push(name) : dataSorted.push({letter: name.substring(0, 1), names: [name]});
})
console.log(dataSorted)