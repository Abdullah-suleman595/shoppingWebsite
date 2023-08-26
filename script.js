function sendinfo(){
document.getElementById("1").value  = '';
document.getElementById("2").value  = '';
document.getElementById("3").value  = '';
}

const productListElement = document.getElementById('product-list');

fetch('https://api.escuelajs.co/api/v1/products')
  .then(response => response.json())
  .then(data => {
    // Call a function to render the product listing using the data
    renderProductListing(data);
  })
  .catch(error => {
    console.error('Error fetching data:', error);
  });

function renderProductListing(products) {
  // Clear any previous content
  productListElement.innerHTML = '';

  // Loop through the products and create HTML elements
  products.forEach(product => {
    const productElement = document.createElement('div');
    productElement.className = 'product';
    productElement.innerHTML = `
      <h2>${product.title}</h2>
      <p>${product.price}</p>
      <img src="${product.image}" alt="${product.title}">
    `;
    productListElement.appendChild(productElement);
  });
}