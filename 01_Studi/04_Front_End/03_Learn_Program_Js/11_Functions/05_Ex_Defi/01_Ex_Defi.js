let chaise = 120.50;
let table = 1200.99;
let vase = 420.01;
let canape = 12585.55;
const prices = [120.50,1200.99,420.01,12585.55];

// On créer une fonction pour calculer le prix promotionnel
function getPromoPrice(price, percent) {
    return price - (price * percent / 100)
}

// on créer une fonction pour remplacer le '.' par une ','

function formatPrice(price) {
    return price.toString().replace('.', ',') + ' €';
}

// On créer une fonction pour enlever les décimals

function roundDecimal(number) {
    return Math.ceil(number)
}

console.log('-----------------------------------------------');
for (let i = 0; i < prices.length; i++) {
    let newPromoPrice = getPromoPrice(prices[i], 25);
    let roundedPrice = roundDecimal(newPromoPrice);
    let finalPrice = formatPrice(roundedPrice);
    console.log(finalPrice);
}

console.log('-----------------------------------------------');

prices.forEach(function(price) {
    let newPromoPrice = getPromoPrice(price, 25);
    let roundedPrice = roundDecimal(newPromoPrice);
    let finalPrice = formatPrice(roundedPrice);
    console.log(finalPrice);
});


    
