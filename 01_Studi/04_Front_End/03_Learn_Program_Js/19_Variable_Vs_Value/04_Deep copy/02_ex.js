

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
    let newMenu = JSON.parse(JSON.stringify(originalMenu))

    for (pizza of newMenu) {
      pizza.prices.medium *= priceModifier
      pizza.prices.large *= priceModifier
    }

    return newMenu
  }

  let winterMenu = createNewMenu(summerMenu, 1.1)

  console.log(summerMenu)
  console.log(winterMenu)