// Exemple 1
/*
const displayProducts = async () => {
  // Fetch data through a AJAX request and parse the result with .json()
  const request = await fetch('https://api.my-awesome-example-shop.com');
  const products = await request.json();

  // Building an array containing a new DOM element (<li>) for each product
  const productsHtml = products.map((product) => {
    const el = document.createElement('li');
    const content = document.createTextNode(product.name);
    el.appendChild(content);
    return el;
  });

  // Appending our elements to the <ul>
  const productList = document.getElementById('product-list');
  productsHtml.forEach((productHtml) => {
    productList.append(productHtml);
  });
};*/

console.log('-------------------------------------')