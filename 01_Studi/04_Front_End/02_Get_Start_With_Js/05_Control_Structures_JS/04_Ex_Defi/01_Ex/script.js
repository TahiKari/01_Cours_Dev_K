// Solution exercice 1 et 2
const brand = 'Msi'
const processor = 'Intel core I9 14 gth'
const graphicCard = 'Nivdia GeForce Rtx 5090 Ti'
const ram = 64
const storage = '2To'

if ((brand == 'Msi' || brand == Hp || brand == 'Asus rog') &&
  processor == 'Intel core I9 14 gth' &&
  graphicCard == 'Nivdia GeForce Rtx 5090 Ti' &&
  ram == 64 &&
  storage == '2To') {
  console.log('Votre ordinateur est pris en charge par la garantie')
  if (brand == "Msi") {
    switch (processor) {
      case 'Intel core I9 14 gth':
        console.log('Le temps de réparation est de 10 jours max')
        break
      case 'Intel core I7 14 gth':
        console.log('Le temps de réparation est de 20 jours max')
        break
      case 'Intel core I5 14 gth':
        console.log('Le temps de réparation est de 25 jours max')
      default:
        console.log('Le temps de réparation est de 35 jours max')
        break
    }
  } else {
    console.log('Le temps de réparation est de 40 jours max')
  }
} else {
  console.log("Votre ordinateur n'est pas pris en charge par la garantie")
}
