const deepCopyFunction = (inObject) => {
    let outObject, value, key

    if (typeof inObject !== "object" || inObject === null) {
      return inObject // Retourne la valeur si inObject n'est pas un objet
    }

    // Création d'un tableau ou d'un objet qui contiendra notre valeur
    outObject = Array.isArray(inObject) ? [] : {}

    for (key in inObject) {
      value = inObject[key]

      // On effectue une deep-copy de tous les objets imbriqués, ainsi que des tableaux
      outObject[key] = deepCopyFunction(value)
    }

    return outObject
}

let summerMenu = [{
    name: 'Margarita',
    prices: {
      medium: 6.00,
      large: 8.00
    }
  }, {
    name: 'Jambon Fromage',
    prices: {
      medium: 7.00,
      large: 9.00
    }
  }, {
    name: 'Mozzarella',
    prices: {
      medium: 6.00,
      large: 8.00
    }
  }]

  function createNewMenu(originalMenu, priceModifier) {
    let newMenu = deepCopyFunction(originalMenu)

    for (pizza of newMenu) {
      pizza.prices.medium *= priceModifier
      pizza.prices.large *= priceModifier
    }

    return newMenu
  }

  let winterMenu = createNewMenu(summerMenu, 1.1)

  console.log(summerMenu)
  console.log(winterMenu)