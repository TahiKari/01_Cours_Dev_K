let produtsTotalValue = '154.38';
let specialOffer = '10';
console.log(produtsTotalValue);
console.log(specialOffer);

let cartTotalValue = parseFloat(produtsTotalValue) - parseInt(specialOffer);

console.log(cartTotalValue);

let totalPriceDisplayed = 'Merci pour votre commande de ' + cartTotalValue +  '€, nous préparons l\'acheminement !';

console.log(totalPriceDisplayed);