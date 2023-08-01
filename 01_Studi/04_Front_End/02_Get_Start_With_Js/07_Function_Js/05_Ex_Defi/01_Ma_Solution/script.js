// Ma solution

let stock = 4029

let sold = 0

function sell (nbProducts, unitPrice) {
  stock -= nbProducts
  let total = nbProducts * unitPrice
  sold += total
  return total
}

function storeInfo() {
  let message = "Stock du magasin : " + stock + " produits\nSolde total : " + sold + " euros";
  console.log (message);
  return sold; 
}

console.log(sell(104, 10.5))
console.log(stock)
console.log(sold)
storeInfo()

